import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
  whatsappHref = "https://wa.me/49",
  phoneHref = "tel:+496151000000",
  phoneLabel = "Anrufen",
  className,
}: CtaBlockProps) {
  return (
    <section
      className={cn(
        "border-y border-border bg-bg-soft px-6 py-20 sm:px-10 sm:py-28",
        className,
      )}
    >
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeader
          title={title}
          lead={lead}
          align="center"
          as="h2"
          className="mx-auto"
        />
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Button href={primaryHref} variant="primary" size="lg">
            {primaryLabel}
          </Button>
          <Button
            href={whatsappHref}
            variant="secondary"
            size="lg"
            icon={<MessageCircle className="size-5" aria-hidden />}
          >
            WhatsApp
          </Button>
          <Button
            href={phoneHref}
            variant="ghost"
            size="lg"
            icon={<Phone className="size-5" aria-hidden />}
          >
            {phoneLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
