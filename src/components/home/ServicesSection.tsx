import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceItem } from "@/components/ui/ServiceItem";
import { services } from "@/data/site";
import {
  Globe,
  MapPinned,
  RefreshCw,
  Search,
  Shield,
  Wrench,
} from "lucide-react";
import type { ReactNode } from "react";

const icons: Record<(typeof services)[number]["icon"], ReactNode> = {
  globe: <Globe className="size-7" strokeWidth={1.5} />,
  search: <Search className="size-7" strokeWidth={1.5} />,
  refresh: <RefreshCw className="size-7" strokeWidth={1.5} />,
  wrench: <Wrench className="size-7" strokeWidth={1.5} />,
  shield: <Shield className="size-7" strokeWidth={1.5} />,
  map: <MapPinned className="size-7" strokeWidth={1.5} />,
};

export function ServicesSection() {
  return (
    <section className="border-b border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal variant="slide">
          <SectionHeader
            eyebrow="Leistungen"
            title="Was ich für dich umsetze"
            lead="Kein Feature-Chaos — klare Angebote für Betriebe, die Anfragen wollen."
          />
        </Reveal>
        <div className="mt-10">
          {services.map((service, index) => (
            <Reveal key={service.href} variant="slide" delay={index * 0.03}>
              <ServiceItem
                icon={icons[service.icon]}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
