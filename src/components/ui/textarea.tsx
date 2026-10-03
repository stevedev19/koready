// Based on shadcn/ui (MIT, © 2023 shadcn), same field look as Input.
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { fieldBase } from "./input";

function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return <textarea data-slot="textarea" className={cn(fieldBase, className)} {...props} />;
}

export { Textarea };
