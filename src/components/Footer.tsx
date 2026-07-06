import type { Profile } from "@/data/portfolio";

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="border-t border-[var(--hairline)]">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-dim">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-6 font-mono text-xs uppercase tracking-[0.16em] text-slate">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brass"
          >
            GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brass"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-brass"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
