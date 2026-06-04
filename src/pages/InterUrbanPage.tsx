import { SiteLayout } from "@/components/layout/SiteLayout";
import { InterCity } from "@/components/sections/InterCity";
import { PageHeader } from "@/components/sections/PageHeader";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { useI18n } from "@/i18n/I18nProvider";

const InterUrban = () => {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <PageHeader eyebrow={t("page.iu.eyebrow")} title={t("page.iu.title")} subtitle={t("page.iu.subtitle")} />
      <InterCity />
      <FinalCTA />
    </SiteLayout>
  );
};

export default InterUrban;
