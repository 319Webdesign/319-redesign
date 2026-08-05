import { Reveal } from "@/components/ui/Reveal";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { GoogleIcon } from "@/components/ui/GoogleIcon";
import { siteConfig } from "@/data/site";
import { MapPin, Sparkles, UserRound } from "lucide-react";

export function TrustSection() {
  return (
    <section className="border-b border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 sm:py-16">
        <Reveal variant="slide">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <TrustBadge
              icon={<GoogleIcon className="size-6" />}
              value={siteConfig.googleRating}
              label="Google Bewertungen"
            />
            <TrustBadge
              icon={<Sparkles className="size-6" strokeWidth={1.5} />}
              value={siteConfig.projectCount}
              label="Projekte umgesetzt"
            />
            <TrustBadge
              icon={<UserRound className="size-6" strokeWidth={1.5} />}
              label="Persönlicher Ansprechpartner"
            />
            <TrustBadge
              icon={<MapPin className="size-6" strokeWidth={1.5} />}
              label={siteConfig.region}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
