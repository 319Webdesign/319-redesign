import {
  PlaceholderPage,
  placeholderMetadata,
} from "@/components/layout/PlaceholderPage";

export const metadata = placeholderMetadata(
  "Portfolio",
  "Referenzen und Case Studies von 319Webdesign — in Arbeit.",
);

export default function PortfolioPage() {
  return (
    <PlaceholderPage
      title="Portfolio"
      description="Case Studies folgen. Auf der Startseite findest du bereits ausgewählte Projektbeispiele."
    />
  );
}
