"use client";

import { Button } from "@/components/ui/Button";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useState } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopLeistungenOpen, setDesktopLeistungenOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[padding,background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-border/80 bg-bg/80 py-2 backdrop-blur-xl"
          : "border-transparent bg-bg/70 py-4 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 sm:px-8">
        <Link
          href="/"
          className="font-display text-xl font-medium tracking-tight text-ink transition-motion hover:text-brand sm:text-2xl"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {navLinks.map((item) =>
            "children" in item && item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setDesktopLeistungenOpen(true)}
                onMouseLeave={() => setDesktopLeistungenOpen(false)}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink-muted transition-motion hover:text-ink"
                  aria-expanded={desktopLeistungenOpen}
                  onClick={() => setDesktopLeistungenOpen((v) => !v)}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "size-4 transition-motion",
                      desktopLeistungenOpen && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>
                {desktopLeistungenOpen ? (
                  <div className="absolute left-0 top-full z-50 min-w-[16rem] pt-2">
                    <div className="rounded-md border border-border bg-bg p-2 shadow-none">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-sm px-3 py-2.5 text-sm text-ink-muted transition-motion hover:bg-bg-soft hover:text-ink"
                        >
                          {child.label}
                        </Link>
                      ))}
                      <Link
                        href={item.href}
                        className="mt-1 block border-t border-border px-3 py-2.5 text-sm font-semibold text-brand"
                      >
                        Alle Leistungen
                      </Link>
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-ink-muted transition-motion hover:text-ink"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href="/kontakt"
            variant="primary"
            size={scrolled ? "sm" : "md"}
            className="hidden sm:inline-flex"
          >
            Kostenloses Erstgespräch
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-ink lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls={menuId}
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id={menuId}
          className="border-t border-border bg-bg lg:hidden"
        >
          <nav
            className="mx-auto flex max-h-[calc(100dvh-4.5rem)] max-w-6xl flex-col gap-1 overflow-y-auto px-6 py-6 sm:px-8"
            aria-label="Mobile Navigation"
          >
            {navLinks.map((item) => (
              <div key={item.href} className="border-b border-border py-3">
                <Link
                  href={item.href}
                  className="block py-1 text-lg font-medium text-ink"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {"children" in item && item.children ? (
                  <div className="mt-2 space-y-1 pl-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1.5 text-sm text-ink-muted"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <div className="pt-4">
              <Button href="/kontakt" variant="primary" size="lg" className="w-full">
                Kostenloses Erstgespräch
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
