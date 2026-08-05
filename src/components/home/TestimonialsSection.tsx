import Link from "next/link";
import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Testimonial } from "@/components/ui/Testimonial";
import { testimonials } from "@/data/site";
import { getGoogleReviews } from "@/lib/google-reviews";

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=319Webdesign&query_place_id=ChIJqZqjwJRbXmERT_KSs7dtkw8";

export async function TestimonialsSection() {
  const data = await getGoogleReviews();
  const reviews = data.reviews.filter((review) => review.text?.trim());
  const useLive = reviews.length > 0;

  return (
    <section className="border-b border-border bg-bg" id="bewertungen">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal variant="slide">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand">
              Kundenbewertungen
            </p>
            <h2 className="mt-5 text-balance font-display text-[2.125rem] font-medium leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
              Was Auftraggeber sagen
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
              Aktuelle Google-Bewertungen von Unternehmen, die mit 319Webdesign
              zusammengearbeitet haben.
            </p>

            {data.rating != null && data.userRatingsTotal != null ? (
              <Link
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2.5 text-sm font-medium text-ink transition-colors hover:text-brand"
              >
                <span className="flex gap-0.5 text-cta" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`size-4 ${i < Math.round(data.rating!) ? "fill-current" : "fill-none text-border-strong"}`}
                    />
                  ))}
                </span>
                <span>
                  {data.rating.toFixed(1).replace(".", ",")} ·{" "}
                  {data.userRatingsTotal} Google-Bewertungen
                </span>
              </Link>
            ) : null}
          </div>
        </Reveal>

        {useLive ? (
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-12 lg:gap-x-10 lg:gap-y-8">
            {reviews.map((review, index) => (
              <Reveal
                key={`${review.time}-${review.author_name}`}
                variant="slide"
                delay={index * 0.05}
              >
                <Testimonial
                  quote={review.text}
                  name={review.author_name}
                  rating={review.rating}
                  relativeTime={review.relative_time_description}
                  photoUrl={review.profile_photo_url}
                />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-12 lg:gap-x-10 lg:gap-y-8">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} variant="slide" delay={index * 0.05}>
                <Testimonial
                  quote={item.quote}
                  name={item.name}
                  company={item.company}
                />
              </Reveal>
            ))}
            {data.error ? (
              <p className="text-sm text-ink-subtle sm:col-span-2">
                Live-Bewertungen derzeit nicht verfügbar. Statische Beispiele
                werden angezeigt.
              </p>
            ) : null}
          </div>
        )}

        {useLive ? (
          <Reveal variant="fade" delay={0.1}>
            <div className="mt-10">
              <Link
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
              >
                Alle Bewertungen auf Google ansehen →
              </Link>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
