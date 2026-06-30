import Section from "./Section";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <Section id="contact" title="Get in Touch" index="07">
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:gap-16">
        <p className="font-display text-3xl font-light leading-tight text-paper sm:text-4xl">
          Building something that has to be{" "}
          <span className="italic text-brass">right</span>? Let&rsquo;s talk.
        </p>
        <div className="flex flex-col gap-px border border-[var(--hairline)] bg-[var(--hairline)]">
          <a
            href={profile.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between bg-ink px-6 py-5 transition-colors hover:bg-ink-raised"
          >
            <div>
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-slate-dim">
                Schedule
              </p>
              <p className="mt-1 text-paper">Book a call</p>
            </div>
            <span className="text-brass transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center justify-between bg-ink px-6 py-5 transition-colors hover:bg-ink-raised"
          >
            <div>
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-slate-dim">
                Email
              </p>
              <p className="mt-1 text-paper">{profile.email}</p>
            </div>
            <span className="text-brass transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between bg-ink px-6 py-5 transition-colors hover:bg-ink-raised"
          >
            <div>
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-slate-dim">
                Network
              </p>
              <p className="mt-1 text-paper">LinkedIn</p>
            </div>
            <span className="text-brass transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>
      </div>
    </Section>
  );
}
