import { HandwerkerPage } from "@/components/services/HandwerkerPage";
import {
  handwerkerFaq,
  handwerkerMeta,
  handwerkerPath,
  handwerkerTitle,
} from "@/data/handwerker";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/lib/json-ld";
import { defaultOpenGraph } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  // `absolute` umgeht das Titeltemplate, damit die Marke nur einmal vorkommt.
  title: { absolute: handwerkerMeta.title },
  description: handwerkerMeta.description,
  alternates: { canonical: handwerkerPath },
  openGraph: defaultOpenGraph(
    handwerkerMeta.title,
    handwerkerMeta.description,
    handwerkerPath,
  ),
};

export default function WebdesignHandwerkerPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", path: "/" },
          { name: "Leistungen", path: "/leistungen" },
          { name: handwerkerTitle, path: handwerkerPath },
        ])}
      />
      <JsonLd data={faqJsonLd(handwerkerFaq)} />
      <HandwerkerPage />
    </>
  );
}
