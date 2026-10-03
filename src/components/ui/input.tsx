// Based on shadcn/ui (MIT, © 2023 shadcn). 17px at every width (shadcn's md:text-sm
// would make iOS Safari zoom in on focus on iPad).
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** Shared field look: 1.5px border passes 3:1 against the card in both themes. */
const fieldBase = "w-full rounded-btn border-[1.5px] border-input bg-card px-4 py-3.5 text-[1.0625rem] text-foreground";

function Input({ className, type, ...props }: ComponentProps<"input">) {
  return <input type={type} data-slot="input" className={cn(fieldBase, className)} {...props} />;
}

export { fieldBase, Input };
