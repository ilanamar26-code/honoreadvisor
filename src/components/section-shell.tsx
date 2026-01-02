import type { ReactNode } from "react";

type SectionShellProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function SectionShell({
  eyebrow,
  title,
  description,
  children
}: SectionShellProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">
          {eyebrow}
        </p>
        <h1 className="section-title text-3xl font-semibold text-accent-darkBlue sm:text-4xl">
          {title}
        </h1>
        {description ? <p className="mt-4 text-muted">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
