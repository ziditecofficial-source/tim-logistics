import { Button } from "@/components/ui/button";
import business from "@/assets/business.jpg";
import riders from "@/assets/riders-team.jpg";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Link } from "react-router-dom";

export const Programs = () => {
  const { t } = useI18n();
  return (
    <section className="bg-gradient-warm py-20 md:py-28">
      <div className="container grid lg:grid-cols-2 gap-8">
        <div className="bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-smooth group">
          <div className="aspect-[16/10] overflow-hidden">
            <img src={business} alt={t("prog.business.title")} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-smooth duration-700" />
          </div>
          <div className="p-8">
            <span className="text-xs font-semibold tracking-wider uppercase text-primary">{t("prog.business.eyebrow")}</span>
            <h3 className="font-display text-3xl font-extrabold mt-2">{t("prog.business.title")}</h3>
            <p className="mt-3 text-muted-foreground">{t("prog.business.desc")}</p>
            <Button variant="hero" asChild>
                <Link to="/businesses">
                   {t("prog.business.cta")} <ArrowRight className="h-4 w-4" />
                </Link>
            </Button>
          </div>
        </div>

        <div className="bg-foreground text-background rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-smooth group">
          <div className="aspect-[16/10] overflow-hidden">
            <img src={riders} alt={t("prog.partner.title")} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-smooth duration-700" />
          </div>
          <div className="p-8">
            <span className="text-xs font-semibold tracking-wider uppercase text-primary-glow">{t("prog.partner.eyebrow")}</span>
            <h3 className="font-display text-3xl font-extrabold mt-2">{t("prog.partner.title")}</h3>
            <p className="mt-3 text-background/80">{t("prog.partner.desc")}</p>
              <Button variant="hero" asChild>
                <Link to="/partnerships">
                   {t("prog.partner.cta")} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
