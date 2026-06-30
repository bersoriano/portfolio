import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, title, children }: Props) {
  return (
    <section
      id={id}
      className="mx-auto max-w-5xl scroll-mt-16 border-t border-black/[.06] px-6 py-20 dark:border-white/[.08]"
    >
      <h2 className="mb-10 text-sm font-mono font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        {title}
      </h2>
      {children}
    </section>
  );
}
