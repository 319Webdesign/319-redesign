import { LegalPage } from "@/components/legal/LegalPage";
import { impressumContent, impressumMeta } from "@/data/legal";
import { breadcrumbJsonLd, JsonLd } from "@/lib/json-ld";
import { defaultOpenGraph } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: impressumMeta.title,
  description: impressumMeta.description,
  alternates: {
    canonical: impressumMeta.canonical,
  },
  openGraph: defaultOpenGraph(
    impressumMeta.ogTitle,
    impressumMeta.ogDescription,
    impressumMeta.canonical,
  ),
};

export default function ImpressumPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", path: "/" },
          { name: "Impressum", path: "/impressum" },
        ])}
      />
      <LegalPage content={impressumContent} />
    </>
  );
}
