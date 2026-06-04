import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroSlide1 from "@/assets/hero-user.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import { useI18n } from "@/i18n/I18nProvider";

export const Hero = () => {
  const { t } = useI18n();
  const slides = [
    { img: heroSlide1, alt: "TIM user ordering on the app", contain: true },
    { img: heroSlide2, alt: "TIM delivery agent on a scooter", contain: false },
    { img: heroSlide3, alt: "TIM business partners discussing logistics", contain: false },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => window.clearInterval(id);
  }, [slides.length]);

  const current = slides[index];

  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 -z-0 opacity-40">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute top-40 -left-32 h-80 w-80 rounded-full bg-primary-glow/40 blur-3xl" />
      </div>
      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 py-16 md:py-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/80 backdrop-blur border border-border/60 text-xs font-medium text-foreground/70 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-primary" /> {t("hero.badge")}
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            {t("hero.title.1")} <span className="bg-gradient-primary bg-clip-text text-transparent [-webkit-background-clip:text]">{t("hero.title.2")}</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">{t("hero.subtitle")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="hero" size="xl" asChild>
              <Link to="/how-it-works/agents">
                {t("hero.cta.agent")} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outlineWarm" size="xl" asChild>
              <Link to="/contact">{t("hero.cta.request")}</Link>
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div><span className="font-display font-bold text-foreground text-2xl">5★</span> {t("hero.stat.rating")}</div>
            <div className="h-8 w-px bg-border" />
            <div><span className="font-display font-bold text-foreground text-2xl">2</span> {t("hero.stat.cities")}</div>
            <div className="h-8 w-px bg-border" />
            <div><span className="font-display font-bold text-foreground text-2xl">5+</span> {t("hero.stat.services")}</div>
          </div>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          <div className="relative aspect-square max-w-lg mx-auto">
            {/* Soft warm halo, sits BEHIND the slide */}
            <div className="absolute inset-8 rounded-[2.5rem] bg-gradient-primary opacity-30 blur-2xl -z-0" />

            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-glow bg-card">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={current.img}
                  alt={current.alt}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`absolute inset-0 h-full w-full ${current.contain ? "object-contain p-2" : "object-cover"}`}
                />
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-smooth ${
                    i === index ? "w-8 bg-primary" : "w-2 bg-foreground/20 hover:bg-foreground/40"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="absolute -bottom-2 -left-4 md:-left-10 bg-card rounded-2xl shadow-card p-4 flex items-center gap-3 animate-float">
            <div className="h-10 w-10 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground font-bold">⚡</div>
            <div>
              <p className="text-xs text-muted-foreground">{t("hero.float.live")}</p>
              <p className="text-sm font-semibold">{t("hero.float.eta")}</p>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-card p-4 hidden md:block">
            <p className="text-xs text-muted-foreground">{t("hero.float.earn")}</p>
            <p className="font-display font-extrabold text-xl">{t("hero.float.flex")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
