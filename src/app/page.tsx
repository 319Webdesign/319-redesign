import { AboutSection } from "@/components/home/AboutSection";
import { ClientLogosSection } from "@/components/home/ClientLogosSection";
import { DesignProposalCta } from "@/components/home/DesignProposalCta";
import { FaqSection } from "@/components/home/FaqSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ReferencesSection } from "@/components/home/ReferencesSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WhySection } from "@/components/home/WhySection";
import { SiteShell } from "@/components/layout/SiteShell";
import { CtaBlock } from "@/components/ui";
import { siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: `Webdesign Darmstadt · ${siteConfig.name}`,
  },
  description:
    "Premium Webdesign für Handwerksbetriebe und regionale Unternehmen im Raum Darmstadt. Persönliche Betreuung, SEO von Anfang an, keine Baukastensysteme.",
  openGraph: {
    title: `Webdesign Darmstadt · ${siteConfig.name}`,
    description:
      "Premium Webdesign für Handwerk & regionale Unternehmen — persönlich betreut aus dem Raum Darmstadt.",
    locale: "de_DE",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <SiteShell>
      <main>
        <HeroSection />
        <ClientLogosSection />
        <ProblemSection />
        <DesignProposalCta />
        <WhySection />
        <ProcessSection />
        <ServicesSection />
        <ReferencesSection />
        <AboutSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaBlock
          whatsappHref={siteConfig.whatsappHref}
          phoneHref={siteConfig.phoneHref}
          phoneLabel={siteConfig.phone}
        />
      </main>
    </SiteShell>
  );
}
