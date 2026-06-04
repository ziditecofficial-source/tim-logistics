import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHeader } from "@/components/sections/PageHeader";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useI18n } from "@/i18n/I18nProvider";

const HowItWorksCustomers = () => {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <PageHeader
        eyebrow={t("hiw.eyebrow")}
        title={t("page.hiw.customers.title")}
        subtitle={t("page.hiw.customers.subtitle")}
      >
        <div className="flex flex-wrap gap-3">
          <Button variant="hero" size="xl" asChild>
            <Link to="/how-it-works/customers">{t("hiw.tab.user")}</Link>
          </Button>
          <Button variant="outlineWarm" size="xl" asChild>
            <Link to="/how-it-works/agents">{t("hiw.tab.agent")}</Link>
          </Button>
        </div>
      </PageHeader>
      <HowItWorks forceTab="user" />
      <FinalCTA />
    </SiteLayout>
  );
};

export default HowItWorksCustomers;
