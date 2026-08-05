import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { MessageCircle, Phone } from "lucide-react";

export type CtaBlockProps = {
  title?: string;
  lead?: string;
  primaryHref?: string;
  primaryLabel?: string;
  whatsappHref?: string;
  phoneHref?: string;
  phoneLabel?: string;
  className?: string;
};

export function CtaBlock({
  title = "Lass uns dein Projekt starten.",
  lead = "Kostenloses Erstgespräch — unverbindlich, persönlich und direkt mit mir.",
  primaryHref = "/kontakt",
  primaryLabel = "Kostenloses Erstgespräch",
  whatsappHref = "https://wa.me/491773236454",
  phoneHref = "tel:+491773236454",
  phoneLabel = "+49 177 3236454",
  className,
}: CtaBlockProps) {
  return (
    <section className={cn("bg-brand px-6 py-20 sm:px-10 sm:py-28", className)}>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-balance font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
          {lead}
        </p>

        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Button href={primaryHref} variant="primary" size="lg">
            {primaryLabel}
          </Button>
          <Button
            href={whatsappHref}
            variant="ghost"
            size="lg"
            icon={<MessageCircle className="size-5" aria-hidden />}
            className="!bg-[#25D366] font-semibold !text-white hover:!bg-[#20BD5A] hover:!text-white"
          >
            WhatsApp
          </Button>
        </div>

        <a
          href={phoneHref}
          className="mt-8 inline-flex items-center justify-center gap-2 text-base font-medium text-white/80 transition-colors hover:text-white"
        >
          <Phone className="size-4" aria-hidden />
          {phoneLabel}
        </a>
      </div>
    </section>
  );
}
