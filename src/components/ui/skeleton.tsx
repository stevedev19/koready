// Based on shadcn/ui (MIT, © 2023 shadcn), using our track color.
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="skeleton" className={cn("animate-pulse rounded-lg bg-surface-3", className)} {...props} />;
}

export { Skeleton };
