"use client";

import { Button } from "@/components/ui/Button";
import {
  leistungenMegaMenu,
  type LeistungenMegaCategory,
  type LeistungenMegaIcon,
} from "@/data/site";
import { cn } from "@/lib/cn";
import {
  ArrowRight,
  Check,
  Globe,
  Palette,
  Search,
  Settings2,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState, type ComponentType } from "react";

const icons: Record<
  LeistungenMegaIcon,
  ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  globe: Globe,
  search: Search,
  palette: Palette,
  settings: Settings2,
  shield: Shield,
};

type LeistungenMegaMenuProps = {
  open: boolean;
  onClose: () => void;
  onNavigate?: () => void;
};

export function LeistungenMegaMenu({
  open,
  onClose,
  onNavigate,
}: LeistungenMegaMenuProps) {
  const [activeId, setActiveId] = useState(
    leistungenMegaMenu.categories[0].id,
  );
  const active =
    leistungenMegaMenu.categories.find((c) => c.id === activeId) ??
    leistungenMegaMenu.categories[0];

  useEffect(() => {
    if (!open) return;
    setActiveId(leistungenMegaMenu.categories[0].id);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="menu"
      aria-label="Leistungen"
      className="absolute left-0 top-full z-50 w-[min(92vw,680px)] pt-3 md:max-lg:w-[min(92vw,600px)]"
    >
      <div className="mega-menu-enter overflow-hidden rounded-[20px] border border-border bg-bg shadow-[0_12px_40px_-12px_rgba(15,23,42,0.12)]">
        <div className="grid grid-cols-[minmax(0,35%)_minmax(0,1fr)] gap-0 p-5 sm:p-6">
          <div
            className="flex flex-col gap-0.5 border-r border-border pr-3 sm:pr-4"
            role="none"
          >
            {leistungenMegaMenu.categories.map((category) => (
              <CategoryButton
                key={category.id}
                category={category}
                active={category.id === active.id}
                onActivate={() => setActiveId(category.id)}
                onNavigate={onNavigate}
              />
            ))}
          </div>

          <div className="flex flex-col pl-5 sm:pl-6" role="none">
            <DetailPanel category={active} onNavigate={onNavigate} />
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-border px-5 py-4 sm:flex-row sm:items-center sm:px-6">
          <p className="text-xs leading-relaxed text-ink-subtle">
            {leistungenMegaMenu.footer.text}
          </p>
          <Button
            href={leistungenMegaMenu.footer.ctaHref}
            variant="primary"
            size="sm"
            className="shrink-0 text-sm"
            onClick={onNavigate}
          >
            {leistungenMegaMenu.footer.ctaLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}

function CategoryButton({
  category,
  active,
  onActivate,
  onNavigate,
}: {
  category: LeistungenMegaCategory;
  active: boolean;
  onActivate: () => void;
  onNavigate?: () => void;
}) {
  const Icon = icons[category.icon];

  return (
    <Link
      href={category.href}
      role="menuitem"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onNavigate}
      className={cn(
        "group flex items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-150",
        active
          ? "bg-[#F8FAFC] text-brand"
          : "text-ink hover:bg-[#F8FAFC] hover:text-brand",
      )}
    >
      <Icon
        className={cn(
          "mt-0.5 size-[18px] shrink-0 transition-colors duration-150",
          active
            ? "text-brand"
            : "text-ink-muted group-hover:text-brand",
        )}
        strokeWidth={1.5}
        aria-hidden
      />
      <span className="min-w-0">
        <span
          className={cn(
            "block text-base font-medium leading-snug transition-colors duration-150",
            active ? "text-brand" : "text-ink group-hover:text-brand",
          )}
        >
          {category.title}
        </span>
        <span className="mt-0.5 block text-sm leading-snug text-ink-muted">
          {category.shortDescription}
        </span>
      </span>
    </Link>
  );
}

function DetailPanel({
  category,
  onNavigate,
}: {
  category: LeistungenMegaCategory;
  onNavigate?: () => void;
}) {
  return (
    <div key={category.id} className="mega-menu-detail flex h-full flex-col">
      <h3 className="font-display text-[22px] font-medium leading-snug tracking-tight text-ink text-balance">
        {category.headline}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        {category.description}
      </p>

      <ul className="mt-5 space-y-2">
        {category.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2.5 text-sm text-ink"
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

      <div className="mt-auto pt-6">
        <Link
          href={category.href}
          onClick={onNavigate}
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
        >
          {category.ctaLabel}
          <ArrowRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
            strokeWidth={1.75}
            aria-hidden
          />
        </Link>
      </div>
    </div>
  );
}
