import { SiteShell } from "@/components/layout/SiteShell";
import { Button, SectionHeader } from "@/components/ui";
import { siteConfig } from "@/data/site";
import type { Metadata } from "next";
import { MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kostenloses Erstgespräch mit 319Webdesign — persönlich, unverbindlich, direkt.",
};

export default function KontaktPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeader
          eyebrow="Kontakt"
          title="Lass uns dein Projekt starten."
          lead="Kostenloses Erstgespräch — unverbindlich und persönlich. Sag kurz, worum es geht."
          as="h1"
        />
        <form className="mt-12 space-y-5" action="#" method="post">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="h-12 w-full rounded-md border border-border bg-bg px-4 text-ink outline-none transition-motion focus:border-brand"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
              E-Mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="h-12 w-full rounded-md border border-border bg-bg px-4 text-ink outline-none transition-motion focus:border-brand"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-ink"
            >
              Worum geht es?
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-md border border-border bg-bg px-4 py-3 text-ink outline-none transition-motion focus:border-brand"
            />
          </div>
          <Button type="submit" variant="primary" size="lg">
            Nachricht senden
          </Button>
          <p className="text-sm text-ink-muted">
            Formular-Backend folgt. Bis dahin erreichst du mich auch direkt:
          </p>
        </form>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            href={siteConfig.whatsappHref}
            variant="secondary"
            size="md"
            icon={<MessageCircle className="size-5" aria-hidden />}
          >
            WhatsApp
          </Button>
          <Button
            href={siteConfig.phoneHref}
            variant="ghost"
            size="md"
            icon={<Phone className="size-5" aria-hidden />}
          >
            {siteConfig.phone}
          </Button>
        </div>
      </main>
    </SiteShell>
  );
}
