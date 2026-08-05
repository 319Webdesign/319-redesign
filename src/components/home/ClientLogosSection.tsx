"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { clientLogos, type ClientLogo } from "@/data/clients";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";

function LogoItem({
  name,
  src,
  href,
  widthClass,
  decorative = false,
}: ClientLogo & { decorative?: boolean }) {
  const image = (
    <div
      className={cn(
        "group relative flex h-12 items-center justify-center sm:h-14",
        widthClass ?? "w-40",
      )}
    >
      <Image
        src={src}
        alt={decorative ? "" : `Logo ${name}`}
        fill
        loading="lazy"
        unoptimized
        sizes="220px"
        className={cn(
          "object-contain object-center",
          "opacity-[0.72] grayscale",
          "transition-[opacity,filter,transform] duration-[250ms] ease-out",
          href &&
            "group-hover:scale-[1.03] group-hover:opacity-100 group-hover:grayscale-0",
          !href && "group-hover:opacity-90",
        )}
      />
    </div>
  );

  return (
    <li className="flex shrink-0 items-center justify-center px-6 sm:px-8 md:px-10">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={decorative ? undefined : `${name} – Website öffnen`}
          tabIndex={decorative ? -1 : undefined}
          aria-hidden={decorative || undefined}
          className="rounded-sm outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus"
        >
          {image}
        </a>
      ) : (
        image
      )}
    </li>
  );
}

export function ClientLogosSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-bg" aria-labelledby="client-logos-heading">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-[4.5rem] sm:px-8 sm:pb-12 sm:pt-20">
        <motion.p
          id="client-logos-heading"
          className="mx-auto max-w-2xl text-center text-sm tracking-wide text-ink-subtle"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          Unternehmen aus Darmstadt &amp; Rhein-Main vertrauen bereits auf{" "}
          {siteConfig.name}
        </motion.p>
      </div>

      <div className="logo-marquee relative overflow-hidden py-2">
        {prefersReducedMotion ? (
          <ul className="mx-auto flex max-w-6xl list-none flex-wrap items-center justify-center gap-y-8 px-6 sm:px-8">
            {clientLogos.map((client) => (
              <LogoItem key={client.src} {...client} />
            ))}
          </ul>
        ) : (
          <ul
            className="logo-marquee-track flex list-none items-center"
            aria-label="Kundenlogos"
          >
            {clientLogos.map((client) => (
              <LogoItem key={`a-${client.src}`} {...client} />
            ))}
            {clientLogos.map((client) => (
              <LogoItem key={`b-${client.src}`} {...client} decorative />
            ))}
          </ul>
        )}
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-14">
        <motion.p
          className="text-center text-xs tracking-wide text-ink-subtle sm:text-[0.8125rem]"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <span aria-hidden>★★★★★</span> {siteConfig.googleRating}{" "}
          Google-Bewertung · {siteConfig.projectCount} erfolgreiche Projekte ·
          Persönliche Betreuung
        </motion.p>
      </div>
    </section>
  );
}
