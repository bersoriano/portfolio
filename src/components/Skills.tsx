import Section from "./Section";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" title="Capabilities" index="03">
      <div className="grid gap-px border border-[var(--hairline)] bg-[var(--hairline)] sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category} className="bg-ink p-6">
            <h3 className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-brass">
              {group.category}
            </h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-2 text-sm text-paper"
                >
                  <span className="text-brass/50">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
