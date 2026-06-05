import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import food from "@/assets/food-grocery.jpg";
import parcel from "@/assets/parcel.jpg";
import intercity from "@/assets/intercity.jpg";
import relocation from "@/assets/relocation.jpg";
import riders from "@/assets/riders-team.jpg";
import business from "@/assets/business.jpg";
import { useI18n } from "@/i18n/I18nProvider";

export const ProductsCarousel = () => {
  const { t } = useI18n();
  const products = [
    { tagKey: "products.tag.everyday", titleKey: "service.food", descKey: "product.food.desc", img: food, href: "/contact" },
    { tagKey: "products.tag.logistics", titleKey: "service.parcel", descKey: "product.parcel.desc", img: parcel, href: "/contact" },
    { tagKey: "products.tag.travel", titleKey: "service.intercity", descKey: "product.intercity.desc", img: intercity, href: "/inter-urban" },
    { tagKey: "products.tag.moving", titleKey: "service.relocation", descKey: "product.relocation.desc", img: relocation, href: "/contact" },
    { tagKey: "products.tag.network", titleKey: "service.thirdparty", descKey: "product.thirdparty.desc", img: riders, href: "/contact" },
    { tagKey: "products.tag.business", titleKey: "product.business.title", descKey: "product.business.desc", img: business, href: "/businesses" },
  ];
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false, slidesToScroll: 1, containScroll: "trimSnaps" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-gradient-warm py-20 md:py-28">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">{t("products.eyebrow")}</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">
              {t("products.title.1")} <span className="bg-gradient-primary bg-clip-text text-transparent [-webkit-background-clip:text]">{t("products.title.2")}</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">{t("products.subtitle")}</p>
          </div>
          {/* Navigation arrows - hidden on mobile as it becomes a list */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              aria-label="Previous"
              className="h-12 w-12 rounded-full bg-card shadow-soft grid place-items-center hover:bg-primary hover:text-primary-foreground disabled:opacity-40 disabled:hover:bg-card disabled:hover:text-foreground transition-smooth"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              aria-label="Next"
              className="h-12 w-12 rounded-full bg-card shadow-soft grid place-items-center hover:bg-primary hover:text-primary-foreground disabled:opacity-40 disabled:hover:bg-card disabled:hover:text-foreground transition-smooth"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: Vertical Stack | Desktop: Horizontal Carousel */}
      <div className="overflow-hidden md:overflow-visible" ref={emblaRef}>
        <div className="flex flex-col md:flex-row gap-6 px-4 md:pl-[max(1rem,calc((100vw-1400px)/2+1rem))] md:pr-4">
          {products.map((p) => (
            <Link
              key={p.titleKey}
              to={p.href}
              className="group relative shrink-0 w-full md:w-[42%] lg:w-[32%] xl:w-[28%] rounded-3xl overflow-hidden bg-card shadow-soft hover:shadow-card transition-smooth flex flex-col border border-border"
            >
              {/* Top Image Half */}
              <div className="relative h-64 w-full overflow-hidden shrink-0">
                <img src={p.img} alt={t(p.titleKey)} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-smooth duration-700" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/90 backdrop-blur text-[11px] font-semibold uppercase tracking-wider text-foreground">{t(p.tagKey)}</span>
              </div>
              
              {/* Bottom Content Half */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display text-2xl font-extrabold leading-tight text-foreground group-hover:text-primary transition-colors">{t(p.titleKey)}</h3>
                  <div className="h-10 w-10 shrink-0 rounded-full bg-muted grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-6 flex-1 leading-relaxed">{t(p.descKey)}</p>
                <span className="inline-block mt-auto text-xs font-bold tracking-wider uppercase text-primary/80 group-hover:text-primary transition-colors">{t("products.learnMore")}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
