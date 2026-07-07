import Image from "next/image";
import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from "@portabletext/react";

import { urlFor } from "@/sanity/lib/image";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mt-6 leading-8 text-slate">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-12 font-display text-2xl font-light text-paper">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 font-display text-xl font-light text-paper">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-8 border-l-2 border-brass pl-6 text-lg italic text-paper">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-6 list-disc space-y-2 pl-6 leading-8 text-slate">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-6 list-decimal space-y-2 pl-6 leading-8 text-slate">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-medium text-paper">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-ink-raised px-1.5 py-0.5 font-mono text-sm text-brass-bright">
        {children}
      </code>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brass underline underline-offset-4 transition-colors hover:text-brass-bright"
      >
        {children}
      </a>
    ),
  },
  types: {
    code: ({ value }) => {
      if (!value?.code) return null;
      return (
        <figure className="mt-8">
          {value.label && (
            <figcaption className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-brass">
              {value.label}
            </figcaption>
          )}
          <pre className="overflow-x-auto border border-[var(--hairline)] bg-ink-raised p-5 font-mono text-sm leading-6 text-paper">
            <code>{value.code}</code>
          </pre>
        </figure>
      );
    },
    table: ({ value }) => {
      const rows: { cells?: string[] }[] = value?.rows ?? [];
      if (rows.length === 0) return null;
      const [head, ...body] = rows;
      return (
        <figure className="mt-8 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            {head?.cells && (
              <thead>
                <tr className="border-b border-brass/40">
                  {head.cells.map((c, i) => (
                    <th
                      key={i}
                      className="py-3 pr-4 font-mono text-xs uppercase tracking-[0.1em] text-brass"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {body.map((row, ri) => (
                <tr
                  key={ri}
                  className="border-b border-[var(--hairline)] align-top"
                >
                  {(row.cells ?? []).map((c, ci) => (
                    <td
                      key={ci}
                      className={
                        ci === 0
                          ? "py-3 pr-4 font-medium text-paper"
                          : "py-3 pr-4 text-slate"
                      }
                    >
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {value?.caption && (
            <figcaption className="mt-3 font-mono text-xs text-slate-dim">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure className="mt-8">
          <Image
            src={urlFor(value).width(1600).fit("max").auto("format").url()}
            alt={value.alt ?? ""}
            width={1600}
            height={900}
            className="h-auto w-full border border-[var(--hairline)]"
          />
        </figure>
      );
    },
  },
};

export default function PortableBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
