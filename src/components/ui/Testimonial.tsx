"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export type TestimonialProps = {
  quote: string;
  name: string;
  company?: string;
  relativeTime?: string;
  photoUrl?: string;
  photo?: ReactNode;
  rating?: number;
  /** Ab dieser Zeichenanzahl erscheint „Mehr lesen“ */
  collapseAt?: number;
  className?: string;
};

export function Testimonial({
  quote,
  name,
  company,
  relativeTime,
  photoUrl,
  photo,
  rating = 5,
  collapseAt = 160,
  className,
}: TestimonialProps) {
  const [expanded, setExpanded] = useState(false);
  const isLong = quote.length > collapseAt;
  const visibleQuote =
    !expanded && isLong ? `${quote.slice(0, collapseAt).trimEnd()}…` : quote;

  return (
    <figure className={cn("border-t border-border pt-6", className)}>
      <div
        className="mb-3 flex gap-0.5 text-cta"
        aria-label={`${rating} von 5 Sternen auf Google`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "size-3.5",
              i < rating ? "fill-current" : "fill-none text-border-strong",
            )}
            aria-hidden
          />
        ))}
      </div>

      <blockquote className="text-base leading-relaxed text-ink sm:text-[1.0625rem]">
        „{visibleQuote}“
      </blockquote>

      {isLong ? (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
          aria-expanded={expanded}
        >
          {expanded ? "Weniger" : "Mehr lesen"}
        </button>
      ) : null}

      <figcaption className="mt-5 flex items-center gap-3">
        {photo ? (
          <div className="size-10 shrink-0 overflow-hidden rounded-full bg-bg-muted">
            {photo}
          </div>
        ) : photoUrl ? (
          <div className="relative size-10 shrink-0 overflow-hidden rounded-full bg-bg-muted">
            <Image
              src={photoUrl}
              alt={`Profilbild von ${name}`}
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
        ) : (
          <div
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-soft text-sm font-medium text-brand"
            aria-hidden
          >
            {name.charAt(0)}
          </div>
        )}
        <div className="min-w-0">
          <p className="text-sm font-semibold text-ink">{name}</p>
          {company ? (
            <p className="text-xs text-ink-muted">{company}</p>
          ) : null}
          <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-ink-subtle">
            Google Bewertung
            {relativeTime ? ` · ${relativeTime}` : null}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
