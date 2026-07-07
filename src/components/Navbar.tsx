import Link from "next/link";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#companies", label: "Clients" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Career" },
  { href: "#recommendations", label: "References" },
  { href: "/posts", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--hairline)] bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="#top"
          className="font-display text-base tracking-tight text-paper"
        >
          {profile.name}
          <span className="text-brass">.</span>
        </Link>
        <ul className="hidden items-center gap-7 font-mono text-xs uppercase tracking-[0.14em] text-slate sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="transition-colors hover:text-brass"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={profile.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[var(--hairline)] px-4 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:border-brass hover:text-brass"
        >
          Book a call
        </a>
      </nav>
    </header>
  );
}
