import { Button } from "@/components/ui/button";
import intercity from "@/assets/intercity.jpg";
import { Plane, MapPin, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Link } from "react-router-dom";

export const InterCity = () => {
  const { t } = useI18n();
  return (
    <section className="container py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-3xl overflow-hidden shadow-card aspect-[5/4]">
          <img src={intercity} alt={t("ic.title.2")} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/45 to-transparent" />
          <span className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-card/90 backdrop-blur text-xs font-semibold uppercase tracking-wider">{t("ic.tag")}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">{t("ic.eyebrow")}</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">
            {t("ic.title.1")} <span className="bg-gradient-primary bg-clip-text text-transparent [-webkit-background-clip:text]">{t("ic.title.2")}</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">{t("ic.subtitle")}</p>
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <div className="bg-card rounded-2xl p-5 shadow-soft">
              <MapPin className="h-6 w-6 text-primary" />
              <h3 className="font-display font-bold text-lg mt-3">{t("ic.c2c.title")}</h3>
              <p className="text-sm text-muted-foreground mt-1">{t("ic.c2c.desc")}</p>
            </div>
            <div className="bg-card rounded-2xl p-5 shadow-soft">
              <Plane className="h-6 w-6 text-primary" />
              <h3 className="font-display font-bold text-lg mt-3">{t("ic.airport.title")}</h3>
              <p className="text-sm text-muted-foreground mt-1">{t("ic.airport.desc")}</p>
            </div>
          </div>
          <Button variant="hero" size="lg" className="mt-8" asChild>
            <Link to="/inter-urban">
              {t("ic.cta")} <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
