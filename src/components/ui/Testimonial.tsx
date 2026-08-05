import { Star } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export type TestimonialProps = {
  quote: string;
  name: string;
  company: string;
  photo?: ReactNode;
  rating?: number;
  className?: string;
};

export function Testimonial({
  quote,
  name,
  company,
  photo,
  rating = 5,
  className,
}: TestimonialProps) {
  return (
    <figure
      className={cn(
        "border-t border-border pt-10",
        className,
      )}
    >
      <div
        className="mb-6 flex gap-1 text-cta"
        aria-label={`${rating} von 5 Sternen auf Google`}
      >
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="size-5 fill-current" aria-hidden />
        ))}
      </div>
      <blockquote className="font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl lg:text-4xl">
        „{quote}“
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4">
        {photo ? (
          <div className="size-14 shrink-0 overflow-hidden rounded-full bg-bg-muted">
            {photo}
          </div>
        ) : (
          <div
            className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-soft font-display text-lg font-medium text-brand"
            aria-hidden
          >
            {name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-ink">{name}</p>
          <p className="text-sm text-ink-muted">{company}</p>
          <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-ink-subtle">
            Google Bewertung
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
