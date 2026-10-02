import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { ErrorState, LoadingState } from "./ui/States";

type CardProps = {
  title: string;
  icon?: LucideIcon;
  children: ReactNode;
  footer?: ReactNode;
  /** Keep the heading for screen readers but hide it visually. */
  hideTitle?: boolean;
};

export function Card({ title, icon: Icon, children, footer, hideTitle }: CardProps) {
  const headingId = `card-${title.toLowerCase().replace(/\W+/g, "-")}`;
  return (
    <section
      aria-labelledby={headingId}
      className="rounded-card border border-card-border bg-surface p-5 shadow-card"
    >
      <h2
        id={headingId}
        className={hideTitle ? "sr-only" : "mb-3 flex items-center gap-2 text-lg font-extrabold"}
      >
        {Icon && <Icon aria-hidden="true" className="size-[1.375rem] text-accent" />}
        {title}
      </h2>
      {children}
      {footer && <div className="mt-4 space-y-1 text-[0.9375rem] text-muted">{footer}</div>}
    </section>
  );
}

export function CardLoading() {
  return <LoadingState />;
}

export function CardError({ onRetry }: { onRetry?: () => void }) {
  return <ErrorState onRetry={onRetry} />;
}
