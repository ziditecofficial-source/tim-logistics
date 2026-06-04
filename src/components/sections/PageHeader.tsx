import { ReactNode } from "react";

export const PageHeader = ({ eyebrow, title, subtitle, children }: { eyebrow?: string; title: string; subtitle?: string; children?: ReactNode }) => (
  <section className="bg-gradient-hero">
    <div className="container py-16 md:py-24 max-w-3xl">
      {eyebrow && <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">{eyebrow}</p>}
      <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight">{title}</h1>
      {subtitle && <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{subtitle}</p>}
      {children && <div className="mt-8">{children}</div>}
    </div>
  </section>
);
