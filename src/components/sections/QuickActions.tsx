import { Package, ShoppingBag, Bike, Car, Gift } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Link } from "react-router-dom";

export const QuickActions = () => {
  const { t } = useI18n();
  const actions = [
    { icon: Package, label: t("qa.delivery"), desc: t("qa.delivery.desc"), href: "/contact" },
    { icon: ShoppingBag, label: t("qa.food"), desc: t("qa.food.desc"), href: "/contact" },
    { icon: Car, label: t("qa.ride"), desc: t("qa.ride.desc"), href: "/inter-urban" },
    { icon: Bike, label: t("qa.agent"), desc: t("qa.agent.desc"), href: "/how-it-works/agents" },
    { icon: Gift, label: t("qa.bonus"), desc: t("qa.bonus.desc"), href: "/how-it-works/customers" },
  ];
  return (
    <section className="container -mt-10 md:-mt-16 relative z-20">
      <div className="bg-card rounded-3xl shadow-card p-4 md:p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {actions.map(({ icon: Icon, label, desc, href }) => (
          <Link
            key={label}
            to={href}
            className="group p-4 rounded-2xl hover:bg-accent transition-smooth flex flex-col items-start gap-3"
          >
            <div className="h-11 w-11 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground shadow-cta group-hover:scale-110 transition-smooth">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display font-bold text-sm leading-tight">{label}</p>
              <p className="text-xs text-muted-foreground mt-1">{desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
