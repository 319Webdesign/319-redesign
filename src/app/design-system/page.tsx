import {
  Badge,
  Button,
  CtaBlock,
  FaqAccordion,
  ProjectCard,
  Reveal,
  SectionHeader,
  ServiceItem,
  Testimonial,
  Timeline,
  TrustBadge,
} from "@/components/ui";
import { GoogleIcon } from "@/components/ui/GoogleIcon";
import {
  Globe,
  MapPin,
  MessageSquareQuote,
  Search,
  Sparkles,
  UserRound,
  Wrench,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Designsystem",
  description: "Living Styleguide — Tokens und UI-Komponenten von 319Webdesign.",
  robots: { index: false, follow: false },
};

const timelineSteps = [
  { title: "Kennenlernen", description: "Ziele, Zielgruppe, Ist-Zustand." },
  { title: "Konzept", description: "Struktur, Inhalte, SEO-Grundlage." },
  { title: "Design", description: "Individuelles Layout, Marke, Typo." },
  { title: "Entwicklung", description: "Schnell, sauber, zugänglich." },
  { title: "Livegang", description: "Launch, Tracking, Feinschliff." },
  { title: "Betreuung", description: "Updates, Support, Weiterentwicklung." },
];

const faqItems = [
  {
    question: "Was kostet eine Website bei 319Webdesign?",
    answer:
      "Das hängt vom Umfang ab. Im kostenlosen Erstgespräch klären wir Ziele und Rahmen — danach erhältst du ein klares Angebot ohne Überraschungen.",
  },
  {
    question: "Wie lange dauert ein typisches Projekt?",
    answer:
      "Die meisten Relaunches und neuen Websites liegen zwischen wenigen Wochen und etwa zwei Monaten — abhängig von Feedback-Zyklen und Content.",
  },
  {
    question: "Arbeitest du mit Baukastensystemen?",
    answer:
      "Nein. Individuelles Design und moderne Technik statt vorgefertigter Templates — damit deine Website wirklich zu deinem Betrieb passt.",
  },
];

function Swatch({
  name,
  token,
  className,
  ink = false,
}: {
  name: string;
  token: string;
  className: string;
  ink?: boolean;
}) {
  return (
    <div className="min-w-0">
      <div
        className={`flex h-20 items-end rounded-md border border-border p-3 ${className}`}
      >
        <span
          className={`text-xs font-medium ${ink ? "text-cta-ink" : "text-inherit"}`}
        >
          {name}
        </span>
      </div>
      <p className="mt-2 text-sm font-medium text-ink">{token}</p>
    </div>
  );
}

function PreviewSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-16 sm:py-20">
      <p className="mb-8 text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
        {title}
      </p>
      {children}
    </section>
  );
}

