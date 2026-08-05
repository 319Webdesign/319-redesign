import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "319Webdesign · Webdesign Darmstadt",
    template: "%s · 319Webdesign",
  },
  description:
    "Premium Webdesign für Handwerksbetriebe und regionale Unternehmen im Raum Darmstadt — persönliche Betreuung, SEO von Anfang an.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${geist.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-bg font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
