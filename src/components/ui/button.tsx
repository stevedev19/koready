// Based on shadcn/ui (MIT, © 2023 shadcn), adapted to the Hanji sizes and variants.
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** Shared button look, also usable on <a> and <Link> via buttonVariants(). Focus ring is global (:focus-visible). */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-btn text-center font-bold transition-transform duration-100 ease-out-soft active:scale-[0.97] disabled:pointer-events-none disabled:opacity-45 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        tonal: "bg-accent text-accent-foreground",
        outline: "bg-card text-foreground ring-[1.5px] ring-input ring-inset",
        destructive: "bg-destructive text-destructive-foreground",
        emergency: "bg-emergency text-emergency-contrast",
        link: "bg-transparent text-primary",
      },
      size: {
        default: "min-h-[3.25rem] px-5 text-[1.0625rem]", // 52px
        lg: "min-h-14 px-6 text-lg", // 56px
        xl: "min-h-[5.5rem] rounded-3xl px-6 text-[1.875rem]", // 88px, emergency only
      },
    },
    // Text-style buttons keep a 48px target whatever the size.
    compoundVariants: [{ variant: "link", className: "min-h-12 px-2 text-[1.0625rem]" }],
    defaultVariants: { variant: "default", size: "default" },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "button";
  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
