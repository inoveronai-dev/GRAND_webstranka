import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

type PhoneLinkProps = {
  phone: string;
  display: string;
  className?: string;
  showIcon?: boolean;
};

export function PhoneLink({
  phone,
  display,
  className,
  showIcon = true,
}: PhoneLinkProps) {
  return (
    <a
      href={`tel:${phone.replace(/\s/g, "")}`}
      className={cn(
        "inline-flex items-center gap-1.5 font-semibold text-grand-orange hover:text-grand-orange-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grand-orange",
        className
      )}
    >
      {showIcon && <Phone className="h-4 w-4 shrink-0" aria-hidden />}
      {display}
    </a>
  );
}
