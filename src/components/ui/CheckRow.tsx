"use client";

import { Check } from "lucide-react";
import type { ReactNode } from "react";

/** Large checklist row (56px). Native checkbox under a custom box, so it stays accessible. */
export function CheckRow({ checked, onChange, children }: { checked: boolean; onChange: () => void; children: ReactNode }) {
  return (
    <label className="flex min-h-14 cursor-pointer items-center gap-3.5 px-4">
      <span className="relative grid size-[1.625rem] shrink-0 place-items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="peer size-full appearance-none rounded-lg border-2 border-border-strong checked:border-accent checked:bg-accent"
        />
        <Check
          aria-hidden="true"
          strokeWidth={3}
          className="pointer-events-none absolute size-4 text-accent-contrast opacity-0 peer-checked:opacity-100"
        />
      </span>
      <span className={checked ? "text-muted line-through" : ""}>{children}</span>
    </label>
  );
}
