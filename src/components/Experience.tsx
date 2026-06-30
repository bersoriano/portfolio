import Section from "./Section";
import { experience, education } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" title="Career Ledger" index="05">
      <div className="border-t border-[var(--hairline)]">
        {experience.map((job) => (
          <div
            key={job.company}
            className="grid gap-3 border-b border-[var(--hairline)] py-8 sm:grid-cols-[8rem_1fr] sm:gap-10"
          >
            <p className="tnum font-mono text-sm tracking-wide text-brass">
              {job.period}
            </p>
            <div>
              <h3 className="font-display text-xl font-light text-paper">
                {job.role}
                <span className="text-slate"> — {job.company}</span>
              </h3>
              <p className="mt-3 max-w-2xl leading-7 text-slate">
                {job.summary}
              </p>
            </div>
          </div>
        ))}

        <div className="grid gap-3 py-8 sm:grid-cols-[8rem_1fr] sm:gap-10">
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-slate-dim">
            Education
          </p>
          <div>
            <h3 className="font-display text-xl font-light text-paper">
              {education.degree}
            </h3>
            <p className="mt-2 text-slate">{education.school}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
