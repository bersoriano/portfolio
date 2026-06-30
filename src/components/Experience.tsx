import Section from "./Section";
import { experience, education } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-10">
        {experience.map((job) => (
          <div
            key={job.company}
            className="grid gap-2 sm:grid-cols-[160px_1fr] sm:gap-8"
          >
            <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400">
              {job.period}
            </p>
            <div>
              <h3 className="text-lg font-medium">
                {job.role}{" "}
                <span className="text-zinc-400 dark:text-zinc-500">
                  · {job.company}
                </span>
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {job.summary}
              </p>
            </div>
          </div>
        ))}
        <div className="grid gap-2 border-t border-black/[.06] pt-10 dark:border-white/[.08] sm:grid-cols-[160px_1fr] sm:gap-8">
          <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400">
            Education
          </p>
          <div>
            <h3 className="text-lg font-medium">{education.degree}</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {education.school}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
