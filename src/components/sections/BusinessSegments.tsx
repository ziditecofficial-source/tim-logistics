import { ShoppingBag, Store, Briefcase } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export const BusinessSegments = () => {
  const { t } = useI18n();
  const segments = [
    { icon: ShoppingBag, titleKey: "seg.restaurants.title", descKey: "seg.restaurants.desc" },
    { icon: Store, titleKey: "seg.sellers.title", descKey: "seg.sellers.desc" },
    { icon: Briefcase, titleKey: "seg.corporate.title", descKey: "seg.corporate.desc" },
  ];
  return (
    <section className="container py-20 md:py-28">
      <div className="max-w-2xl mb-12">
        <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">{t("segments.eyebrow")}</p>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">{t("segments.title")}</h2>
        <p className="mt-4 text-muted-foreground text-lg">{t("segments.subtitle")}</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {segments.map(({ icon: Icon, titleKey, descKey }) => (
          <div key={titleKey} className="group bg-card rounded-3xl p-8 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth">
            <div className="h-14 w-14 rounded-2xl bg-gradient-primary grid place-items-center text-primary-foreground shadow-cta group-hover:scale-110 transition-smooth">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-2xl font-bold mt-6">{t(titleKey)}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{t(descKey)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
