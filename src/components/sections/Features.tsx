import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Link } from "react-router-dom";

export const Features = () => {
  const { t } = useI18n();
  const features = [
    { titleKey: "feat.kyc.title", descKey: "feat.kyc.desc" },
    { titleKey: "feat.manage.title", descKey: "feat.manage.desc" },
    { titleKey: "feat.earnings.title", descKey: "feat.earnings.desc" },
    { titleKey: "feat.payments.title", descKey: "feat.payments.desc" },
  ];
  return (
    <section className="bg-gradient-warm py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">{t("features.eyebrow")}</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">{t("features.title")}</h2>
            <p className="mt-4 text-muted-foreground text-lg">{t("features.subtitle")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild>
                <Link to="/how-it-works/customers">{t("features.users")}</Link>
              </Button>
              <Button variant="outlineWarm" size="lg" asChild>
                <Link to="/how-it-works/agents">{t("features.agents")}</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            {features.map((f) => (
              <div key={f.titleKey} className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-accent grid place-items-center text-primary shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl">{t(f.titleKey)}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{t(f.descKey)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
