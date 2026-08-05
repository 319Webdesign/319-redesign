import { siteConfig } from "@/data/site";
import Link from "next/link";

const footerColumns = [
  {
    title: "Leistungen",
    links: [
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

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-12">
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
        </div>

        {footerColumns.map((col) => (
          <div key={col.title} className="lg:col-span-2 lg:col-start-auto">
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
          <Link
            href="/kontakt"
            className="mt-4 inline-block text-sm font-semibold text-brand transition-motion hover:text-brand-dark"
          >
            Kostenloses Erstgespräch
          </Link>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-ink-subtle sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p>{siteConfig.region}</p>
        </div>
      </div>
    </footer>
  );
}
