"use client";

import { useId, type ReactNode } from "react";
import { Checkbox } from "./checkbox";

/** Large checklist row (56px): the whole row toggles the checkbox. */
export function CheckRow({ checked, onChange, children }: { checked: boolean; onChange: () => void; children: ReactNode }) {
  const textId = useId();
  return (
    <label className="flex min-h-14 cursor-pointer items-center gap-3.5 px-4">
      <Checkbox checked={checked} onCheckedChange={onChange} aria-labelledby={textId} />
      <span id={textId} className={checked ? "text-muted-foreground line-through" : ""}>
        {children}
      </span>
    </label>
  );
}
