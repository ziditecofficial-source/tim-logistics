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
      <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
        {/* User card */}
        <div className="relative overflow-hidden bg-white dark:bg-card rounded-[2.5rem] p-8 md:p-12 shadow-card border border-border group">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative z-10 flex flex-col h-full">
            <span className="inline-block w-fit px-3 py-1 rounded-full bg-primary/10 text-xs font-bold uppercase tracking-wider text-primary mb-6">{t("dl.users.tag")}</span>
            <h3 className="font-display text-3xl md:text-4xl font-extrabold leading-tight text-foreground">{t("dl.users.title.1")}<br />{t("dl.users.title.2")}</h3>
            <p className="mt-4 text-muted-foreground text-base max-w-sm">{t("dl.users.desc")}</p>
            
            <div className="mt-auto pt-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="inline-flex flex-col items-center bg-white dark:bg-muted border border-border rounded-2xl p-3 shadow-sm group-hover:shadow-md transition-shadow">
                <img src={qrUser} alt={t("dl.qr.user")} className="h-24 w-24 md:h-28 md:w-28 mix-blend-multiply dark:mix-blend-normal" />
                <p className="text-center text-foreground text-[10px] font-bold uppercase tracking-widest mt-2">{t("dl.qr.scan")}</p>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <Store href="https://play.google.com/store/apps/details?id=com.tim_logistics.app" label={t("dl.store.googleLabel")} sub={t("dl.store.googleSub")} icon={Play} />
                <Store href="https://apps.apple.com/us/app/tim-logistic/id6745712258" label={t("dl.store.appleLabel")} sub={t("dl.store.appleSub")} icon={Apple} />
              </div>
            </div>
          </div>
        </div>

        {/* Agent card */}
        <div className="relative overflow-hidden bg-foreground text-background rounded-[2.5rem] p-8 md:p-12 shadow-card border border-border group">
          <div className="absolute bottom-0 right-0 -mr-20 -mb-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative z-10 flex flex-col h-full">
            <span className="inline-block w-fit px-3 py-1 rounded-full bg-background/20 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-background mb-6">{t("dl.agents.tag")}</span>
            <h3 className="font-display text-3xl md:text-4xl font-extrabold leading-tight text-background">{t("dl.agents.title.1")}<br />{t("dl.agents.title.2")}</h3>
            <p className="mt-4 text-background/80 text-base max-w-sm">{t("dl.agents.desc")}</p>
            
            <div className="mt-auto pt-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="inline-flex flex-col items-center bg-white border border-border rounded-2xl p-3 shadow-sm group-hover:shadow-md transition-shadow">
                <img src={qrAgent} alt={t("dl.qr.agent")} className="h-24 w-24 md:h-28 md:w-28" />
                <p className="text-center text-foreground text-[10px] font-bold uppercase tracking-widest mt-2">{t("dl.qr.scan")}</p>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <Store href="https://play.google.com/store/apps/details?id=com.afrovisiongroup.tim_agent_app" label={t("dl.store.googleLabel")} sub={t("dl.store.googleSub")} icon={Play} />
                <Store href="https://apps.apple.com/us/app/tim-agent/id6745712376" label={t("dl.store.appleLabel")} sub={t("dl.store.appleSub")} icon={Apple} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
