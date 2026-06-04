import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHeader } from "@/components/sections/PageHeader";
import { Services as ServicesGrid } from "@/components/sections/Services";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { useI18n } from "@/i18n/I18nProvider";

const ServicesPage = () => {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <PageHeader eyebrow={t("services.eyebrow")} title={`${t("services.title.1")} ${t("services.title.2")}`} subtitle={t("services.subtitle")} />
      <ServicesGrid />
      <FinalCTA />
    </SiteLayout>
  );
};

export default ServicesPage;
