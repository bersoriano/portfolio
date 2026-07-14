/**
 * Convert a markdown draft into a Sanity `post` document and upsert it.
 *
 * Handles exactly the Portable Text the frontend renderer (PortableBody.tsx)
 * supports: block styles normal/h2/h3/blockquote, bullet/number lists, marks
 * strong/em/code/link, and the custom `code` and `table` object types.
 *
 * Usage: node scripts/import-post.mjs content/drafts/how-rag-actually-works.md [--dry]
 */
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { createClient } from "@sanity/client";

// --- tiny .env.local loader (no dependency) -------------------------------
function loadEnv(path = ".env.local") {
  const out = {};
  try {
    for (const line of readFileSync(path, "utf8").split("\n")) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m) out[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  } catch {}
  return out;
}

// --- key + inline helpers -------------------------------------------------
let _k = 0;
const key = () => `k${(_k++).toString(36)}`;

const DECORATORS = ["strong", "em", "code"];

// Recursive inline parser -> Portable Text spans + markDefs.
// activeMarks carries decorators/mark keys down through nesting.
function parseInline(text, spans, markDefs, activeMarks = []) {
  let i = 0;
  let plain = "";
  const flush = () => {
    if (plain) {
      spans.push({ _type: "span", _key: key(), text: plain, marks: [...activeMarks] });
      plain = "";
    }
  };
  while (i < text.length) {
    const rest = text.slice(i);

    // inline code — literal, no nested parsing
    if (text[i] === "`") {
      const end = text.indexOf("`", i + 1);
      if (end !== -1) {
        flush();
        spans.push({
          _type: "span",
          _key: key(),
          text: text.slice(i + 1, end),
          marks: [...activeMarks, "code"],
        });
        i = end + 1;
        continue;
      }
    }

    // link [text](url)
    const link = rest.match(/^\[([^\]]+)\]\(([^)]+)\)/);
    if (link) {
      flush();
      const defKey = key();
      markDefs.push({ _type: "link", _key: defKey, href: link[2] });
      parseInline(link[1], spans, markDefs, [...activeMarks, defKey]);
      i += link[0].length;
      continue;
    }

    // strong **...**
    if (text.startsWith("**", i)) {
      const end = text.indexOf("**", i + 2);
      if (end !== -1) {
        flush();
        parseInline(text.slice(i + 2, end), spans, markDefs, [...activeMarks, "strong"]);
        i = end + 2;
        continue;
      }
    }

    // em *...* (single asterisk, not part of **)
    if (text[i] === "*" && text[i + 1] !== "*") {
      const end = text.indexOf("*", i + 1);
      if (end !== -1) {
        flush();
        parseInline(text.slice(i + 1, end), spans, markDefs, [...activeMarks, "em"]);
        i = end + 1;
        continue;
      }
    }

    plain += text[i];
    i++;
  }
  flush();
}

function textBlock(style, text) {
  const spans = [];
  const markDefs = [];
  parseInline(text, spans, markDefs);
  return { _type: "block", _key: key(), style, markDefs, children: spans };
}

function listItemBlock(listItem, text) {
  const b = textBlock("normal", text);
  b.listItem = listItem;
  b.level = 1;
  return b;
}

// strip markdown inline markers to plain text (for table cells)
function stripInline(s) {
  return s
    .replace(/`([^`]*)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim();
}

