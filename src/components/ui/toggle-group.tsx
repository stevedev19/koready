"use client";

// Based on shadcn/ui (MIT, © 2023 shadcn), styled as our filter chips.
import { ToggleGroup as ToggleGroupPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function ToggleGroup({ className, ...props }: ComponentProps<typeof ToggleGroupPrimitive.Root>) {
  return (
    <ToggleGroupPrimitive.Root data-slot="toggle-group" className={cn("flex flex-wrap gap-2", className)} {...props} />
  );
}

function ToggleGroupItem({ className, ...props }: ComponentProps<typeof ToggleGroupPrimitive.Item>) {
  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      className={cn(
        "min-h-12 rounded-full bg-card px-4 text-[0.9375rem] font-bold whitespace-nowrap text-foreground ring-[1.5px] ring-input ring-inset transition-colors",
        "data-[state=on]:bg-foreground data-[state=on]:text-card data-[state=on]:ring-0",
        className,
      )}
      {...props}
    />
  );
}

export { ToggleGroup, ToggleGroupItem };
