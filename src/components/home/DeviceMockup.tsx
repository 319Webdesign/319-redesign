import { cn } from "@/lib/cn";

type DeviceMockupProps = {
  className?: string;
  label?: string;
  variant?: "light" | "brand";
};

/** CSS-basiertes Browser-/Device-Mockup — Platzhalter bis echte Screenshots da sind */
export function DeviceMockup({
  className,
  label = "Website Preview",
  variant = "light",
}: DeviceMockupProps) {
  const isBrand = variant === "brand";

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border-strong bg-bg",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-bg-soft px-3 py-2.5">
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="ml-3 flex-1 truncate rounded-sm bg-bg px-2 py-1 text-[10px] text-ink-subtle">
          319webdesign.de
        </span>
      </div>
      <div
        className={cn(
          "relative aspect-[16/10] p-6 sm:p-8",
          isBrand ? "bg-brand" : "bg-bg-soft",
        )}
      >
        <div
          className={cn(
            "absolute inset-0 opacity-40",
            isBrand
              ? "bg-[radial-gradient(ellipse_at_top_right,_#2a6bb5_0%,_transparent_55%)]"
              : "bg-[radial-gradient(ellipse_at_top_right,_#c5d8f0_0%,_transparent_55%)]",
          )}
        />
        <div className="relative space-y-4">
          <div
            className={cn(
              "h-3 w-24 rounded-sm",
              isBrand ? "bg-white/30" : "bg-brand/20",
            )}
          />
          <div
            className={cn(
              "h-8 w-3/4 max-w-xs rounded-sm sm:h-10",
              isBrand ? "bg-white/90" : "bg-ink/80",
            )}
          />
          <div
            className={cn(
              "h-3 w-1/2 max-w-[14rem] rounded-sm",
              isBrand ? "bg-white/40" : "bg-ink-muted/40",
            )}
          />
          <div
            className={cn(
              "mt-6 inline-flex h-9 w-36 items-center justify-center rounded-md text-[10px] font-semibold",
              isBrand ? "bg-cta text-cta-ink" : "bg-cta text-cta-ink",
            )}
          >
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MobileMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[1.25rem] border border-border-strong bg-bg",
        className,
      )}
    >
      <div className="mx-auto mt-2 h-1.5 w-12 rounded-full bg-border-strong" />
      <div className="aspect-[9/16] bg-bg-soft p-4">
        <div className="space-y-3">
          <div className="h-2 w-12 rounded-sm bg-brand/25" />
          <div className="h-5 w-4/5 rounded-sm bg-ink/70" />
          <div className="h-2 w-2/3 rounded-sm bg-ink-muted/30" />
          <div className="mt-4 h-24 rounded-md bg-brand/15" />
          <div className="h-8 w-full rounded-md bg-cta" />
        </div>
      </div>
    </div>
  );
}
