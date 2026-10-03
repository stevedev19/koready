// Based on shadcn/ui (MIT, © 2023 shadcn), adapted to the Hanji card. Each part takes
// asChild so a card can be a <section>, <ul>, <details> or <Link> and keep its semantics.
import { Slot } from "radix-ui";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentProps<"div"> & { asChild?: boolean };

function part(slot: string, base: string) {
  function Part({ className, asChild = false, ...props }: Props) {
    const Comp = asChild ? Slot.Root : "div";
    return <Comp data-slot={slot} className={cn(base, className)} {...props} />;
  }
  Part.displayName = slot;
  return Part;
}

/** Rounded surface: 20px radius, soft shadow in light mode, hairline border in dark mode. */
const Card = part("card", "rounded-card border border-card-border bg-card p-5 text-card-foreground shadow-card");
const CardHeader = part("card-header", "mb-3 flex items-center justify-between gap-2");
const CardTitle = part("card-title", "flex flex-wrap items-center gap-x-2 text-lg font-extrabold");
const CardAction = part("card-action", "shrink-0 text-[0.9375rem] text-muted-foreground");
const CardContent = part("card-content", "");
const CardFooter = part("card-footer", "mt-4 space-y-1 text-[0.9375rem] text-muted-foreground");

export { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle };
