import { Quote } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export const Testimonials = () => {
  const { t } = useI18n();
  const items = [
    { quoteKey: "test.1.quote", name: "Marie N.", roleKey: "test.1.role" },
    { quoteKey: "test.2.quote", name: "Eric K.", roleKey: "test.2.role" },
    { quoteKey: "test.3.quote", name: "Patricia M.", roleKey: "test.3.role" },
  ];
  return (
    <section className="bg-gradient-warm py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">{t("test.eyebrow")}</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">{t("test.title")}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <figure key={it.name} className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-card transition-smooth flex flex-col">
              <Quote className="h-8 w-8 text-primary" />
              <blockquote className="mt-5 text-lg leading-relaxed text-foreground flex-1">"{t(it.quoteKey)}"</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <p className="font-display font-bold">{it.name}</p>
                <p className="text-sm text-muted-foreground">{t(it.roleKey)}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
