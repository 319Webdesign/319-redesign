import type { NextConfig } from "next";

const permanentRedirects: { source: string; destination: string }[] = [
  { source: "/ueber-mich", destination: "/uber-mich" },
  { source: "/leistungen/webdesign", destination: "/webdesign" },
  { source: "/leistungen/webdesign-launch", destination: "/webdesign" },
  { source: "/leistungen/website-wartung", destination: "/betreuung" },
  {
    source: "/leistungen/strategische-begleitung",
    destination: "/betreuung",
  },
  { source: "/leistungen/wachstum-seo", destination: "/lokale-seo" },
  { source: "/leistungen/webdesign-darmstadt", destination: "/webdesign/darmstadt" },
  { source: "/leistungen/seo-darmstadt", destination: "/seo-darmstadt" },
  { source: "/leistungen/website-relaunch", destination: "/website-relaunch" },
  {
    source: "/leistungen/homepage-handwerker",
    destination: "/webdesign-handwerker",
  },
  { source: "/unser-angebot", destination: "/leistungen" },
  { source: "/angebot", destination: "/leistungen" },
  { source: "/preise", destination: "/leistungen" },
  { source: "/immobilienmakler-webdesign", destination: "/webdesign" },
  { source: "/webdesign/pfungstadt", destination: "/webdesign" },
  { source: "/webdesign/griesheim", destination: "/webdesign" },
  { source: "/webdesign/weiterstadt", destination: "/webdesign" },
  { source: "/webdesign/trebur", destination: "/webdesign" },
  { source: "/webdesign/gross-gerau", destination: "/webdesign" },
  { source: "/webdesign/rhein-main", destination: "/webdesign" },
  { source: "/webdesign/suedhessen", destination: "/webdesign" },
  { source: "/portfolio/da-sound", destination: "/portfolio" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  trailingSlash: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  async redirects() {
    return permanentRedirects.map((redirect) => ({
      source: redirect.source,
      destination: redirect.destination,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
