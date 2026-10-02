"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  y?: number;
  /** Subtle scale-up on reveal (e.g. photography). */
  scale?: boolean;
  as?: "div" | "li" | "article" | "section";
};

export function Reveal({
  children,
  className,
  delayMs = 0,
  y = 20,
  scale = false,
  as = "div",
}: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>();

  const style = {
    "--reveal-delay": `${delayMs}ms`,
    "--reveal-y": `${y}px`,
  } as React.CSSProperties;

  const classes = cn(
    "reveal",
    scale && "reveal-scale",
    inView && "reveal-visible",
    className,
  );

  if (as === "li") {
    return (
      <li
        ref={ref as unknown as React.RefObject<HTMLLIElement>}
        className={classes}
        style={style}
      >
        {children}
      </li>
    );
  }

  if (as === "article") {
    return (
      <article
        ref={ref as unknown as React.RefObject<HTMLElement>}
        className={classes}
        style={style}
      >
        {children}
      </article>
    );
  }

  if (as === "section") {
    return (
      <section
        ref={ref as unknown as React.RefObject<HTMLElement>}
        className={classes}
        style={style}
      >
        {children}
      </section>
    );
  }

  return (
    <div ref={ref} className={classes} style={style}>
      {children}
    </div>
  );
}
