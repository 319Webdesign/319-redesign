import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { CookieConsent } from "@/components/legal/CookieConsent";
import {
  isIndexable,
  isProductionDeployment,
  SITE_URL,
} from "@/lib/seo";
import { JsonLd, localBusinessJsonLd, websiteJsonLd } from "@/lib/json-ld";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "319Webdesign · Webdesign Darmstadt",
    template: "%s · 319Webdesign",
  },
  description:
    "Premium Webdesign für Handwerksbetriebe und regionale Unternehmen im Raum Darmstadt — persönliche Betreuung, SEO von Anfang an.",
  robots: isIndexable()
    ? { index: true, follow: true }
    : { index: false, follow: false },
  icons: {
    icon: "/319-favicon.png",
    shortcut: "/319-favicon.png",
    apple: "/319-favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "319Webdesign",
    url: SITE_URL,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${geist.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-bg font-sans text-ink">
        <a href="#inhalt" className="skip-link">
          Zum Inhalt springen
        </a>
        <JsonLd data={websiteJsonLd()} />
        <JsonLd data={localBusinessJsonLd()} />
        <div className="flex min-h-full flex-1 flex-col">
          {children}
        </div>
        <CookieConsent enableAnalytics={isProductionDeployment()} />
      </body>
    </html>
  );
}
