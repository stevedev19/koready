"use client";

import { X } from "lucide-react";
import { useEffect, useId, useRef, type ReactNode } from "react";
import { t } from "@/lib/strings";

/**
 * Bottom sheet built on <dialog>: focus is trapped, Escape and the backdrop close it,
 * and the page behind is inert while it is open.
 */
export function Sheet({
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
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose(); // backdrop tap
      }}
      className="mx-auto mt-auto mb-0 max-h-[85dvh] w-full max-w-lg rounded-t-sheet bg-card p-0 text-foreground shadow-float backdrop:bg-black/45 open:animate-[sheet-in_220ms_var(--ease-out-soft)]"
    >
      <div className="pt-3 pr-[max(1.25rem,env(safe-area-inset-right))] pb-[calc(1.5rem+env(safe-area-inset-bottom))] pl-[max(1.25rem,env(safe-area-inset-left))]">
        <div aria-hidden="true" className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-input/60" />
        <div className="mb-3 flex items-start gap-3">
          <h2 id={titleId} className="min-w-0 flex-1 text-xl font-extrabold">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.common.close}
            className="-mt-1 -mr-2 grid size-12 shrink-0 place-items-center rounded-full text-muted-foreground"
          >
            <X aria-hidden="true" className="size-6" />
          </button>
        </div>
        {children}
      </div>
    </dialog>
  );
}
