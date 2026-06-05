import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHeader } from "@/components/sections/PageHeader";
import { FinalCTA } from "@/components/sections/FinalCTA";
import riders from "@/assets/riders-team.jpg";
import { useI18n } from "@/i18n/I18nProvider";

const About = () => {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <PageHeader eyebrow={t("page.about.eyebrow")} title={t("page.about.title")} subtitle={t("page.about.subtitle")} />
      <section className="container py-16 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl overflow-hidden shadow-card aspect-[4/3]">
          <img src={riders} alt="TimWay" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>{t("page.about.p1")}</p>
          <p>{t("page.about.p2")}</p>
        </div>
      </section>
      <FinalCTA />
    </SiteLayout>
  );
};

export default About;
