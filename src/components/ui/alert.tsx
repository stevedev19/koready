// Based on shadcn/ui (MIT, © 2023 shadcn), adapted: a tinted "result" box for checker
// verdicts and a flat "banner" for notes. No success/green tone on purpose: a result
// must never look like "safe".
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const alertVariants = cva("", {
  variants: {
    tone: {
      danger: "bg-destructive-soft",
      warning: "bg-warning-soft",
      neutral: "bg-card",
      info: "bg-info-soft",
    },
    kind: {
      result: "rounded-card p-[1.125rem] ring-2 ring-inset",
      banner: "flex items-start gap-2.5 rounded-2xl px-4 py-3.5",
    },
  },
  compoundVariants: [
    { kind: "result", tone: "danger", className: "ring-destructive" },
    { kind: "result", tone: "warning", className: "ring-warning" },
    { kind: "result", tone: "neutral", className: "ring-input" },
    { kind: "banner", tone: "warning", className: "[&>svg]:text-warning" },
    { kind: "banner", tone: "info", className: "[&>svg]:text-info" },
  ],
  defaultVariants: { tone: "neutral", kind: "result" },
});

function Alert({ className, tone, kind, ...props }: ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return <div data-slot="alert" className={cn(alertVariants({ tone, kind }), className)} {...props} />;
}

function AlertTitle({ className, asChild = false, ...props }: ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "div";
  return (
    <Comp
      data-slot="alert-title"
      className={cn("flex items-center gap-2.5 text-[1.375rem] leading-tight font-extrabold", className)}
      {...props}
    />
  );
}

function AlertDescription({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="alert-description" className={cn("min-w-0", className)} {...props} />;
}

export { Alert, AlertDescription, AlertTitle, alertVariants };
