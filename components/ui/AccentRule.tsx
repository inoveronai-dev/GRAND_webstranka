import { cn } from "@/lib/utils";

type AccentRuleProps = {
  className?: string;
  animated?: boolean;
};

/** Short orange line motif used before section eyebrows / quotes. */
export function AccentRule({ className, animated = false }: AccentRuleProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "mb-5 block h-px w-10 bg-grand-orange origin-left",
        animated && "accent-rule-animate",
        className
      )}
    />
  );
}
