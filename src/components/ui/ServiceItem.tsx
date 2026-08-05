import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export type ServiceItemProps = {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
  className?: string;
};

export function ServiceItem({
  icon,
  title,
  description,
  href,
  ctaLabel = "Mehr erfahren",
  className,
}: ServiceItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block border-t border-border py-8 transition-motion",
        "hover:border-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus",
        className,
      )}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-8">
        <span
          className="flex size-12 shrink-0 items-center justify-center text-brand transition-motion group-hover:scale-105"
          aria-hidden
        >
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            {title}
          </h3>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
            {description}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
            {ctaLabel}
            <ArrowUpRight
              className="size-4 transition-motion group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
