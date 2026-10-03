"use client";

// Based on shadcn/ui (MIT, © 2023 shadcn): Radix Dialog shown as a bottom sheet.
// Only the bottom side is used in this app, so the other sides were dropped.
import { Dialog as SheetPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
import { useReturnFocus } from "@/hooks/useReturnFocus";
import { cn } from "@/lib/utils";

function Sheet(props: ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetClose(props: ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetOverlay({ className, ...props }: ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/45 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Slides up from the bottom; scrolls inside when taller than 85% of the screen.
 * Closes instantly (no exit animation), so callers can clear their content on close.
 */
function SheetContent({
  className,
  children,
  onOpenAutoFocus,
  onCloseAutoFocus,
  ...props
}: ComponentProps<typeof SheetPrimitive.Content>) {
  const focus = useReturnFocus({ onOpenAutoFocus, onCloseAutoFocus });
  return (
    <SheetPrimitive.Portal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 mx-auto max-h-[85dvh] w-full max-w-lg overflow-y-auto overscroll-contain rounded-t-sheet bg-card text-foreground shadow-float outline-none",
          "ease-out-soft data-[state=open]:animate-in data-[state=open]:duration-[220ms] data-[state=open]:slide-in-from-bottom",
          className,
        )}
        {...props}
        {...focus}
      >
        {children}
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  );
}

function SheetTitle({ className, ...props }: ComponentProps<typeof SheetPrimitive.Title>) {
  return <SheetPrimitive.Title data-slot="sheet-title" className={cn("text-xl font-extrabold", className)} {...props} />;
}

export { Sheet, SheetClose, SheetContent, SheetOverlay, SheetTitle };
