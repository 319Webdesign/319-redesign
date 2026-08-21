"use client";

import { LeistungenMegaMenu } from "@/components/layout/LeistungenMegaMenu";
import { Button } from "@/components/ui/Button";
import {
  leistungenMegaMenu,
  navLinks,
  siteConfig,
  type LeistungenMegaIcon,
} from "@/data/site";
import { cn } from "@/lib/cn";
import {
  Check,
  ChevronDown,
  Globe,
  Menu,
  Palette,
  Search,
  Settings2,
  Shield,
  X,
} from "lucide-react";
import Link from "next/link";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type ComponentType,
} from "react";

const megaIcons: Record<
  LeistungenMegaIcon,
  ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  globe: Globe,
  search: Search,
  palette: Palette,
  settings: Settings2,
  shield: Shield,
};

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopLeistungenOpen, setDesktopLeistungenOpen] = useState(false);
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState<
    string | null
  >(null);
  const menuId = useId();
  const leistungenRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openedAt = useRef(0);

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

  useEffect(() => {
    if (!mobileOpen) {
      setMobileLeistungenOpen(false);
      setMobileActiveCategory(null);
    }
  }, [mobileOpen]);

  useEffect(() => {
    if (!desktopLeistungenOpen) return;
    const onPointerDown = (e: MouseEvent) => {
      if (
        leistungenRef.current &&
        !leistungenRef.current.contains(e.target as Node)
      ) {
        setDesktopLeistungenOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [desktopLeistungenOpen]);

  useEffect(() => {
    if (!mobileOpen && !desktopLeistungenOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setDesktopLeistungenOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen, desktopLeistungenOpen]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const openDesktop = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setDesktopLeistungenOpen((wasOpen) => {
      if (!wasOpen) openedAt.current = Date.now();
      return true;
    });
  };

  const scheduleCloseDesktop = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setDesktopLeistungenOpen(false);
    }, 120);
  };

  const onLeistungenTriggerClick = () => {
    // Nur den Klick der Hover-Öffnen-Geste ignorieren — nicht spätere Klicks
    if (
      desktopLeistungenOpen &&
      Date.now() - openedAt.current < 350
    ) {
      return;
    }
    setDesktopLeistungenOpen((open) => {
      if (!open) openedAt.current = Date.now();
      return !open;
    });
  };

  const closeMobile = () => setMobileOpen(false);

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

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Hauptnavigation"
        >
          {navLinks.map((item) =>
            "megaMenu" in item && item.megaMenu ? (
              <div
                key={item.href}
                ref={leistungenRef}
                className="relative"
                onMouseEnter={openDesktop}
                onMouseLeave={scheduleCloseDesktop}
              >
                <button
                  type="button"
                  className={cn(
                    "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-motion",
                    desktopLeistungenOpen
                      ? "text-ink"
                      : "text-ink-muted hover:text-ink",
                  )}
                  aria-expanded={desktopLeistungenOpen}
                  aria-haspopup="menu"
                  onClick={onLeistungenTriggerClick}
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
                <LeistungenMegaMenu
                  open={desktopLeistungenOpen}
                  onClose={() => setDesktopLeistungenOpen(false)}
                  onNavigate={() => setDesktopLeistungenOpen(false)}
                />
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
          <div className="hidden md:block">
            <Button
              href="/kontakt"
              variant="primary"
              size={scrolled ? "sm" : "md"}
            >
              Kostenloses Erstgespräch
            </Button>
          </div>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-ink md:hidden"
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
          className="border-t border-border bg-bg md:hidden"
        >
          <nav
            className="mx-auto flex max-h-[calc(100dvh-4.5rem)] max-w-6xl flex-col gap-1 overflow-y-auto px-6 py-6 sm:px-8"
            aria-label="Mobile Navigation"
          >
            {navLinks.map((item) =>
              "megaMenu" in item && item.megaMenu ? (
                <div key={item.href} className="border-b border-border py-3">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-1 text-left text-lg font-medium text-ink"
                    aria-expanded={mobileLeistungenOpen}
                    onClick={() => setMobileLeistungenOpen((v) => !v)}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "size-5 shrink-0 text-brand transition-motion",
                        mobileLeistungenOpen && "rotate-180",
                      )}
                      aria-hidden
                    />
                  </button>

                  {mobileLeistungenOpen ? (
                    <div className="mt-3 space-y-1">
                      {leistungenMegaMenu.categories.map((category) => {
                        const Icon = megaIcons[category.icon];
                        const isOpen = mobileActiveCategory === category.id;

                        return (
                          <div
                            key={category.id}
                            className="overflow-hidden rounded-xl"
                          >
                            <button
                              type="button"
                              className={cn(
                                "flex w-full items-start gap-3 px-3 py-3 text-left transition-colors",
                                isOpen
                                  ? "bg-[#F8FAFC] text-brand"
                                  : "text-ink hover:bg-[#F8FAFC]",
                              )}
                              aria-expanded={isOpen}
                              onClick={() =>
                                setMobileActiveCategory(
                                  isOpen ? null : category.id,
                                )
                              }
                            >
                              <Icon
                                className={cn(
                                  "mt-0.5 size-[18px] shrink-0",
                                  isOpen ? "text-brand" : "text-ink-muted",
                                )}
                                strokeWidth={1.5}
                                aria-hidden
                              />
                              <span className="min-w-0 flex-1">
                                <span
                                  className={cn(
                                    "block text-base font-medium",
                                    isOpen ? "text-brand" : "text-ink",
                                  )}
                                >
                                  {category.title}
                                </span>
                                <span className="mt-0.5 block text-sm text-ink-muted">
                                  {category.shortDescription}
                                </span>
                              </span>
                              <ChevronDown
                                className={cn(
                                  "mt-1 size-4 shrink-0 text-ink-subtle transition-motion",
                                  isOpen && "rotate-180 text-brand",
                                )}
                                aria-hidden
                              />
                            </button>

                            {isOpen ? (
                              <div className="space-y-4 bg-[#F8FAFC] px-3 pb-4 pt-1">
                                <p className="pl-[30px] text-sm leading-relaxed text-ink-muted">
                                  {category.description}
                                </p>
                                <ul className="space-y-2 pl-[30px]">
                                  {category.features.map((feature) => (
                                    <li
                                      key={feature}
                                      className="flex items-center gap-2 text-sm text-ink"
                                    >
                                      <Check
                                        className="size-3.5 shrink-0 text-brand"
                                        strokeWidth={2}
                                        aria-hidden
                                      />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                                <div className="pl-[30px]">
                                  <Link
                                    href={category.href}
                                    onClick={closeMobile}
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
                                  >
                                    {category.ctaLabel}
                                  </Link>
                                </div>
                              </div>
                            ) : null}
                          </div>
                        );
                      })}

                      <div className="mt-4 space-y-3 border-t border-border pt-4">
                        <p className="text-xs leading-relaxed text-ink-subtle">
                          {leistungenMegaMenu.footer.text}
                        </p>
                        <Button
                          href={leistungenMegaMenu.footer.ctaHref}
                          variant="primary"
                          size="md"
                          className="w-full"
                          onClick={closeMobile}
                        >
                          {leistungenMegaMenu.footer.ctaLabel}
                        </Button>
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : (
                <div key={item.href} className="border-b border-border py-3">
                  <Link
                    href={item.href}
                    className="block py-1 text-lg font-medium text-ink"
                    onClick={closeMobile}
                  >
                    {item.label}
                  </Link>
                </div>
              ),
            )}
            <div className="pt-4">
              <Button
                href="/kontakt"
                variant="primary"
                size="lg"
                className="w-full"
                onClick={closeMobile}
              >
                Kostenloses Erstgespräch
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
