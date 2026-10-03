import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { ErrorState, LoadingState } from "./ui/States";

type CardProps = {
  title: string;
  /** Small Korean label shown beside the English title. */
  titleKo?: string;
  icon?: LucideIcon;
  /** Shown at the right of the header, e.g. "Updated 12:30". */
  meta?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  /** Keep the heading for screen readers but hide it visually. */
  hideTitle?: boolean;
};

export function Card({ title, titleKo, icon: Icon, meta, children, footer, hideTitle }: CardProps) {
  const headingId = `card-${title.toLowerCase().replace(/\W+/g, "-")}`;
  return (
    <section
      aria-labelledby={headingId}
      className="rounded-card border border-card-border bg-card p-5 shadow-card"
    >
      <div className={hideTitle ? "contents" : "mb-3 flex items-center justify-between gap-2"}>
        <h2
          id={headingId}
          className={hideTitle ? "sr-only" : "flex flex-wrap items-center gap-x-2 text-lg font-extrabold"}
        >
          {Icon && <Icon aria-hidden="true" className="size-[1.375rem] shrink-0 text-jade-icon" />}
          {title}
          {titleKo && (
            <span lang="ko" className="text-[0.9375rem] font-semibold tracking-normal text-jade-text">
              {titleKo}
            </span>
          )}
        </h2>
        {meta && !hideTitle && <div className="shrink-0 text-[0.9375rem] text-muted-foreground">{meta}</div>}
      </div>
      {children}
      {footer && <div className="mt-4 space-y-1 text-[0.9375rem] text-muted-foreground">{footer}</div>}
    </section>
  );
}

export function CardLoading() {
  return <LoadingState />;
}

export function CardError({ onRetry }: { onRetry?: () => void }) {
  return <ErrorState onRetry={onRetry} />;
}