// --- frontmatter ----------------------------------------------------------
function parseFrontmatter(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---\n?/);
  const fm = {};
  let body = md;
  if (m) {
    body = md.slice(m[0].length);
    for (const line of m[1].split("\n")) {
      const kv = line.match(/^(\w+):\s*(.*)$/);
      if (kv) fm[kv[1]] = kv[2].trim().replace(/^["']|["']$/g, "");
    }
  }
  return { fm, body };
}

// --- markdown body -> Portable Text array ---------------------------------
function toPortableText(body) {
  const lines = body.split("\n");
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // blank line
    if (trimmed === "") { i++; continue; }

    // horizontal rule / stray --- : skip
    if (/^---+$/.test(trimmed)) { i++; continue; }

    // standalone image ![alt](src) -> image block (asset uploaded in main)
    const img = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)\s*$/);
    if (img) {
      blocks.push({ _type: "image", _key: key(), alt: img[1], _localSrc: img[2] });
      i++;
      continue;
    }

    // fenced code block
    if (trimmed.startsWith("```")) {
      const lang = trimmed.slice(3).trim();
      const buf = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        buf.push(lines[i]);
        i++;
      }
      i++; // closing fence
      blocks.push({
        _type: "code",
        _key: key(),
        label: lang || undefined,
        code: buf.join("\n"),
      });
      continue;
    }

    // GFM table: header row then |---| separator
    if (trimmed.startsWith("|") && (lines[i + 1] || "").includes("---")) {
      const rowLines = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        rowLines.push(lines[i].trim());
        i++;
      }
      const parseRow = (l) =>
        l.replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => stripInline(c));
      const rows = rowLines
        .filter((l) => !/^\|?[\s:|-]+$/.test(l)) // drop the --- separator row
        .map((l) => ({ _type: "row", _key: key(), cells: parseRow(l) }));
      blocks.push({ _type: "table", _key: key(), rows });
      continue;
    }

    // headings (# is the title -> skip; renderer only has h2/h3)
    const h = trimmed.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      const level = h[1].length;
      if (level === 1) { i++; continue; }
      const style = level === 2 ? "h2" : "h3";
      blocks.push(textBlock(style, h[2]));
      i++;
      continue;
    }

    // blockquote (may span multiple > lines)
    if (trimmed.startsWith(">")) {
      const buf = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        buf.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      blocks.push(textBlock("blockquote", buf.join(" ")));
      continue;
    }

    // bullet list
    if (/^[-*]\s+/.test(trimmed)) {
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
        blocks.push(listItemBlock("bullet", lines[i].trim().replace(/^[-*]\s+/, "")));
        i++;
      }
      continue;
    }

    // numbered list
    if (/^\d+\.\s+/.test(trimmed)) {
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        blocks.push(listItemBlock("number", lines[i].trim().replace(/^\d+\.\s+/, "")));
        i++;
      }
      continue;
    }

    // paragraph: gather until blank line / block boundary
    const para = [trimmed];
    i++;
    while (i < lines.length) {
      const t = lines[i].trim();
      if (
        t === "" ||
        t.startsWith("```") ||
        t.startsWith(">") ||
        t.startsWith("|") ||
        /^#{1,6}\s/.test(t) ||
        /^[-*]\s+/.test(t) ||
        /^\d+\.\s+/.test(t) ||
        /^---+$/.test(t)
      ) break;
      para.push(t);
      i++;
    }
    blocks.push(textBlock("normal", para.join(" ")));
  }
  return blocks;
}

// --- main -----------------------------------------------------------------
async function main() {
  const args = process.argv.slice(2);
  const dry = args.includes("--dry");
  const file = args.find((a) => !a.startsWith("--"));
  if (!file) {
    console.error("Usage: node scripts/import-post.mjs <draft.md> [--dry]");
    process.exit(1);
  }

  const env = loadEnv();
  const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = env.NEXT_PUBLIC_SANITY_DATASET || "production";
  const apiVersion = env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-07-06";
  const token =
    process.env.SANITY_WRITE_TOKEN ||
    process.env.SANITY_STUDIO_API_TOKEN ||
    env.SANITY_STUDIO_API_TOKEN;

  const md = readFileSync(file, "utf8");
  const { fm, body } = parseFrontmatter(md);
  const bodyPT = toPortableText(body);

  const publishedAt = fm.publishedAt
    ? new Date(fm.publishedAt).toISOString()
    : new Date().toISOString();

  const doc = {
    _type: "post",
    title: fm.title,
    slug: { _type: "slug", current: fm.slug },
    publishedAt,
    excerpt: fm.excerpt,
    body: bodyPT,
  };

  const counts = bodyPT.reduce((a, b) => {
    a[b._type] = (a[b._type] || 0) + 1;
    return a;
  }, {});
  console.log(`Parsed "${doc.title}"`);
  console.log(`  slug: ${fm.slug}`);
  console.log(`  publishedAt: ${publishedAt}`);
  console.log(`  body blocks:`, counts);

  if (dry) {
    console.log("\n--dry: not writing. First 3 blocks:");
    console.log(JSON.stringify(bodyPT.slice(0, 3), null, 2));
    return;
  }

  if (!token) {
    console.error("Missing SANITY_STUDIO_API_TOKEN in .env.local");
    process.exit(1);
  }

  const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

  // upload any local images and swap the placeholder for a real asset ref
  const baseDir = dirname(resolve(file));
  for (const b of bodyPT) {
    if (b._type === "image" && b._localSrc) {
      const path = resolve(baseDir, b._localSrc);
      const asset = await client.assets.upload("image", readFileSync(path), {
        filename: b._localSrc.split("/").pop(),
      });
      b.asset = { _type: "reference", _ref: asset._id };
      delete b._localSrc;
      console.log(`  uploaded image ${b._localSrc || asset._id}`);
    }
  }

  // upsert by slug: reuse existing doc _id if present
  const existing = await client.fetch(
    `*[_type=="post" && slug.current==$slug][0]{_id}`,
    { slug: fm.slug }
  );
  if (existing?._id) {
    doc._id = existing._id;
    await client.createOrReplace(doc);
    console.log(`\nReplaced existing post ${existing._id}`);
  } else {
    const created = await client.create(doc);
    console.log(`\nCreated new post ${created._id}`);
  }
  console.log(`Live at /posts/${fm.slug}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
