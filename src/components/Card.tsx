import type { ReactNode } from "react";
import { t } from "@/lib/strings";

type CardProps = {
  title: string;
  icon: string;
  children: ReactNode;
  footer?: ReactNode;
};

export function Card({ title, icon, children, footer }: CardProps) {
  const headingId = `card-${title.toLowerCase().replace(/\W+/g, "-")}`;
  return (
    <section
      aria-labelledby={headingId}
      className="rounded-2xl border border-border bg-surface p-4 shadow-sm"
    >
      <h2 id={headingId} className="mb-3 flex items-center gap-2 text-lg font-semibold">
        <span aria-hidden="true">{icon}</span>
        {title}
      </h2>
      {children}
      {footer && <div className="mt-3 text-sm text-muted">{footer}</div>}
    </section>
  );
}

export function CardLoading() {
  return (
    <div role="status" aria-live="polite" className="space-y-2">
      <span className="sr-only">{t.common.loading}</span>
      <div className="h-8 w-1/2 animate-pulse rounded bg-border" />
      <div className="h-4 w-3/4 animate-pulse rounded bg-border" />
      <div className="h-4 w-2/3 animate-pulse rounded bg-border" />
    </div>
  );
}

export function CardError({ onRetry }: { onRetry?: () => void }) {
  return (
    <div role="alert" className="flex flex-wrap items-center justify-between gap-3">
      <p className="text-danger">{t.common.error}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="min-h-11 rounded-lg border border-border px-4 font-medium text-accent focus-visible:outline-2 focus-visible:outline-accent"
        >
          {t.common.retry}
        </button>
      )}
    </div>
  );
}
