"use client";

import { useState } from "react";
import Section from "./Section";
import type { Recommendation } from "@/data/portfolio";

export default function Recommendations({
  recommendations,
}: {
  recommendations: Recommendation[];
}) {
  const [index, setIndex] = useState(0);
  const count = recommendations.length;
  if (count === 0) {
    return null;
  }

  const go = (next: number) => setIndex((next + count) % count);
  const current = recommendations[index];

  return (
    <Section id="recommendations" title="In Their Words" index="06">
      <figure className="border border-[var(--hairline)] bg-ink-raised p-8 sm:p-12">
        <span aria-hidden className="font-display text-5xl leading-none text-brass">
          &ldquo;
        </span>
        <blockquote className="mt-4 min-h-[10rem]">
          <p className="font-display text-xl font-light leading-relaxed text-paper sm:text-2xl">
            {current.text}
          </p>
        </blockquote>
        <figcaption className="mt-8 flex flex-wrap items-baseline justify-between gap-2 border-t border-[var(--hairline)] pt-5">
          <div>
            <span className="font-medium text-paper">{current.name}</span>
            <span className="text-slate"> · {current.title}</span>
          </div>
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-slate-dim">
            {current.relation}
          </span>
        </figcaption>
      </figure>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {recommendations.map((r, i) => (
            <button
              key={r.name}
              type="button"
              aria-label={`Recommendation ${i + 1}: ${r.name}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-px transition-all ${
                i === index
                  ? "w-8 bg-brass"
                  : "w-4 bg-slate-dim hover:bg-slate"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="tnum font-mono text-xs text-slate-dim">
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
          <button
            type="button"
            aria-label="Previous recommendation"
            onClick={() => go(index - 1)}
            className="flex h-9 w-9 items-center justify-center border border-[var(--hairline)] text-paper transition-colors hover:border-brass hover:text-brass"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next recommendation"
            onClick={() => go(index + 1)}
            className="flex h-9 w-9 items-center justify-center border border-[var(--hairline)] text-paper transition-colors hover:border-brass hover:text-brass"
          >
            →
          </button>
        </div>
      </div>
    </Section>
  );
}
