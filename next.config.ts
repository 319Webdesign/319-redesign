import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/leistungen/webdesign",
        destination: "/webdesign",
        permanent: true,
      },
      {
        source: "/leistungen/website-wartung",
        destination: "/betreuung",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
