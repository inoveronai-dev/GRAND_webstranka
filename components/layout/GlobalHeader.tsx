"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { mainNavLinks, sectionIds } from "@/data/navigation";
import { cn } from "@/lib/utils";

type GlobalHeaderProps = {
  overHero?: boolean;
};

export function GlobalHeader({ overHero = false }: GlobalHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("domov");
  const { companyName, features } = siteConfig;

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    setActiveSection(id);
  }, []);

  const navLinkClass = (href: string) => {
    const id = href.replace("#", "");
    const active = activeSection === id;
    return cn(
      "text-xs font-medium uppercase tracking-[0.12em] transition-colors duration-300",
      overHero
        ? active
          ? "text-grand-orange"
          : "text-white/80 hover:text-white"
        : active
          ? "text-grand-orange"
          : "text-grand-gray-dark hover:text-grand-orange"
    );
  };

  return (
    <header className="bg-transparent">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#domov"
          className="flex shrink-0 items-center"
          onClick={() => handleNavClick("#domov")}
        >
          <Image
            src="/logo.png"
            alt={companyName}
            width={160}
            height={44}
            priority
            className={cn(
              "h-auto w-auto max-h-11 transition-opacity duration-300",
              overHero && "brightness-110"
            )}
          />
        </a>

        <nav
          aria-label="Hlavná navigácia"
          className="hidden items-center gap-10 lg:flex"
        >
          {mainNavLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={navLinkClass(href)}
              onClick={() => handleNavClick(href)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {features.clientPortalEnabled && features.clientPortalUrl && (
            <a
              href={features.clientPortalUrl}
              className="hidden rounded-full border border-grand-orange px-5 py-2 text-xs font-medium uppercase tracking-widest text-grand-orange transition-colors hover:bg-grand-orange hover:text-white sm:inline-flex"
            >
              Klientska Zóna
            </a>
          )}

          <button
            type="button"
            className={cn(
              "inline-flex items-center justify-center p-2 transition-colors lg:hidden",
              overHero
                ? "text-white/80 hover:text-white"
                : "text-grand-gray-dark hover:text-grand-orange"
            )}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Zavrieť menu" : "Otvoriť menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobilná navigácia"
          className={cn(
            "border-t px-6 py-6 lg:hidden",
            overHero
              ? "border-white/10 bg-black/80 backdrop-blur-md"
              : "border-grand-gray/10 bg-grand-cream"
          )}
        >
          <ul className="flex flex-col gap-2">
            {mainNavLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => handleNavClick(href)}
                  className={cn(
                    "block px-2 py-3 text-sm font-medium uppercase tracking-widest",
                    activeSection === href.replace("#", "")
                      ? "text-grand-orange"
                      : overHero
                        ? "text-white/80 hover:text-white"
                        : "text-grand-gray-dark hover:text-grand-orange"
                  )}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
