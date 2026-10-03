// Based on shadcn/ui (MIT, © 2023 shadcn), adapted to the Hanji tones.
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** Small non-interactive label. Color is decoration; the text carries the meaning. */
const badgeVariants = cva("inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-sm font-bold", {
  variants: {
    variant: {
      neutral: "bg-surface-2 text-foreground",
      primary: "bg-accent text-accent-foreground",
      info: "bg-info-soft text-info",
      warning: "bg-warning-soft text-warning",
      success: "bg-success-soft text-success",
      destructive: "bg-destructive-soft text-destructive",
      violet: "bg-tile-violet text-ink-violet",
    },
  },
  defaultVariants: { variant: "neutral" },
});

type BadgeVariant = NonNullable<VariantProps<typeof badgeVariants>["variant"]>;

function Badge({ className, variant, ...props }: ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants, type BadgeVariant };
