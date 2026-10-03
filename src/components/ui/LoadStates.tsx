"use client";

import { CloudOff } from "lucide-react";
import { useT } from "@/lib/i18n/client";
import { Button } from "./button";
import { IconTile } from "./IconTile";
import { Skeleton } from "./skeleton";

export function ErrorState({ onRetry }: { onRetry?: () => void }) {
  const t = useT();
  return (
    <div role="alert" className="flex flex-col items-center px-2 py-4 text-center">
      <IconTile icon={CloudOff} tone="amber" size="lg" />
      <p className="mt-3 font-extrabold">{t.common.error}</p>
      {onRetry && (
        <Button type="button" onClick={onRetry} variant="tonal" className="mt-3">
          {t.common.retry}
        </Button>
      )}
    </div>
  );
}

export function LoadingState() {
  const t = useT();
  return (
    <div role="status" aria-live="polite" className="space-y-2.5">
      <span className="sr-only">{t.common.loading}</span>
      <Skeleton className="h-3 w-1/4" />
      <Skeleton className="h-10 w-1/2" />
      <Skeleton className="h-3.5 w-3/4" />
    </div>
  );
}
