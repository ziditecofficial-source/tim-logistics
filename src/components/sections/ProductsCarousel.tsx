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
              className="group relative shrink-0 w-full md:w-[42%] lg:w-[32%] xl:w-[28%] rounded-3xl overflow-hidden bg-card shadow-soft hover:shadow-card transition-smooth"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={t(p.titleKey)} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-smooth duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-card/90 backdrop-blur text-[11px] font-semibold uppercase tracking-wider">{t(p.tagKey)}</span>
                <div className="absolute top-5 right-5 h-10 w-10 rounded-full bg-card/90 backdrop-blur grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-7 text-background">
                  <h3 className="font-display text-2xl md:text-3xl font-extrabold leading-tight">{t(p.titleKey)}</h3>
                  <p className="mt-2 text-sm text-background/85 line-clamp-3">{t(p.descKey)}</p>
                  <span className="inline-block mt-4 text-xs font-semibold tracking-wider uppercase border-b border-background/40 pb-0.5">{t("products.learnMore")}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
