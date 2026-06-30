"use client";

import { useState } from "react";
import Section from "./Section";
import { recommendations } from "@/data/portfolio";

export default function Recommendations() {
  const [index, setIndex] = useState(0);
  const count = recommendations.length;

  const go = (next: number) => setIndex((next + count) % count);
  const current = recommendations[index];

  return (
    <Section id="recommendations" title="Recommendations">
      <div className="relative">
        <figure className="flex min-h-[16rem] flex-col rounded-2xl border border-black/[.08] p-8 dark:border-white/[.1]">
          <blockquote className="flex-1">
            <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              “{current.text}”
            </p>
          </blockquote>
          <figcaption className="mt-6 border-t border-black/[.06] pt-5 dark:border-white/[.08]">
            <p className="font-medium text-foreground">{current.name}</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {current.title}
            </p>
            <p className="mt-1 font-mono text-xs text-zinc-400 dark:text-zinc-500">
              {current.relation}
            </p>
          </figcaption>
        </figure>

        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            aria-label="Previous recommendation"
            onClick={() => go(index - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[.12] transition-colors hover:bg-black/[.04] dark:border-white/[.18] dark:hover:bg-white/[.06]"
          >
            ←
          </button>

          <div className="flex items-center gap-2">
            {recommendations.map((r, i) => (
              <button
                key={r.name}
                type="button"
                aria-label={`Go to recommendation ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-foreground"
                    : "w-2 bg-black/20 hover:bg-black/40 dark:bg-white/25 dark:hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next recommendation"
            onClick={() => go(index + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[.12] transition-colors hover:bg-black/[.04] dark:border-white/[.18] dark:hover:bg-white/[.06]"
          >
            →
          </button>
        </div>

        <p className="mt-4 text-center font-mono text-xs text-zinc-400 dark:text-zinc-500">
          {index + 1} / {count}
        </p>
      </div>
    </Section>
  );
}
