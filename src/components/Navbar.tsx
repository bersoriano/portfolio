import Link from "next/link";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[.06] bg-background/80 backdrop-blur dark:border-white/[.08]">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="#top" className="font-mono text-sm font-semibold tracking-tight">
          {profile.name}
        </Link>
        <ul className="hidden items-center gap-8 text-sm text-zinc-600 dark:text-zinc-400 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
