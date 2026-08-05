import {
  PlaceholderPage,
  placeholderMetadata,
} from "@/components/layout/PlaceholderPage";

export const metadata = placeholderMetadata(
  "Impressum",
  "Impressum von 319Webdesign — Inhalt folgt.",
);

export default function ImpressumPage() {
  return (
    <PlaceholderPage
      eyebrow="Rechtliches"
      title="Impressum"
      description="Rechtliche Angaben folgen vor dem Go-Live."
    />
  );
}
