"use client";

import { Backpack } from "lucide-react";
import { useState } from "react";
import { useT } from "@/lib/i18n/client";
import { Card } from "../Card";
import { CheckRow } from "../ui/CheckRow";

/** Ticks live only in memory; nothing is saved. */
export function BringChecklist() {
  const t = useT();
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
    <Card title={t.local.doctor.bringTitle} icon={Backpack} footer={t.local.doctor.bringNote}>
      <ul className="-mx-5 divide-y divide-border">
        {t.local.doctor.bringList.map((item, i) => (
          <li key={item}>
            <CheckRow checked={checked.has(i)} onChange={() => toggle(i)}>
              {item}
            </CheckRow>
          </li>
        ))}
      </ul>
    </Card>
  );
}
