import { AlertCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { cn } from "@/lib/utils";

type EmergencyBannerProps = {
  overHero?: boolean;
};

export function EmergencyBanner({ overHero = false }: EmergencyBannerProps) {
  const { label, phone, phoneDisplay } = siteConfig.emergency;

  return (
    <div
      role="region"
      aria-label="Havarijná linka"
      className={cn(
        "transition-colors duration-500",
        overHero
          ? "bg-transparent text-shadow-nav text-white"
          : "bg-transparent text-grand-gray-dark"
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-5 gap-y-1 px-6 pb-1 pt-3.5 text-[11px] uppercase tracking-[0.14em] sm:text-xs md:pt-4">
        <span className="inline-flex items-center gap-2.5 font-medium">
          <AlertCircle className="h-3.5 w-3.5 text-grand-orange" aria-hidden />
          {label}
        </span>
        <PhoneLink
          phone={phone}
          display={phoneDisplay}
          className={cn(
            "text-[11px] tracking-wide sm:text-xs",
            overHero ? "text-grand-orange hover:text-white" : ""
          )}
        />
      </div>
    </div>
  );
}
