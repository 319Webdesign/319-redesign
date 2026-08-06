import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import Link from "next/link";
import type { ReactNode } from "react";

const footerColumns = [
  {
    title: "Leistungen",
    links: [
      { label: "Webdesign", href: "/leistungen/webdesign" },
      { label: "Webdesign Darmstadt", href: "/leistungen/webdesign-darmstadt" },
      { label: "SEO Darmstadt", href: "/leistungen/seo-darmstadt" },
      { label: "Website Relaunch", href: "/leistungen/website-relaunch" },
      { label: "Homepage Handwerker", href: "/leistungen/homepage-handwerker" },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Über mich", href: "/ueber-mich" },
      { label: "Blog", href: "/blog" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
  },
];

function SocialIcon({
  className,
  path,
}: {
  className?: string;
  path: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d={path} />
    </svg>
  );
}

const socialLinks: {
  label: string;
  href: string;
  icon: ReactNode;
}[] = [
  {
    label: "Instagram",
    href: siteConfig.social.instagram,
    icon: (
      <SocialIcon
        className="size-4"
        path="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
      />
    ),
  },
  {
    label: "WhatsApp",
    href: siteConfig.social.whatsapp,
    icon: (
      <SocialIcon
        className="size-4"
        path="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.11 3.22 5.11 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35M12.05 21.8h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.7.97.99-3.61-.24-.37a9.78 9.78 0 0 1-1.5-5.22c0-5.4 4.4-9.8 9.82-9.8a9.73 9.73 0 0 1 6.93 2.87 9.73 9.73 0 0 1 2.87 6.93c0 5.41-4.4 9.81-9.81 9.81m8.35-18.16A11.78 11.78 0 0 0 12.04 0C5.47 0 .12 5.35.12 11.92c0 2.1.55 4.15 1.59 5.96L0 24l6.29-1.65a11.9 11.9 0 0 0 5.74 1.46h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.5-8.42"
      />
    ),
  },
  {
    label: "Facebook",
    href: siteConfig.social.facebook,
    icon: (
      <SocialIcon
        className="size-4"
        path="M14 8h2.5V5.5c0-1.2.1-3 3-3H20v3h-1.8c-1.1 0-1.2.5-1.2 1.2V8H20l-.4 3h-2.6v8h-3.2v-8H11V8h2z"
      />
    ),
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
        <div className="lg:col-span-4">
          <p className="font-display text-2xl font-medium tracking-tight text-ink">
            {siteConfig.name}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
            {siteConfig.tagline}. Persönliche Betreuung im Raum{" "}
            {siteConfig.region}.
          </p>
          <p className="mt-6 text-sm text-ink-muted">
            <a
              href={siteConfig.phoneHref}
              className="transition-motion hover:text-brand"
            >
              {siteConfig.phone}
            </a>
            <br />
            <a
              href={`mailto:${siteConfig.email}`}
              className="transition-motion hover:text-brand"
            >
              {siteConfig.email}
            </a>
          </p>

          <div className="mt-6 flex items-center gap-2">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex size-10 items-center justify-center rounded-md border border-border text-ink-muted transition-motion hover:border-brand hover:text-brand"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {footerColumns.map((col) => (
          <div key={col.title} className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-subtle">
              {col.title}
            </p>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted transition-motion hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-subtle">
            Starten
          </p>
          <div className="mt-4">
            <Button href="/kontakt" variant="primary" size="md">
              Kostenloses Erstgespräch
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-ink-subtle sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p>{siteConfig.region}</p>
        </div>
      </div>
    </footer>
  );
}
