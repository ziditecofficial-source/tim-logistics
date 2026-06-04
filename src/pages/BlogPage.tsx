import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHeader } from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Link } from "react-router-dom";

const Blog = () => {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <PageHeader eyebrow={t("page.blog.eyebrow")} title={t("page.blog.title")} subtitle={t("page.blog.subtitle")} />
      <section className="container py-16">
        <div className="bg-card rounded-3xl p-10 md:p-16 shadow-soft text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-extrabold">{t("page.blog.soon.title")}</h2>
          <p className="text-muted-foreground mt-3">{t("page.blog.soon.desc")}</p>
          <Button variant="hero" size="lg" className="mt-6" asChild>
            <a href="https://tim.cm/" target="_blank" rel="noreferrer">{t("page.blog.visit")} <ArrowRight className="h-4 w-4" /></a>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Blog;
