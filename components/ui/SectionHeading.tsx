import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-8", className)}>
      <h2 className="text-2xl font-semibold text-grand-gray-dark">{title}</h2>
      {subtitle && <p className="mt-2 text-grand-gray">{subtitle}</p>}
    </div>
  );
}
