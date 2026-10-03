"use client";

import { ChevronDown } from "lucide-react";
import { DISTRICTS, type District } from "@/lib/districts";
import { t } from "@/lib/strings";

type Props = { district: District; onChange: (id: string) => void };

export function DistrictPicker({ district, onChange }: Props) {
  return (
    <header>
      <p className="text-sm font-bold text-muted-foreground">{t.home.todayIn}</p>
      <label className="relative -ml-1 inline-flex max-w-full items-center">
        <span className="sr-only">{t.home.pickDistrict}</span>
        {/* Native select: best on mobile and accessible by default. Styled as the page title. */}
        <select
          value={district.id}
          onChange={(e) => onChange(e.target.value)}
          className="min-h-12 max-w-full appearance-none truncate rounded-xl bg-transparent py-1 pr-9 pl-1 text-[1.75rem] font-extrabold tracking-[-0.025em] text-foreground"
        >
          {DISTRICTS.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name.en}
            </option>
          ))}
        </select>
        <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-1 size-6 text-muted-foreground" />
      </label>
    </header>
  );
}
