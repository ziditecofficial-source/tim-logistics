import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, MapPin, Navigation } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-slide-2.jpg";
import { useI18n } from "@/i18n/I18nProvider";

export const Hero = () => {
  const { t } = useI18n();

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center bg-black overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="TimWay Logistics" 
          className="w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        {/* Gradients for text readability and blending into the next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto py-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white uppercase tracking-wider mb-8 shadow-sm">
            {t("hero.badge")}
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-xl">
            {t("hero.title.1")} <span className="text-primary">{t("hero.title.2")}</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed font-medium drop-shadow-md">
            {t("hero.subtitle")}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="xl" className="shadow-primary-glow font-bold tracking-widest uppercase rounded-full px-8" asChild>
              <Link to="/contact">
                {t("hero.cta.request")} <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white hover:text-black font-bold tracking-widest uppercase rounded-full px-8 transition-colors" asChild>
              <Link to="/how-it-works/agents">{t("hero.cta.agent")}</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Floating Tracking/Booking Card */}
      <div className="container relative z-20 -mt-24 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto bg-card rounded-[2rem] shadow-card border border-border p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 w-full bg-muted rounded-2xl p-4 flex items-center gap-4 border border-border transition-colors focus-within:border-primary focus-within:bg-background">
              <div className="h-10 w-10 shrink-0 rounded-full bg-background grid place-items-center shadow-sm">
                <MapPin className="text-primary h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mb-1">Pickup Location</p>
                <input type="text" placeholder="Enter pickup address..." className="w-full bg-transparent border-none outline-none font-medium text-foreground placeholder:text-muted-foreground/50" />
              </div>
            </div>
            <div className="flex-1 w-full bg-muted rounded-2xl p-4 flex items-center gap-4 border border-border transition-colors focus-within:border-primary focus-within:bg-background">
              <div className="h-10 w-10 shrink-0 rounded-full bg-background grid place-items-center shadow-sm">
                <Navigation className="text-primary h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mb-1">Dropoff Location</p>
                <input type="text" placeholder="Enter dropoff address..." className="w-full bg-transparent border-none outline-none font-medium text-foreground placeholder:text-muted-foreground/50" />
              </div>
            </div>
            <Button size="xl" className="w-full md:w-auto rounded-2xl px-8 shadow-md h-full min-h-[72px]">
              <Package className="h-5 w-5 mr-2" /> Get Estimate
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
