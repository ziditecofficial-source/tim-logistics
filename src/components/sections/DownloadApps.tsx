import { Apple, Play } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import qrUser from "@/assets/qr-user.png";
import qrAgent from "@/assets/qr-agent.png";

const Store = ({ href, label, sub, icon: Icon }: { href: string; label: string; sub: string; icon: any }) => (
  <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-smooth">
    <Icon className="h-7 w-7" />
    <div className="text-left">
      <p className="text-[10px] uppercase tracking-wider opacity-70">{sub}</p>
      <p className="font-display font-bold text-sm leading-tight">{label}</p>
    </div>
  </a>
);

export const DownloadApps = () => {
  const { t } = useI18n();
  return (
    <section className="container py-20 md:py-28">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">{t("dl.eyebrow")}</p>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">{t("dl.title")}</h2>
        <p className="mt-4 text-muted-foreground text-lg">{t("dl.subtitle")}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {/* User card */}
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-10 text-primary-foreground shadow-card">
          <span className="px-3 py-1 rounded-full bg-background/20 text-xs font-semibold uppercase tracking-wider">{t("dl.users.tag")}</span>
          <h3 className="font-display text-3xl md:text-4xl font-extrabold mt-4 leading-tight">{t("dl.users.title.1")}<br />{t("dl.users.title.2")}</h3>
          <div className="mt-6 inline-flex flex-col items-center bg-background rounded-2xl p-3 shadow-card">
            <img src={qrUser} alt={t("dl.qr.user")} className="h-32 w-32" />
            <p className="text-center text-foreground text-[10px] font-semibold uppercase tracking-wider mt-2">{t("dl.qr.scan")}</p>
          </div>
          <p className="mt-6 opacity-90 max-w-md">{t("dl.users.desc")}</p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Store href="https://play.google.com/store/apps/details?id=com.tim_logistics.app" label={t("dl.store.googleLabel")} sub={t("dl.store.googleSub")} icon={Play} />
            <Store href="https://apps.apple.com/us/app/tim-logistic/id6745712258" label={t("dl.store.appleLabel")} sub={t("dl.store.appleSub")} icon={Apple} />
          </div>
        </div>

        {/* Agent card */}
        <div className="bg-foreground text-background rounded-3xl p-8 md:p-10 shadow-card">
          <span className="px-3 py-1 rounded-full bg-primary/20 text-xs font-semibold uppercase tracking-wider text-primary-glow">{t("dl.agents.tag")}</span>
          <h3 className="font-display text-3xl md:text-4xl font-extrabold mt-4 leading-tight">{t("dl.agents.title.1")}<br />{t("dl.agents.title.2")}</h3>
          <div className="mt-6 inline-flex flex-col items-center bg-background rounded-2xl p-3 shadow-card">
            <img src={qrAgent} alt={t("dl.qr.agent")} className="h-32 w-32" />
            <p className="text-center text-foreground text-[10px] font-semibold uppercase tracking-wider mt-2">{t("dl.qr.scan")}</p>
          </div>
          <p className="mt-6 opacity-80 max-w-md">{t("dl.agents.desc")}</p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Store href="https://play.google.com/store/apps/details?id=com.afrovisiongroup.tim_agent_app" label={t("dl.store.googleLabel")} sub={t("dl.store.googleSub")} icon={Play} />
            <Store href="https://apps.apple.com/us/app/tim-agent/id6745712376" label={t("dl.store.appleLabel")} sub={t("dl.store.appleSub")} icon={Apple} />
          </div>
        </div>
      </div>
    </section>
  );
};
