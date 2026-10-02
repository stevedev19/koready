import { CloudOff, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { t } from "@/lib/strings";
import { buttonClass } from "./button";
import { IconTile, type Tone } from "./IconTile";

export function EmptyState({
  icon,
  tone = "blue",
  title,
  children,
}: {
  icon: LucideIcon;
  tone?: Tone;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center px-5 py-7 text-center">
      <IconTile icon={icon} tone={tone} size="lg" />
      <p className="mt-3 font-extrabold">{title}</p>
      {children && <div className="mt-1 text-muted">{children}</div>}
    </div>
  );
}

export function ErrorState({ onRetry }: { onRetry?: () => void }) {
  return (
    <div role="alert" className="flex flex-col items-center px-2 py-4 text-center">
      <IconTile icon={CloudOff} tone="amber" size="lg" />
      <p className="mt-3 font-extrabold">{t.common.error}</p>
      {onRetry && (
        <button type="button" onClick={onRetry} className={buttonClass("tonal", "md", "mt-3")}>
          {t.common.retry}
        </button>
      )}
    </div>
  );
}

export function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-lg bg-surface-3 ${className}`} />;
}

export function LoadingState() {
  return (
    <div role="status" aria-live="polite" className="space-y-2.5">
      <span className="sr-only">{t.common.loading}</span>
      <Skeleton className="h-3 w-1/4" />
      <Skeleton className="h-10 w-1/2" />
      <Skeleton className="h-3.5 w-3/4" />
    </div>
  );
}
