import {
  PlaceholderPage,
  placeholderMetadata,
} from "@/components/layout/PlaceholderPage";

export const metadata = placeholderMetadata(
  "Datenschutz",
  "Datenschutzerklärung von 319Webdesign — Inhalt folgt.",
);

export default function DatenschutzPage() {
  return (
    <PlaceholderPage
      eyebrow="Rechtliches"
      title="Datenschutz"
      description="Die Datenschutzerklärung folgt vor dem Go-Live."
    />
  );
}
