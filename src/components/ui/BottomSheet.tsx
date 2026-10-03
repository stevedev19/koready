"use client";

import { X } from "lucide-react";
import type { ReactNode } from "react";
import { t } from "@/lib/strings";
import { Sheet, SheetClose, SheetContent, SheetTitle } from "./sheet";

/**
 * Bottom sheet on Radix Dialog: focus is trapped and returned, Escape and the backdrop
 * close it, the page behind is hidden from screen readers and can't scroll.
 */
export function BottomSheet({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <Sheet open={open} onOpenChange={(next) => !next && onClose()}>
      <SheetContent aria-describedby={undefined}>
        <div className="pt-3 pr-[max(1.25rem,env(safe-area-inset-right))] pb-[calc(1.5rem+env(safe-area-inset-bottom))] pl-[max(1.25rem,env(safe-area-inset-left))]">
          <div aria-hidden="true" className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-input/60" />
          <div className="mb-3 flex items-start gap-3">
            <SheetTitle className="min-w-0 flex-1">{title}</SheetTitle>
            <SheetClose
              aria-label={t.common.close}
              className="-mt-1 -mr-2 grid size-12 shrink-0 place-items-center rounded-full text-muted-foreground"
            >
              <X aria-hidden="true" className="size-6" />
            </SheetClose>
          </div>
          {children}
        </div>
      </SheetContent>
    </Sheet>
  );
}
