import {
  PlaceholderPage,
  placeholderMetadata,
} from "@/components/layout/PlaceholderPage";

export const metadata = placeholderMetadata(
  "Über mich",
  "Persönlichkeit und Arbeitsweise von 319Webdesign — Seite in Arbeit.",
);

export default function UeberMichPage() {
  return (
    <PlaceholderPage
      title="Über mich"
      description="Die ausführliche Über-mich-Seite folgt. Einen ersten Eindruck gibt die Startseite."
    />
  );
}
