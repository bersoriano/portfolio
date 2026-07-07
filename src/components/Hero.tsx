import Image from "next/image";
import type { Profile } from "@/data/portfolio";

export default function Hero({ profile }: { profile: Profile }) {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Ambient background */}
      <Image
        src="/sgbkg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover opacity-[0.16]"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_70%_0%,rgba(194,161,77,0.10),transparent_55%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-ink" />

      <div className="mx-auto max-w-5xl px-6 pt-28 pb-24 sm:pt-36 sm:pb-32">
        {/* Dossier header */}
        <div className="border-b border-[var(--hairline)] pb-5">
          <span className="eyebrow">{profile.role}</span>
        </div>

        <div className="mt-14 grid items-end gap-12 md:grid-cols-[1fr_auto] md:gap-16">
          <div>
            <h1 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] font-light leading-[0.98] tracking-[-0.02em] text-paper">
              Bernardo
              <span className="block italic text-brass">Soriano</span>
            </h1>
            <p className="mt-8 max-w-xl font-display text-xl font-light leading-relaxed text-slate sm:text-2xl">
              Thirteen years architecting the digital products for investment banks, healthcare companies,
              fintechs, startups and the platforms people trust with their money and
              their health.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm">
              <a
                href={profile.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-brass px-6 py-3 font-medium text-ink transition-colors hover:bg-brass-bright"
              >
                Book a call
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 border border-[var(--hairline)] px-6 py-3 font-medium text-paper transition-colors hover:border-brass"
              >
                View selected work
              </a>
            </div>
          </div>

          {/* Portrait, brass-ruled */}
          <div className="relative w-fit">
            <div className="absolute -inset-2 -z-10 border border-[var(--hairline)]" />
            <Image
              src="/bsoriano.jpg"
              alt={`Portrait of ${profile.name}`}
              width={320}
              height={400}
              priority
              className="h-72 w-60 object-cover object-top grayscale-[0.25] sm:h-80 sm:w-64"
            />
          </div>
        </div>

        {/* Footer meta strip */}
        <dl className="mt-16 grid grid-cols-1 gap-px border border-[var(--hairline)] bg-[var(--hairline)] sm:grid-cols-3">
          {[
            ["Based", profile.location],
            ["Focus", "Product Design & Development · AI Optimization"],
            ["Domains", "Finance · Healthcare"],
          ].map(([k, v]) => (
            <div key={k} className="bg-ink px-5 py-4">
              <dt className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-slate-dim">
                {k}
              </dt>
              <dd className="mt-1 text-sm text-paper">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
