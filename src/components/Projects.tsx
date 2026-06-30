import Section from "./Section";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" title="Selected Work" index="04">
      <div className="border-t border-[var(--hairline)]">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="group grid gap-4 border-b border-[var(--hairline)] py-8 md:grid-cols-[3rem_1fr_auto] md:gap-8"
          >
            <span className="tnum font-mono text-sm text-slate-dim">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="max-w-2xl">
              <h3 className="font-display text-xl font-light text-paper transition-colors group-hover:text-brass sm:text-2xl">
                {p.title}
              </h3>
              <p className="mt-3 leading-7 text-slate">{p.description}</p>
            </div>
            <ul className="flex h-fit flex-wrap gap-x-4 gap-y-1 md:justify-end">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="font-mono text-xs uppercase tracking-[0.1em] text-slate-dim"
                >
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
