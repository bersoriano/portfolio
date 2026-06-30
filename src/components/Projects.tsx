import Section from "./Section";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" title="Selected Work">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="flex flex-col rounded-2xl border border-black/[.08] p-6 transition-colors hover:border-black/20 dark:border-white/[.1] dark:hover:border-white/30"
          >
            <h3 className="text-lg font-medium">{p.title}</h3>
            <p className="mt-2 flex-1 text-zinc-600 dark:text-zinc-400">
              {p.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-md bg-black/[.04] px-2 py-1 font-mono text-xs text-zinc-600 dark:bg-white/[.06] dark:text-zinc-300"
                >
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex gap-4 text-sm font-medium">
              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:underline"
                >
                  Live ↗
                </a>
              )}
              {p.repoUrl && (
                <a
                  href={p.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-400"
                >
                  Code ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
