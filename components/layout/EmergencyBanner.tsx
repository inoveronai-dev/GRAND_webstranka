import { AlertCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PhoneLink } from "@/components/ui/PhoneLink";

export function EmergencyBanner() {
  const { label, phone, phoneDisplay } = siteConfig.emergency;

  return (
    <div
      role="region"
      aria-label="Havarijná linka"
      className="bg-grand-gray-dark text-white"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-sm sm:text-base">
        <span className="inline-flex items-center gap-1.5 font-medium">
          <AlertCircle className="h-4 w-4 text-grand-orange" aria-hidden />
          {label}
        </span>
        <PhoneLink
          phone={phone}
          display={phoneDisplay}
          className="text-grand-orange hover:text-white"
        />
      </div>
    </div>
  );
}
