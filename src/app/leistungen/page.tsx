import { SiteShell } from "@/components/layout/SiteShell";
import {
  Button,
  CtaBlock,
  Reveal,
  SectionHeader,
  ServiceItem,
} from "@/components/ui";
import { serviceLandings } from "@/data/services";
import { siteConfig } from "@/data/site";
import {
  Globe,
  MapPinned,
  RefreshCw,
  Search,
  Shield,
  Wrench,
} from "lucide-react";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Leistungen · Webdesign, SEO & mehr in Darmstadt",
  description:
    "Leistungen von 319Webdesign: Webdesign Darmstadt, SEO, Website Relaunch, Homepage für Handwerker, Wartung und Google Unternehmensprofil.",
  alternates: { canonical: "/leistungen" },
};

const icons: Record<string, ReactNode> = {
  "webdesign-darmstadt": <Globe className="size-7" strokeWidth={1.5} />,
  "seo-darmstadt": <Search className="size-7" strokeWidth={1.5} />,
  "website-relaunch": <RefreshCw className="size-7" strokeWidth={1.5} />,
  "homepage-handwerker": <Wrench className="size-7" strokeWidth={1.5} />,
  "website-wartung": <Shield className="size-7" strokeWidth={1.5} />,
  "google-unternehmensprofil": (
    <MapPinned className="size-7" strokeWidth={1.5} />
  ),
};

export default function LeistungenPage() {
  return (
    <SiteShell>
      <main>
        <section className="border-b border-border bg-[linear-gradient(180deg,#ffffff_0%,#f4f7fb_100%)]">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
            <Reveal variant="slide">
              <SectionHeader
                eyebrow="Leistungen"
                title="Was ich für deinen Betrieb umsetze"
                lead="Klare Angebote für Handwerk und regionale Unternehmen — von Webdesign bis lokaler Sichtbarkeit."
                as="h1"
              />
            </Reveal>
            <Reveal variant="fade" delay={0.1}>
              <div className="mt-10">
                <Button href="/kontakt" variant="primary" size="lg">
                  Kostenloses Erstgespräch
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-border bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8 sm:py-14">
            {serviceLandings.map((service, index) => (
              <Reveal key={service.slug} variant="slide" delay={index * 0.03}>
                <ServiceItem
                  icon={icons[service.slug]}
                  title={service.title}
                  description={service.hero.lead}
                  href={`/leistungen/${service.slug}`}
                  ctaLabel="Zur Leistung"
                />
              </Reveal>
            ))}
          </div>
        </section>

        <CtaBlock
          title="Nicht sicher, welche Leistung du brauchst?"
          lead="Im Erstgespräch klären wir das in 20 Minuten — ehrlich und ohne Verkaufsshow."
          whatsappHref={siteConfig.whatsappHref}
          phoneHref={siteConfig.phoneHref}
          phoneLabel={siteConfig.phone}
        />
      </main>
    </SiteShell>
  );
}
