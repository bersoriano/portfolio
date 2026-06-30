import Section from "./Section";
import { about } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about" title="Profile" index="01">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <p className="font-display text-2xl font-light leading-snug text-paper sm:text-3xl">
          I&rsquo;m on a mission to build products that meaningfully improve
          people&rsquo;s lives and expand what humans are capable of.
        </p>
        <div className="space-y-6 text-base leading-7 text-slate">
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
