import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-black/[.06] dark:border-white/[.08]">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-zinc-500 dark:text-zinc-400 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-6">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
