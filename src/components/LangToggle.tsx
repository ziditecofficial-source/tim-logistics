import { useI18n } from "@/i18n/I18nProvider";
import { Globe } from "lucide-react";

export const LangToggle = ({ className = "" }: { className?: string }) => {
  const { lang, setLang, t } = useI18n();
  return (
    <button
      onClick={() => setLang(lang === "en" ? "fr" : "en")}
      aria-label={t("lang.switch")}
      title={t("lang.switch")}
      className={`inline-flex items-center gap-2 h-10 px-3 rounded-full border border-border bg-card hover:bg-accent transition-smooth text-sm font-semibold ${className}`}
    >
      <Globe className="h-4 w-4 text-primary" />
      <span className={lang === "en" ? "text-foreground" : "text-muted-foreground"}>EN</span>
      <span className="text-border">/</span>
      <span className={lang === "fr" ? "text-foreground" : "text-muted-foreground"}>FR</span>
    </button>
  );
};
