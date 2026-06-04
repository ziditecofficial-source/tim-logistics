import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import timLogo from "@/assets/tim-logo-light.png";

/**
 * Full-screen modern loader shown:
 *  - on the very first paint of the app
 *  - briefly on every route change
 * Animation: orange orbital ring sweeping around the TIM "t" mark.
 */
export const PageLoader = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    const timeout = window.setTimeout(() => setVisible(false), 650);
    return () => window.clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Soft warm radial backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(var(--accent)) 0%, hsl(var(--background)) 70%)",
        }}
      />

      <div className="relative flex flex-col items-center gap-6">
        <div className="relative h-28 w-28">
          {/* Outer rotating gradient ring */}
          <div className="absolute inset-0 rounded-full animate-spin-slow"
               style={{
                 background:
                   "conic-gradient(from 0deg, hsl(var(--primary)) 0%, hsl(var(--primary-glow)) 35%, transparent 70%, transparent 100%)",
                 mask: "radial-gradient(circle, transparent 58%, black 60%)",
                 WebkitMask: "radial-gradient(circle, transparent 58%, black 60%)",
               }}
          />
          {/* Pulse halo */}
          <div className="absolute inset-2 rounded-full bg-primary/10 animate-loader-pulse" />
          {/* Logo center */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="h-16 w-16 rounded-2xl bg-card shadow-card grid place-items-center">
              <img src={timLogo} alt="TIM" className="h-9 w-auto" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-loader-dot" style={{ animationDelay: "0ms" }} />
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-loader-dot" style={{ animationDelay: "150ms" }} />
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-loader-dot" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
};
