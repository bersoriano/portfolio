import Section from "./Section";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="max-w-2xl">
        <p className="text-2xl font-medium leading-snug sm:text-3xl">
          Have a project in mind or just want to say hi?
        </p>
        <div className="mt-6 flex flex-col gap-2 text-lg text-zinc-600 dark:text-zinc-400">
          <a
            href={`mailto:${profile.email}`}
            className="underline underline-offset-4 hover:text-foreground"
          >
            {profile.email}
          </a>
          <a
            href={profile.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            Schedule a call ↗
          </a>
        </div>
      </div>
    </Section>
  );
}
