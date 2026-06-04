import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHeader } from "@/components/sections/PageHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useI18n } from "@/i18n/I18nProvider";

const FAQs = () => {
  const { t } = useI18n();
  const faqs = [1, 2, 3, 4, 5, 6].map((i) => ({ q: t(`faq.q${i}`), a: t(`faq.a${i}`) }));
  return (
    <SiteLayout>
      <PageHeader eyebrow={t("faq.eyebrow")} title={t("faq.title")} subtitle={t("faq.page.subtitle")} />
      <section className="container py-16 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-2xl border-0 shadow-soft px-6">
              <AccordionTrigger className="text-left font-display font-bold text-lg hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </SiteLayout>
  );
};

export default FAQs;
