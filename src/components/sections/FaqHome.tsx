import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Link } from "react-router-dom";

export const FaqHome = () => {
  const { t } = useI18n();
  const faqs = [1, 2, 3, 4, 5].map((i) => ({ q: t(`faq.q${i}`), a: t(`faq.a${i}`) }));
  return (
    <section className="container py-20 md:py-28 grid lg:grid-cols-2 gap-12">
      <div>
        <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">{t("faq.eyebrow")}</p>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">{t("faq.title")}</h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-md">{t("faq.subtitle")}</p>
        <Button variant="outlineWarm" asChild>
          <Link to="/contact">
            {t("faq.contact")} <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-2xl border-0 shadow-soft px-6">
            <AccordionTrigger className="text-left font-display font-bold text-base md:text-lg hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
