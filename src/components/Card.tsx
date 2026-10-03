import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { CardAction, CardContent, CardFooter, CardHeader, CardTitle, Card as UICard } from "./ui/card";
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

/** App card: shadcn Card parts with our title row (icon, English title, Korean label, meta). */
export function Card({ title, titleKo, icon: Icon, meta, children, footer, hideTitle }: CardProps) {
  const headingId = `card-${title.toLowerCase().replace(/\W+/g, "-")}`;
  return (
    <UICard asChild>
      <section aria-labelledby={headingId}>
        <CardHeader className={hideTitle ? "contents" : undefined}>
          <CardTitle asChild className={hideTitle ? "sr-only" : undefined}>
            <h2 id={headingId}>
              {Icon && <Icon aria-hidden="true" className="size-[1.375rem] shrink-0 text-jade-icon" />}
              {title}
              {titleKo && (
                <span lang="ko" className="text-[0.9375rem] font-semibold tracking-normal text-jade-text">
                  {titleKo}
                </span>
              )}
            </h2>
          </CardTitle>
          {meta && !hideTitle && <CardAction>{meta}</CardAction>}
        </CardHeader>
        <CardContent>{children}</CardContent>
        {footer && <CardFooter>{footer}</CardFooter>}
      </section>
    </UICard>
  );
}

export function CardLoading() {
  return <LoadingState />;
}

export function CardError({ onRetry }: { onRetry?: () => void }) {
  return <ErrorState onRetry={onRetry} />;
}
