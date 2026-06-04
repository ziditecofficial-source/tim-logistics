import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Mail } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import timLogoLight from "@/assets/tim-logo-light.png";

export const SiteFooter = () => {
  const { t } = useI18n();
  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="container py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center" aria-label="TIM home">
            <img src={timLogoLight} alt="TIM" className="h-11 w-auto" />
          </Link>
          <p className="mt-4 text-sm text-background/70 leading-relaxed">{t("footer.tagline")}</p>
          <div className="flex gap-3 mt-6">
            <a href="#" aria-label="Facebook" className="h-9 w-9 rounded-full bg-background/10 grid place-items-center hover:bg-primary transition-smooth"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="h-9 w-9 rounded-full bg-background/10 grid place-items-center hover:bg-primary transition-smooth"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="h-9 w-9 rounded-full bg-background/10 grid place-items-center hover:bg-primary transition-smooth"><Twitter className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold mb-4">{t("footer.services")}</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><Link to="/services" className="hover:text-primary">{t("service.food")}</Link></li>
            <li><Link to="/services" className="hover:text-primary">{t("service.parcel")}</Link></li>
            <li><Link to="/inter-urban" className="hover:text-primary">{t("service.intercity")}</Link></li>
            <li><Link to="/services" className="hover:text-primary">{t("service.relocation")}</Link></li>
            <li><Link to="/services" className="hover:text-primary">{t("service.thirdparty")}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold mb-4">{t("footer.company")}</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><Link to="/about" className="hover:text-primary">{t("nav.about")}</Link></li>
            <li><Link to="/businesses" className="hover:text-primary">{t("nav.businesses")}</Link></li>
            <li><Link to="/partnerships" className="hover:text-primary">{t("nav.partnerships")}</Link></li>
            <li><Link to="/blog" className="hover:text-primary">{t("nav.blog")}</Link></li>
            <li><Link to="/faqs" className="hover:text-primary">{t("nav.faqs")}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold mb-4">{t("footer.contact")}</h4>
          <ul className="space-y-3 text-sm text-background/70">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> {t("footer.location")}</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /> <Link to="/contact" className="hover:text-primary">{t("footer.contactForm")}</Link></li>
          </ul>
          <div className="flex flex-col gap-2 mt-5">
            <a href="https://play.google.com/store/apps/details?id=com.tim_logistics.app" target="_blank" rel="noreferrer" className="text-xs px-4 py-2 rounded-lg bg-background/10 hover:bg-primary transition-smooth">▶ Google Play</a>
            <a href="https://apps.apple.com/us/app/tim-logistic/id6745712258" target="_blank" rel="noreferrer" className="text-xs px-4 py-2 rounded-lg bg-background/10 hover:bg-primary transition-smooth"> App Store</a>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-background/60">
          <p>© {new Date().getFullYear()} TIM. {t("footer.rights")}</p>
          <p>{t("footer.built")}</p>
        </div>
      </div>
    </footer>
  );
};
