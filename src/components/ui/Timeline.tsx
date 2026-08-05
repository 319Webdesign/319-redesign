import { cn } from "@/lib/cn";

export type TimelineStep = {
  title: string;
  description?: string;
};

export type TimelineProps = {
  steps: TimelineStep[];
  className?: string;
};

export function Timeline({ steps, className }: TimelineProps) {
  return (
    <ol
      className={cn(
        "grid gap-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
        className,
      )}
    >
      {steps.map((step, index) => (
        <li
          key={step.title}
          className={cn(
            "relative border-t border-border pt-6 pr-6",
            "xl:border-t-0 xl:border-l xl:pl-6 xl:pr-4 xl:pt-0",
            index === 0 && "xl:border-l-0 xl:pl-0",
          )}
        >
          <span className="font-display text-4xl font-medium text-brand/20 tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-ink">
            {step.title}
          </h3>
          {step.description ? (
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {step.description}
            </p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
