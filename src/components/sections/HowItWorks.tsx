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

      {/* Steps with curved dashed connectors (alternating up/down like tim.cm) */}
      <div className="relative grid gap-8 md:gap-4 md:grid-cols-3">
        {/* Connector arc 1: step 1 → 2 (curves down) */}
        <svg
          aria-hidden
          className="hidden md:block absolute pointer-events-none top-8 left-[16%] w-[34%] h-16 text-primary/40"
          viewBox="0 0 200 60"
          preserveAspectRatio="none"
        >
          <path d="M 5 5 Q 100 70 195 5" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" />
          <polygon points="195,5 188,2 188,12" fill="currentColor" />
        </svg>
        {/* Connector arc 2: step 2 → 3 (curves up) */}
        <svg
          aria-hidden
          className="hidden md:block absolute pointer-events-none top-0 left-[50%] w-[34%] h-16 text-primary/40"
          viewBox="0 0 200 60"
          preserveAspectRatio="none"
        >
          <path d="M 5 55 Q 100 -10 195 55" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" />
          <polygon points="195,55 188,52 188,62" fill="currentColor" />
        </svg>

        {steps.map(({ icon: Icon, titleKey, descKey }, i) => (
          <div key={titleKey} className="relative bg-card rounded-3xl p-6 shadow-soft hover:shadow-card transition-smooth z-10">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 rounded-full border-2 border-primary/30 grid place-items-center font-display font-extrabold text-xl text-primary">
                {i + 1}
              </div>
              <div className="h-12 w-12 rounded-2xl bg-gradient-primary grid place-items-center text-primary-foreground shadow-cta">
                <Icon className="h-5 w-5" />
              </div>
            </div>
            <h3 className="mt-5 font-display text-lg font-bold">{t(titleKey)}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t(descKey)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
