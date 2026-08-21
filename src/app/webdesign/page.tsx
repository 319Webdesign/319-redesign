import { WebdesignPage } from "@/components/services/WebdesignPage";
import { webdesignFaq, webdesignMeta } from "@/data/webdesign";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/lib/json-ld";
import { defaultOpenGraph } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: webdesignMeta.title,
  description: webdesignMeta.description,
  alternates: {
    canonical: webdesignMeta.canonical,
  },
  openGraph: defaultOpenGraph(
    webdesignMeta.ogTitle,
    webdesignMeta.ogDescription,
    webdesignMeta.canonical,
  ),
};

export default function WebdesignRoutePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", path: "/" },
          { name: "Leistungen", path: "/leistungen" },
          { name: "Webdesign", path: "/webdesign" },
        ])}
      />
      <JsonLd data={faqJsonLd(webdesignFaq)} />
      <WebdesignPage />
    </>
  );
}
