import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/I18nProvider";
import { LangToggle } from "@/components/LangToggle";
import timLogo from "@/assets/tim-logo.png";

export const SiteHeader = () => {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  useLocation();
  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/services", label: t("nav.services") },
    { to: "/how-it-works/customers", label: t("nav.howItWorks") },
    { to: "/businesses", label: t("nav.businesses") },
    { to: "/partnerships", label: t("nav.partnerships") },
    { to: "/about", label: t("nav.about") },
    { to: "/blog", label: t("nav.blog") },
    { to: "/contact", label: t("nav.contact") },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/60">
      <div className="container flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="TimWay home">
          <img src="/timway.png" alt="TimWay" className="h-9 md:h-10 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <RouterNavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-smooth ${
                  isActive ? "bg-accent text-accent-foreground" : "text-foreground/80 hover:text-foreground hover:bg-muted"
                }`
              }
            >
              {n.label}
            </RouterNavLink>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <LangToggle />
          <Button variant="hero" size="default" asChild>
            <Link to="/how-it-works/agents">{t("nav.becomeAgent")}</Link>
          </Button>
        </div>
        <div className="lg:hidden flex items-center gap-2">
          <LangToggle />
          <button
            className="p-2 rounded-lg hover:bg-muted"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background">
          <div className="container py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <RouterNavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-medium ${
                    isActive ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                  }`
                }
              >
                {n.label}
              </RouterNavLink>
            ))}
            <Button variant="hero" className="mt-2" asChild>
              <Link to="/how-it-works/agents" onClick={() => setOpen(false)}>{t("nav.becomeAgent")}</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
