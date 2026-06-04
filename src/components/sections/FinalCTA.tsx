import { Button } from "@/components/ui/button";
import rider from "@/assets/rider.jpg";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Link } from "react-router-dom";

export const FinalCTA = () => {
  const { t } = useI18n();
  return (
    <section className="container pb-20">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-primary text-primary-foreground p-10 md:p-16 shadow-glow">
        <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-background/10 blur-3xl" />
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-foreground/10 blur-3xl" />
        <div className="relative grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold leading-tight">{t("cta.title")}</h2>
            <p className="mt-4 opacity-90 text-lg max-w-md">{t("cta.subtitle")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
                <Link to="/contact">
                  {t("cta.request")} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outlineWarm" size="xl" className="w-full sm:w-auto" asChild>
                <Link to="/how-it-works/agents">{t("cta.agent")}</Link>
              </Button>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-card">
            <img src={rider} alt="TIM" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
