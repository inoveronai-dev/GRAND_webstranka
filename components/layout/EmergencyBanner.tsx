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
        overHero ? "bg-transparent text-white/90" : "bg-transparent text-grand-gray-dark"
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-6 py-2.5 text-xs uppercase tracking-[0.15em] sm:text-sm">
        <span className="inline-flex items-center gap-2 font-medium">
          <AlertCircle className="h-3.5 w-3.5 text-grand-orange" aria-hidden />
          {label}
        </span>
        <PhoneLink
          phone={phone}
          display={phoneDisplay}
          className={cn(
            "text-xs tracking-wide sm:text-sm",
            overHero ? "text-grand-orange hover:text-white" : ""
          )}
        />
      </div>
    </div>
  );
}
