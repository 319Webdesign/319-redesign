import { MessageCircle } from "lucide-react";
import { Button, Reveal } from "@/components/ui";
import { siteConfig } from "@/data/site";

export function PortfolioCta() {
  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-8 sm:py-28">
        <Reveal variant="fade">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/70">
            Ihr Projekt
          </p>
        </Reveal>
        <Reveal variant="slide" delay={0.05}>
          <h2 className="mt-4 text-balance font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
            Möchten Sie Ihr Unternehmen ebenfalls professionell präsentieren?
          </h2>
        </Reveal>
        <Reveal variant="slide" delay={0.1}>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Erzählen Sie mir von Ihrem Projekt. Gemeinsam schauen wir, welche
            Lösung zu Ihrem Unternehmen passt.
          </p>
        </Reveal>
        <Reveal variant="slide" delay={0.16}>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href="/kontakt" variant="primary" size="lg">
              Kostenloses Erstgespräch vereinbaren
            </Button>
            <Button
              href={siteConfig.whatsappHref}
              variant="ghost"
              size="lg"
              icon={<MessageCircle className="size-5" aria-hidden />}
              className="!bg-[#25D366] font-semibold !text-white hover:!bg-[#20BD5A] hover:!text-white"
            >
              WhatsApp
            </Button>
          </div>
        </Reveal>
        <Reveal variant="fade" delay={0.2}>
          <p className="mt-8 text-sm text-white/55">
            Persönlich · Unverbindlich · Direkt mit Maik Schmidt
          </p>
        </Reveal>
      </div>
    </section>
  );
}
