import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export type ProjectCardProps = {
  title: string;
  industry: string;
  service: string;
  result: string;
  href: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  desktopMockup?: ReactNode;
  mobileMockup?: ReactNode;
  /** true = Text links, Bild rechts */
  reverse?: boolean;
  className?: string;
};

export function ProjectCard({
  title,
  industry,
  service,
  result,
  href,
  image,
  imageWidth = 1600,
  imageHeight = 1000,
  desktopMockup,
  mobileMockup,
  reverse = false,
  className,
}: ProjectCardProps) {
  const showMobileOverlay = !image && (mobileMockup !== undefined || !desktopMockup);

  return (
    <article className={cn("grid gap-8 lg:grid-cols-12 lg:gap-12", className)}>
      <div
        className={cn(
          "relative lg:col-span-7",
          reverse && "lg:order-2",
        )}
      >
        <Link
          href={href}
          className="block overflow-hidden rounded-lg bg-bg-soft transition-opacity duration-300 hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-focus"
          aria-label={`Projekt ${title} ansehen`}
        >
          {image ? (
            <Image
              src={image}
              alt={`Website von ${title}`}
              width={imageWidth}
              height={imageHeight}
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="h-auto w-full"
            />
          ) : (
            desktopMockup ?? (
              <div className="flex aspect-[16/10] items-center justify-center border border-border bg-bg-muted/60">
                <span className="text-sm text-ink-subtle">Desktop Mockup</span>
              </div>
            )
          )}
        </Link>
        {showMobileOverlay ? (
          <div
            className={cn(
              "absolute -bottom-6 w-[28%] overflow-hidden rounded-md border border-border-strong bg-bg",
              reverse ? "left-4 sm:left-8" : "right-4 sm:right-8",
            )}
          >
            {mobileMockup ?? (
              <div className="flex aspect-[9/16] items-center justify-center bg-bg-soft">
                <span className="text-[10px] text-ink-subtle">Mobile</span>
              </div>
            )}
          </div>
        ) : null}
      </div>

      <div
        className={cn(
          "flex flex-col justify-center lg:col-span-5",
          reverse ? "lg:order-1 lg:pr-2" : "lg:pl-2",
        )}
      >
        <div className="flex flex-wrap gap-2">
          <Badge tone="brand">{industry}</Badge>
          <Badge>{service}</Badge>
        </div>
        <h3 className="mt-5 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          {title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-ink-muted">
          <span className="font-medium text-ink">Ergebnis: </span>
          {result}
        </p>
        <div className="mt-8">
          <Button
            href={href}
            variant="secondary"
            size="md"
            className="group/btn hover:!border-cta hover:!bg-cta hover:!text-cta-ink"
          >
            Projekt ansehen
            <ArrowRight
              className="size-4 -translate-x-1 opacity-0 transition-all duration-300 ease-out group-hover/btn:translate-x-0 group-hover/btn:opacity-100"
              aria-hidden
            />
          </Button>
        </div>
      </div>
    </article>
  );
}
