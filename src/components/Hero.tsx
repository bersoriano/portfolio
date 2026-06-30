import Image from "next/image";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Background */}
      <Image
        src="/sgbkg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />

      {/* Content */}
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-12 px-6 py-32 text-white sm:py-44 md:flex-row md:justify-between md:gap-16">
        <div className="flex flex-col">
          <p className="mb-4 font-mono text-sm text-white/70">
            {profile.location}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            {profile.name}
            <span className="block text-white/60">{profile.role}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
            {profile.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 text-sm font-medium">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-black transition-opacity hover:opacity-90"
            >
              View my work
            </a>
            <a
              href={profile.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/40 px-6 py-3 transition-colors hover:bg-white/10"
            >
              Book a call
            </a>
          </div>
        </div>
        <div className="shrink-0">
          <Image
            src="/bsoriano.jpg"
            alt={`Portrait of ${profile.name}`}
            width={320}
            height={400}
            priority
            className="h-64 w-64 rounded-2xl object-cover object-top shadow-2xl ring-1 ring-white/20 sm:h-80 sm:w-72"
          />
        </div>
      </div>
    </section>
  );
}
