import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import food from "@/assets/food-grocery.jpg";
import parcel from "@/assets/parcel.jpg";
import intercity from "@/assets/intercity.jpg";
import relocation from "@/assets/relocation.jpg";
import riders from "@/assets/riders-team.jpg";
import { useI18n } from "@/i18n/I18nProvider";

export const Services = () => {
  const { t } = useI18n();
  const services = [
    { titleKey: "service.food", descKey: "service.food.desc", img: food, href: "/contact" },
    { titleKey: "service.parcel", descKey: "service.parcel.desc", img: parcel, href: "/contact" },
    { titleKey: "service.intercity", descKey: "service.intercity.desc", img: intercity, href: "/inter-urban" },
    { titleKey: "service.relocation", descKey: "service.relocation.desc", img: relocation, href: "/contact" },
    { titleKey: "service.thirdparty", descKey: "service.thirdparty.desc", img: riders, href: "/contact" },
  ];
  return (
    <section id="services" className="container py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">{t("services.eyebrow")}</p>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">
          {t("services.title.1")} <span className="not-italic bg-gradient-primary bg-clip-text text-transparent [-webkit-background-clip:text]">{t("services.title.2")}</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">{t("services.subtitle")}</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Link
            key={s.titleKey}
            to={s.href}
            className={`group relative overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-card transition-smooth ${
              i === 0 ? "lg:row-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className={`relative ${i === 0 ? "aspect-[4/5]" : "aspect-[16/11]"} overflow-hidden`}>
              <img src={s.img} alt={t(s.titleKey)} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-smooth duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-card/90 backdrop-blur grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                <ArrowUpRight className="h-5 w-5" />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6 text-background">
                <h3 className="font-display text-2xl font-bold">{t(s.titleKey)}</h3>
                <p className="mt-2 text-sm text-background/85 max-w-sm">{t(s.descKey)}</p>
                <span className="inline-block mt-4 text-xs font-semibold tracking-wider uppercase border-b border-background/40 pb-0.5">{t("services.requestService")}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
