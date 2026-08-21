import { CorporateDesignPage } from "@/components/services/CorporateDesignPage";
import { corporateDesignFaq, corporateDesignMeta } from "@/data/corporate-design";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/lib/json-ld";
import { defaultOpenGraph } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: corporateDesignMeta.title,
  description: corporateDesignMeta.description,
  alternates: {
    canonical: corporateDesignMeta.canonical,
  },
  openGraph: defaultOpenGraph(
    corporateDesignMeta.ogTitle,
    corporateDesignMeta.ogDescription,
    corporateDesignMeta.canonical,
  ),
};

export default function CorporateDesignRoutePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", path: "/" },
          { name: "Leistungen", path: "/leistungen" },
          { name: "Corporate Design", path: "/corporate-design" },
        ])}
      />
      <JsonLd data={faqJsonLd(corporateDesignFaq)} />
      <CorporateDesignPage />
    </>
  );
}
