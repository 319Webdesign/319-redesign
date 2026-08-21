import { isIndexable, SITE_URL } from "@/lib/seo";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  if (!isIndexable()) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/design-system"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
