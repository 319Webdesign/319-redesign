import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

const footerColumns = [
  {
    title: "Leistungen",
    links: [
      { label: "Webdesign", href: "/webdesign" },
      { label: "Corporate Design", href: "/corporate-design" },
      { label: "Digitale Lösungen", href: "/digitale-loesungen" },
      { label: "Lokale SEO", href: "/lokale-seo" },
      { label: "Website Relaunch", href: "/leistungen/website-relaunch" },
      { label: "Homepage Handwerker", href: "/leistungen/homepage-handwerker" },
      { label: "Betreuung", href: "/betreuung" },
      { label: "Google Unternehmensprofil", href: "/leistungen/google-unternehmensprofil" },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Über mich", href: "/ueber-mich" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
];

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
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
        path="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.75a3.05 3.05 0 1 1 0-6.1 3.05 3.05 0 0 1 0 6.1Zm5.86-7.94a1.1 1.1 0 1 1-2.19 0 1.1 1.1 0 0 1 2.19 0ZM12 3.2c-2.39 0-2.69.01-3.63.05-.93.04-1.57.2-2.13.42a4.3 4.3 0 0 0-1.55 1.01 4.3 4.3 0 0 0-1.01 1.55c-.23.56-.38 1.2-.42 2.13C3.21 9.31 3.2 9.61 3.2 12s.01 2.69.05 3.63c.04.93.2 1.57.42 2.13.23.6.53 1.1 1.01 1.55.45.48.95.78 1.55 1.01.56.23 1.2.38 2.13.42.94.04 1.24.05 3.63.05s2.69-.01 3.63-.05c.93-.04 1.57-.2 2.13-.42a4.3 4.3 0 0 0 1.55-1.01 4.3 4.3 0 0 0 1.01-1.55c.23-.56.38-1.2.42-2.13.04-.94.05-1.24.05-3.63s-.01-2.69-.05-3.63c-.04-.93-.2-1.57-.42-2.13a4.3 4.3 0 0 0-1.01-1.55 4.3 4.3 0 0 0-1.55-1.01c-.56-.23-1.2-.38-2.13-.42C14.69 3.21 14.39 3.2 12 3.2Zm0 1.62c2.35 0 2.63.01 3.55.05.86.04 1.32.18 1.63.3.41.16.71.35.96.6.25.25.44.55.6.96.12.31.26.77.3 1.63.04.92.05 1.2.05 3.55s-.01 2.63-.05 3.55c-.04.86-.18 1.32-.3 1.63-.16.41-.35.71-.6.96-.25.25-.55.44-.96.6-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.55.05s-2.63-.01-3.55-.05c-.86-.04-1.32-.18-1.63-.3a2.6 2.6 0 0 1-.96-.6 2.6 2.6 0 0 1-.6-.96c-.12-.31-.26-.77-.3-1.63-.04-.92-.05-1.2-.05-3.55s.01-2.63.05-3.55c.04-.86.18-1.32.3-1.63.16-.41.35-.71.6-.96.25-.25.55-.44.96-.6.31-.12.77-.26 1.63-.3.92-.04 1.2-.05 3.55-.05Z"
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
        path="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z"
      />
    ),
  },
];

function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      {socialLinks.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="inline-flex size-10 items-center justify-center rounded-md border border-border bg-bg text-ink-muted transition-motion hover:border-brand hover:text-brand"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg-soft">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
        <div className="lg:col-span-5">
          <p className="font-display text-2xl font-medium tracking-tight text-ink">
            {siteConfig.name}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
            {siteConfig.tagline}. Persönliche Betreuung im Raum{" "}
            {siteConfig.region}.
          </p>
          <div className="mt-6 flex flex-col gap-2.5 text-sm text-ink-muted">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2.5 transition-motion hover:text-brand"
            >
              <Phone className="size-4 shrink-0 text-brand" strokeWidth={1.75} aria-hidden />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2.5 transition-motion hover:text-brand"
            >
              <Mail className="size-4 shrink-0 text-brand" strokeWidth={1.75} aria-hidden />
              {siteConfig.email}
            </a>
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

        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-subtle">
            Starten
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
            Unverbindlich sprechen — über Ziele, Umfang und den nächsten Schritt.
          </p>
          <div className="mt-5">
            <Button
              href="/kontakt"
              size="md"
              className="!border-brand !bg-brand !text-white hover:!bg-brand-dark hover:!text-white"
            >
              Kostenloses Erstgespräch
            </Button>
          </div>
          <div className="mt-5">
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className="border-t border-border/80 bg-bg-muted/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-ink-subtle sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
            <span className="mx-2 text-border-strong">·</span>
            {siteConfig.region}
          </p>
          <nav aria-label="Rechtliches" className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-motion hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
