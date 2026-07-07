import Link from "next/link";

import Section from "./Section";
import type { PostSummary } from "@/sanity/fetchPosts";

function formatDate(value: string | null) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function Writing({ posts }: { posts: PostSummary[] }) {
  if (posts.length === 0) return null;

  return (
    <Section id="writing" title="Writing" index="07">
      <div className="border-t border-[var(--hairline)]">
        {posts.slice(0, 4).map((p) => (
          <article
            key={p._id}
            className="group grid gap-2 border-b border-[var(--hairline)] py-8 md:grid-cols-[1fr_auto] md:items-baseline md:gap-8"
          >
            <div className="max-w-2xl">
              <h3 className="font-display text-xl font-light text-paper transition-colors group-hover:text-brass sm:text-2xl">
                <Link href={`/posts/${p.slug}`}>{p.title}</Link>
              </h3>
              {p.excerpt && (
                <p className="mt-3 leading-7 text-slate">{p.excerpt}</p>
              )}
            </div>
            <time
              dateTime={p.publishedAt ?? undefined}
              className="font-mono text-xs uppercase tracking-[0.1em] text-slate-dim md:text-right"
            >
              {formatDate(p.publishedAt)}
            </time>
          </article>
        ))}
      </div>

      <Link
        href="/posts"
        className="mt-8 inline-block font-mono text-xs uppercase tracking-[0.14em] text-slate transition-colors hover:text-brass"
      >
        All writing →
      </Link>
    </Section>
  );
}
