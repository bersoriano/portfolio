import Section from "./Section";
import { about } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-2xl space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
        {about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
