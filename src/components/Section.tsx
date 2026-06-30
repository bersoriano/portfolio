import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  index?: string;
  children: ReactNode;
};

export default function Section({ id, title, index, children }: Props) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-t border-[var(--hairline)]"
    >
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="mb-12 flex items-baseline justify-between gap-6">
          <h2 className="eyebrow">{title}</h2>
          {index && (
            <span className="tnum font-mono text-xs text-slate-dim">
              {index}
            </span>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
