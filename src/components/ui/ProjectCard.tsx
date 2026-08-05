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
  desktopMockup?: ReactNode;
  mobileMockup?: ReactNode;
  className?: string;
};

export function ProjectCard({
  title,
  industry,
  service,
  result,
  href,
  desktopMockup,
  mobileMockup,
  className,
}: ProjectCardProps) {
  return (
    <article className={cn("grid gap-8 lg:grid-cols-12 lg:gap-12", className)}>
      <div className="relative lg:col-span-7">
        <div className="overflow-hidden rounded-lg bg-bg-soft">
          {desktopMockup ?? (
            <div className="flex aspect-[16/10] items-center justify-center border border-border bg-bg-muted/60">
              <span className="text-sm text-ink-subtle">Desktop Mockup</span>
            </div>
          )}
        </div>
        {mobileMockup !== undefined || !desktopMockup ? (
          <div className="absolute -bottom-6 right-4 w-[28%] overflow-hidden rounded-md border border-border-strong bg-bg sm:right-8">
            {mobileMockup ?? (
              <div className="flex aspect-[9/16] items-center justify-center bg-bg-soft">
                <span className="text-[10px] text-ink-subtle">Mobile</span>
              </div>
            )}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col justify-center lg:col-span-5 lg:pl-2">
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
          <Button href={href} variant="secondary" size="md">
            Case Study ansehen
          </Button>
        </div>
      </div>
    </article>
  );
}