export default function DesignSystemPage() {
  return (
    <div className="bg-bg">
      <header className="border-b border-border bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:px-8">
          <div>
            <p className="font-display text-lg font-medium tracking-tight text-ink">
              319Webdesign
            </p>
            <p className="text-xs text-ink-muted">Designsystem · Preview</p>
          </div>
          <nav className="hidden gap-5 text-sm text-ink-muted md:flex">
            {[
              ["farben", "Farben"],
              ["typo", "Typo"],
              ["buttons", "Buttons"],
              ["komponenten", "Komponenten"],
            ].map(([hash, label]) => (
              <a
                key={hash}
                href={`#${hash}`}
                className="hover:text-brand transition-motion"
              >
                {label}
              </a>
            ))}
          </nav>
          <Button href="/" variant="ghost" size="sm">
            Zur Startseite
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="py-16 sm:py-24">
          <SectionHeader
            eyebrow="Designsystem"
            title="Bausteine für die neue 319Webdesign Website"
            lead="Tokens, Typografie und Komponenten — freigabefähig, wiederverwendbar, ohne Marketing-Seiten."
            as="h1"
          />
        </div>

        <PreviewSection id="farben" title="01 · Farbwelt">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            <Swatch name="Weiß" token="bg" className="bg-bg text-ink" />
            <Swatch name="Soft" token="bg-soft" className="bg-bg-soft text-ink" />
            <Swatch name="Ink" token="ink" className="bg-ink text-bg" />
            <Swatch
              name="Ink muted"
              token="ink-muted"
              className="bg-ink-muted text-bg"
            />
            <Swatch name="Brand" token="brand" className="bg-brand text-bg" />
            <Swatch
              name="Brand dark"
              token="brand-dark"
              className="bg-brand-dark text-bg"
            />
            <Swatch
              name="CTA Gelb"
              token="cta"
              className="bg-cta text-cta-ink"
              ink
            />
            <Swatch
              name="Brand soft"
              token="brand-soft"
              className="bg-brand-soft text-brand-dark"
            />
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Gelb ausschließlich für Primär-CTAs. Blau für Marke, Links und Fokus.
          </p>
        </PreviewSection>

        <PreviewSection id="typo" title="02 · Typografie">
          <div className="space-y-8">
            <div>
              <p className="mb-2 text-xs uppercase tracking-wider text-ink-subtle">
                Geist · Display & Body
              </p>
              <p className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Premium Webdesign für Handwerk.
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs uppercase tracking-wider text-ink-subtle">
                Geist · Fließtext
              </p>
              <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">
                Klar, modern und gut lesbar — für Fließtext, Navigation und UI.
                Großer Weißraum, eine Aussage pro Sektion.
              </p>
            </div>
          </div>
        </PreviewSection>

        <PreviewSection id="buttons" title="03 · Buttons">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Kostenloses Erstgespräch</Button>
            <Button variant="secondary">Referenzen ansehen</Button>
            <Button variant="ghost">Mehr erfahren</Button>
            <Button variant="link" href="#komponenten">
              Als Link
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button variant="primary" size="sm">
              Small
            </Button>
            <Button variant="primary" size="md">
              Medium
            </Button>
            <Button variant="primary" size="lg">
              Large
            </Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Badge>Neutral</Badge>
            <Badge tone="brand">Brand</Badge>
            <Badge tone="muted">Muted</Badge>
          </div>
        </PreviewSection>

        <PreviewSection id="komponenten" title="04 · Section Header">
          <SectionHeader
            eyebrow="Das Problem"
            title="Warum viele Unternehmenswebsites keine Kunden bringen"
            lead="Veraltet, unsichtbar bei Google, ohne klare nächste Schritte — drei typische Gründe."
          />
        </PreviewSection>

        <PreviewSection id="trust" title="05 · Trust Badges">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <TrustBadge
              icon={<GoogleIcon className="size-6" />}
              value="5,0"
              label="Google Bewertungen"
            />
            <TrustBadge
              icon={<Sparkles className="size-6" strokeWidth={1.5} />}
              value="15+"
              label="Projekte umgesetzt"
            />
            <TrustBadge
              icon={<UserRound className="size-6" strokeWidth={1.5} />}
              label="Persönlicher Ansprechpartner"
            />
            <TrustBadge
              icon={<MapPin className="size-6" strokeWidth={1.5} />}
              label="Region Darmstadt"
            />
          </div>
        </PreviewSection>

        <PreviewSection id="services" title="06 · Leistungen (ServiceItem)">
          <div>
            <ServiceItem
              icon={<Globe className="size-7" strokeWidth={1.5} />}
              title="Webdesign Darmstadt"
              description="Individuelle Websites, die Vertrauen aufbauen und Anfragen generieren — ohne Baukasten."
              href="/leistungen/webdesign-darmstadt"
            />
            <ServiceItem
              icon={<Search className="size-7" strokeWidth={1.5} />}
              title="SEO Darmstadt"
              description="Lokale Sichtbarkeit von Anfang an — Struktur, Inhalte und technische Grundlage."
              href="/leistungen/seo-darmstadt"
            />
            <ServiceItem
              icon={<Wrench className="size-7" strokeWidth={1.5} />}
              title="Homepage für Handwerker"
              description="Websites, die Handwerksbetriebe als Auftraggeber ernst nehmen — klar und lokal."
              href="/leistungen/homepage-handwerker"
            />
          </div>
        </PreviewSection>

        <PreviewSection id="timeline" title="07 · Projektablauf (Timeline)">
          <Timeline steps={timelineSteps} />
        </PreviewSection>

        <PreviewSection id="project" title="08 · Projektkarte">
          <Reveal variant="slide">
            <ProjectCard
              title="Elektrotechnik Betrieb"
              industry="Handwerk"
              service="Website Relaunch"
              result="Klarere Positionierung und mehr qualifizierte Anfragen aus der Region."
              href="/portfolio/beispiel"
            />
          </Reveal>
        </PreviewSection>

        <PreviewSection id="testimonial" title="09 · Testimonial">
          <Reveal variant="fade">
            <Testimonial
              quote="Endlich eine Website, die unser Handwerk ernst nimmt — persönlich betreut und messbar besser auffindbar."
              name="Thomas M."
              company="Musterbetrieb GmbH, Darmstadt"
            />
          </Reveal>
        </PreviewSection>

        <PreviewSection id="faq" title="10 · FAQ Accordion">
          <FaqAccordion items={faqItems} />
        </PreviewSection>

        <PreviewSection id="reveal" title="11 · Reveal Motion">
          <div className="grid gap-6 sm:grid-cols-3">
            <Reveal variant="fade">
              <div className="border border-border bg-bg-soft p-8">
                <p className="font-display text-xl text-ink">Fade</p>
                <p className="mt-2 text-sm text-ink-muted">Opacity only</p>
              </div>
            </Reveal>
            <Reveal variant="slide" delay={0.08}>
              <div className="border border-border bg-bg-soft p-8">
                <p className="font-display text-xl text-ink">Slide</p>
                <p className="mt-2 text-sm text-ink-muted">Fade + translateY</p>
              </div>
            </Reveal>
            <Reveal variant="scale" delay={0.16}>
              <div className="border border-border bg-bg-soft p-8">
                <p className="font-display text-xl text-ink">Scale</p>
                <p className="mt-2 text-sm text-ink-muted">Fade + scale</p>
              </div>
            </Reveal>
          </div>
          <p className="mt-4 flex items-center gap-2 text-sm text-ink-muted">
            <MessageSquareQuote className="size-4" aria-hidden />
            Respektiert prefers-reduced-motion.
          </p>
        </PreviewSection>
      </main>

      <div className="mt-8">
        <CtaBlock />
      </div>

      <footer className="border-t border-border px-6 py-10 text-center text-sm text-ink-subtle sm:px-8">
        <p>
          Designsystem Preview ·{" "}
          <Link href="/" className="text-brand hover:underline">
            Zurück
          </Link>
        </p>
      </footer>
    </div>
  );
}
