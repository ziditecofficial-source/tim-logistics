import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHeader } from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bike, ClipboardList } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Link } from "react-router-dom";

const Partnerships = () => {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <PageHeader eyebrow={t("page.partner.eyebrow")} title={t("page.partner.title")} subtitle={t("page.partner.subtitle")}>
        <Button variant="hero" size="xl" asChild>
          <Link to="/partnerships">
            {t("page.partner.cta")} <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </PageHeader>
      <section className="container py-16 grid md:grid-cols-2 gap-6">
        <div className="bg-card rounded-3xl p-8 shadow-soft">
          <Bike className="h-8 w-8 text-primary" />
          <h3 className="font-display text-2xl font-bold mt-4">{t("page.partner.rider.title")}</h3>
          <p className="text-muted-foreground mt-2">{t("page.partner.rider.desc")}</p>
          <Button variant="outlineWarm" className="mt-5" asChild>
            <Link to="/contact" className="mt-4 text-primary font-bold hover:underline">{t("page.partner.rider.cta")}</Link>
          </Button>
        </div>
        <div className="bg-card rounded-3xl p-8 shadow-soft">
          <ClipboardList className="h-8 w-8 text-primary" />
          <h3 className="font-display text-2xl font-bold mt-4">{t("page.partner.fleet.title")}</h3>
          <p className="text-muted-foreground mt-2">{t("page.partner.fleet.desc")}</p>
          <Button variant="outlineWarm" className="mt-5" asChild>
            <Link to="/partnerships" className="mt-4 text-primary font-bold hover:underline">{t("page.partner.fleet.cta")}</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Partnerships;
