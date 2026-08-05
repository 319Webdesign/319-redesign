import {
  PlaceholderPage,
  placeholderMetadata,
} from "@/components/layout/PlaceholderPage";

export const metadata = placeholderMetadata(
  "Blog",
  "SEO-Artikel von 319Webdesign — in Vorbereitung.",
);

export default function BlogPage() {
  return (
    <PlaceholderPage
      title="Blog"
      description="Hochwertige SEO-Artikel zu Website-Kosten, Relaunch, Local SEO und mehr folgen."
    />
  );
}
