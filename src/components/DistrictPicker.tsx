"use client";

import { DISTRICTS, type District } from "@/lib/districts";
import { t } from "@/lib/strings";

type Props = { district: District; onChange: (id: string) => void };

export function DistrictPicker({ district, onChange }: Props) {
  return (
    <header className="pt-2">
      <p className="text-base text-muted">{t.home.todayIn}</p>
      <label className="relative mt-1 block">
        <span className="sr-only">{t.home.pickDistrict}</span>
        {/* Native select: best on mobile and accessible by default. */}
        <select
          value={district.id}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-border bg-surface py-2 pr-10 pl-3 text-2xl font-bold focus-visible:outline-2 focus-visible:outline-accent"
        >
          {DISTRICTS.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name.en}
            </option>
          ))}
        </select>
        <span aria-hidden="true" className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-muted">
          ▾
        </span>
      </label>
    </header>
  );
}
