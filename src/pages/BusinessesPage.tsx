import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHeader } from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/button";
import business from "@/assets/business.jpg";
import { ArrowRight, Megaphone, Truck, Users } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Link } from "react-router-dom";

const Businesses = () => {
  const { t } = useI18n();
  const items = [
    { icon: Truck, titleKey: "page.biz.streamlined.title", descKey: "page.biz.streamlined.desc" },
    { icon: Megaphone, titleKey: "page.biz.ads.title", descKey: "page.biz.ads.desc" },
    { icon: Users, titleKey: "page.biz.reach.title", descKey: "page.biz.reach.desc" },
  ];
  return (
    <SiteLayout>
      <PageHeader eyebrow={t("page.biz.eyebrow")} title={t("page.biz.title")} subtitle={t("page.biz.subtitle")}>
        <Button variant="hero" size="xl" asChild>
          <Link to="/businesses">
            {t("page.biz.cta")} <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </PageHeader>
      <section className="container py-16 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl overflow-hidden shadow-card aspect-[4/3]">
          <img src={business} alt="TIM for Businesses" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="grid gap-4">
          {items.map(({ icon: Icon, titleKey, descKey }) => (
            <div key={titleKey} className="bg-card rounded-2xl p-6 shadow-soft flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-accent grid place-items-center text-primary"><Icon className="h-5 w-5" /></div>
              <div>
                <h3 className="font-display font-bold text-xl">{t(titleKey)}</h3>
                <p className="text-muted-foreground mt-1">{t(descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
};

export default Businesses;
