"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ProjectImage } from "@/data/projects";
import { cn } from "@/lib/cn";

type ProjectLivePreviewProps = {
  url: string;
  title: string;
  image: ProjectImage;
  /** Sofort laden – für die große Bühne auf der Detailseite */
  eager?: boolean;
  showCaption?: boolean;
  compact?: boolean;
  className?: string;
  frameClassName?: string;
  heightClass?: string;
  sizes?: string;
  priority?: boolean;
};

export function ProjectLivePreview({
  url,
  title,
  image,
  eager = false,
  showCaption = true,
  compact = false,
  className,
  frameClassName,
  heightClass = "aspect-[16/10] md:aspect-auto md:h-[min(72vh,52rem)] md:min-h-[28rem]",
  sizes = "(max-width: 1024px) 100vw, 1440px",
  priority,
}: ProjectLivePreviewProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(eager);
  const [interactive, setInteractive] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => {
      setIsDesktop(media.matches);
      if (!media.matches) setInteractive(false);
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (eager || inView) return;
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [eager, inView]);

  const showIframe = isDesktop && inView;

  return (
    <div ref={rootRef} className={cn("w-full", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-md bg-white ring-1 ring-black/[0.04]",
          "shadow-[0_12px_36px_rgba(15,23,42,0.07),0_2px_8px_rgba(15,23,42,0.04)]",
          heightClass,
          frameClassName,
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          priority={priority}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        {showIframe ? (
          <iframe
            src={url}
            title={`Live-Vorschau von ${title}`}
            className="relative z-[1] h-full w-full"
            loading={eager ? "eager" : "lazy"}
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ pointerEvents: interactive ? "auto" : "none" }}
          />
        ) : null}

        {isDesktop ? (
          interactive ? (
            <button
              type="button"
              onClick={() => setInteractive(false)}
              className={cn(
                "absolute z-10 rounded-md bg-bg font-semibold text-ink ring-1 ring-border transition-colors hover:bg-bg-soft",
                compact
                  ? "right-2 top-2 px-2 py-1 text-[11px]"
                  : "right-3 top-3 px-3 py-1.5 text-xs",
              )}
            >
              Scrollen beenden
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setInteractive(true)}
              className={cn(
                "absolute z-10 -translate-x-1/2 rounded-md bg-bg font-semibold text-ink ring-1 ring-border transition-colors hover:bg-bg-soft",
                compact
                  ? "bottom-2 left-1/2 px-2.5 py-1.5 text-[11px]"
                  : "bottom-4 left-1/2 px-4 py-2.5 text-sm",
              )}
            >
              {compact ? "Scrollen" : "In der Website scrollen"}
            </button>
          )
        ) : (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-md bg-bg px-4 py-2.5 text-sm font-semibold text-ink ring-1 ring-border"
          >
            Live-Website ansehen
            <ExternalLink className="size-3.5" aria-hidden />
          </a>
        )}
      </div>

      {showCaption ? (
        <p className="mt-4 text-center text-sm text-ink-subtle">
          {isDesktop ? "Live-Vorschau · " : null}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-brand transition-colors hover:text-brand-dark"
          >
            Website in neuem Tab öffnen
            <ExternalLink className="size-3.5" aria-hidden />
          </a>
        </p>
      ) : null}
    </div>
  );
}
