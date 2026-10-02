"use client";

import { useState } from "react";
import { t } from "@/lib/strings";
import { Card } from "../Card";

/** Ticks live only in memory; nothing is saved. */
export function BringChecklist() {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  function toggle(i: number) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  return (
    <Card title={t.local.doctor.bringTitle} icon="🎒" footer={t.local.doctor.bringNote}>
      <ul className="space-y-1">
        {t.local.doctor.bringList.map((item, i) => (
          <li key={item}>
            <label className="flex min-h-11 cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={checked.has(i)}
                onChange={() => toggle(i)}
                className="size-6 shrink-0 accent-(--accent)"
              />
              <span className={checked.has(i) ? "text-muted line-through" : ""}>{item}</span>
            </label>
          </li>
        ))}
      </ul>
    </Card>
  );
}
