"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { mainNavLinks, sectionIds } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function GlobalHeader() {
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
    return cn(
      "text-sm font-medium tracking-wide transition-colors",
      activeSection === id
        ? "text-grand-orange"
        : "text-grand-gray-dark hover:text-grand-orange"
    );
  };

  return (
    <header className="border-b border-grand-gray/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#domov" className="flex shrink-0 items-center" onClick={() => handleNavClick("#domov")}>
          <Image
            src="/logo.png"
            alt={companyName}
            width={160}
            height={44}
            priority
            className="h-auto w-auto max-h-11"
          />
        </a>

        <nav
          aria-label="Hlavná navigácia"
          className="hidden items-center gap-8 lg:flex"
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
              className="hidden rounded-sm bg-grand-orange px-4 py-2 text-sm font-semibold text-white hover:bg-grand-orange-hover sm:inline-flex"
            >
              Klientska Zóna
            </a>
          )}

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-grand-gray-dark hover:text-grand-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grand-orange lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Zavrieť menu" : "Otvoriť menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobilná navigácia"
          className="border-t border-grand-gray/10 bg-white px-6 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {mainNavLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => handleNavClick(href)}
                  className={cn(
                    "block rounded-md px-3 py-3 text-base font-medium",
                    activeSection === href.replace("#", "")
                      ? "bg-grand-gray-light text-grand-orange"
                      : "text-grand-gray-dark hover:bg-grand-gray-light"
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
