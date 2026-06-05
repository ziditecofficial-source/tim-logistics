import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHeader } from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Link } from "react-router-dom";

const Contact = () => {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <PageHeader eyebrow={t("page.contact.eyebrow")} title={t("page.contact.title")} subtitle={t("page.contact.subtitle")} />
      <section className="container py-16 grid lg:grid-cols-2 gap-10">
        <div className="bg-card rounded-3xl p-8 shadow-soft space-y-6">
          <div className="flex items-start gap-4">
            <div className="h-11 w-11 rounded-xl bg-accent grid place-items-center text-primary"><MapPin className="h-5 w-5" /></div>
            <div>
              <p className="text-sm text-muted-foreground">{t("page.contact.operating")}</p>
              <p className="font-display font-bold text-lg">{t("footer.location")}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="h-11 w-11 rounded-xl bg-accent grid place-items-center text-primary"><Mail className="h-5 w-5" /></div>
            <div>
              <p className="text-sm text-muted-foreground">{t("page.contact.reach")}</p>
              <Link to="/contact" className="font-display font-bold text-lg hover:text-primary">{t("page.contact.formCta")}</Link>
            </div>
          </div>
          <Button variant="hero" size="lg" className="w-full" asChild>
            <Link to="/contact">
              {t("page.contact.openForm")} <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="bg-gradient-primary text-primary-foreground rounded-3xl p-8 md:p-10 shadow-card">
          <h3 className="font-display text-3xl font-extrabold">{t("page.contact.apps.title")}</h3>
          <p className="mt-3 opacity-90">{t("page.contact.apps.desc")}</p>
          <div className="grid gap-3 mt-6">
            <a href="https://play.google.com/store/apps/details?id=com.tim_logistics.app" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-2xl bg-background/15 hover:bg-background/25 transition-smooth">▶ TimWay ({t("dl.users.tag")}) — Google Play</a>
            <a href="https://apps.apple.com/us/app/tim-logistic/id6745712258" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-2xl bg-background/15 hover:bg-background/25 transition-smooth"> TimWay ({t("dl.users.tag")}) — App Store</a>
            <a href="https://play.google.com/store/apps/details?id=com.afrovisiongroup.tim_agent_app" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-2xl bg-background/15 hover:bg-background/25 transition-smooth">▶ TimWay Agent — Google Play</a>
            <a href="https://apps.apple.com/us/app/tim-agent/id6745712376" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-2xl bg-background/15 hover:bg-background/25 transition-smooth"> TimWay Agent — App Store</a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Contact;
