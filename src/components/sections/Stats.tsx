import { useI18n } from "@/i18n/I18nProvider";

export const Stats = () => {
  const { t } = useI18n();
  const stats = [
    { value: "2", labelKey: "stats.cities" },
    { value: "5+", labelKey: "stats.services" },
    { value: "1000s", labelKey: "stats.customers" },
    { value: "24/7", labelKey: "stats.tracking" },
  ];
  return (
    <section className="container py-16 md:py-20">
      <div className="bg-foreground text-background rounded-[2.5rem] p-10 md:p-16 shadow-card">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-semibold text-primary-glow tracking-wider uppercase mb-3">{t("stats.eyebrow")}</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight">{t("stats.title")}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.labelKey} className="border-l-2 border-primary pl-5">
              <p className="font-display text-4xl md:text-6xl font-extrabold bg-gradient-primary bg-clip-text text-transparent [-webkit-background-clip:text]">{s.value}</p>
              <p className="mt-2 text-sm md:text-base text-background/70">{t(s.labelKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
