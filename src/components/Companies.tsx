import Section from "./Section";
import { companies, startups } from "@/data/portfolio";

function Logos({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((c) => (
        <li
          key={c}
          className="flex items-center text-base font-medium text-zinc-700 dark:text-zinc-300"
        >
          {c}
        </li>
      ))}
    </ul>
  );
}

export default function Companies() {
  return (
    <Section id="companies" title="Companies I've worked with">
      <div className="space-y-10">
        <div>
          <h3 className="mb-5 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Enterprises
          </h3>
          <Logos items={companies} />
        </div>
        <div>
          <h3 className="mb-5 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Startups
          </h3>
          <Logos items={startups} />
        </div>
      </div>
    </Section>
  );
}
