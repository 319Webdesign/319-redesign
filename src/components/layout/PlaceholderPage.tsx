import { SiteShell } from "@/components/layout/SiteShell";
import { Button, SectionHeader } from "@/components/ui";
import type { Metadata } from "next";

type PlaceholderPageProps = {
  title: string;
  description: string;
  eyebrow?: string;
};

export function PlaceholderPage({
  title,
  description,
  eyebrow = "Demnächst",
}: PlaceholderPageProps) {
  return (
    <SiteShell>
      <main className="mx-auto flex max-w-3xl flex-1 flex-col justify-center px-6 py-24 sm:px-8">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          lead={description}
          as="h1"
        />
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/kontakt" variant="primary" size="lg">
            Kostenloses Erstgespräch
          </Button>
          <Button href="/" variant="secondary" size="lg">
            Zur Startseite
          </Button>
        </div>
      </main>
    </SiteShell>
  );
}

export function placeholderMetadata(
  title: string,
  description: string,
): Metadata {
  return {
    title,
    description,
    robots: { index: false, follow: false },
  };
}
