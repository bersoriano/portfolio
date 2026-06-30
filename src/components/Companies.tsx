import Section from "./Section";
import { companies, startups } from "@/data/portfolio";

function Roster({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-1 gap-px border border-[var(--hairline)] bg-[var(--hairline)] sm:grid-cols-2 lg:grid-cols-4">
      {items.map((c) => (
        <div
          key={c}
          className="flex min-h-[5.5rem] items-center bg-ink px-5 py-4 text-sm font-medium leading-snug text-paper transition-colors hover:bg-ink-raised"
        >
          {c}
        </div>
      ))}
    </div>
  );
}

export default function Companies() {
  return (
    <Section id="companies" title="Clients & Employers" index="02">
      <div className="space-y-10">
        <div>
          <p className="mb-5 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-slate-dim">
            Enterprises
          </p>
          <Roster items={companies} />
        </div>
        <div>
          <p className="mb-5 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-slate-dim">
            Startups
          </p>
          <Roster items={startups} />
        </div>
      </div>
    </Section>
  );
}
