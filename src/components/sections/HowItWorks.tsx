import { useState } from "react";
import { Smartphone, ShieldCheck, PackageCheck, UserPlus, FileCheck2, Bike } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

type Step = { icon: React.ComponentType<{ className?: string }>; titleKey: string; descKey: string };

export const HowItWorks = ({ forceTab }: { forceTab?: "user" | "agent" }) => {
  const { t } = useI18n();
  const [tab, setTab] = useState<"user" | "agent">(forceTab ?? "user");
  const activeTab = forceTab ?? tab;

  const userSteps: Step[] = [
    { icon: Smartphone, titleKey: "hiw.user.1.title", descKey: "hiw.user.1.desc" },
    { icon: PackageCheck, titleKey: "hiw.user.2.title", descKey: "hiw.user.2.desc" },
    { icon: ShieldCheck, titleKey: "hiw.user.3.title", descKey: "hiw.user.3.desc" },
  ];
  const agentSteps: Step[] = [
    { icon: UserPlus, titleKey: "hiw.agent.1.title", descKey: "hiw.agent.1.desc" },
    { icon: FileCheck2, titleKey: "hiw.agent.2.title", descKey: "hiw.agent.2.desc" },
    { icon: Bike, titleKey: "hiw.agent.3.title", descKey: "hiw.agent.3.desc" },
  ];
  const steps = activeTab === "user" ? userSteps : agentSteps;

  return (
    <section className="container py-20 md:py-28">
      <div className="max-w-2xl mb-10">
        <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">{t("hiw.eyebrow")}</p>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">
          {t("hiw.title.1")} <span className="bg-gradient-primary bg-clip-text text-transparent [-webkit-background-clip:text] not-italic">{t("hiw.title.2")}</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">{t("hiw.subtitle")}</p>
      </div>

      {/* Tabs (hidden when a tab is forced via route) */}
      {!forceTab && (
        <div className="inline-flex p-1.5 rounded-full bg-muted mb-12">
          {(["user", "agent"] as const).map((k) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-smooth ${
                activeTab === k ? "bg-card shadow-soft text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(`hiw.tab.${k}`)}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-3 relative">
        {/* Subtle background glow connecting the cards */}
        <div className="absolute top-1/2 left-1/4 right-1/4 h-24 bg-primary/10 blur-[80px] -z-10 rounded-full hidden md:block" />
        
        {steps.map(({ icon: Icon, titleKey, descKey }, i) => (
          <div 
            key={titleKey} 
            className="relative bg-white dark:bg-card rounded-3xl p-8 shadow-soft border border-border/60 overflow-hidden group hover:shadow-card hover:-translate-y-2 transition-all duration-500"
          >
            {/* Giant Background Number */}
            <div className="absolute -right-4 -bottom-12 text-[140px] leading-none font-display font-black text-muted/50 group-hover:text-primary/5 transition-colors pointer-events-none select-none">
              {i + 1}
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-500 shadow-sm">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="h-10 w-10 rounded-full border-2 border-border grid place-items-center text-muted-foreground font-bold text-sm group-hover:border-primary group-hover:text-primary transition-colors">
                  0{i + 1}
                </div>
              </div>
              <h3 className="font-display text-2xl font-extrabold mb-3 text-foreground">{t(titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-[90%]">{t(descKey)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
