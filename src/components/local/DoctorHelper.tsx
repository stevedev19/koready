"use client";

import { useState } from "react";
import { CATEGORIES } from "@/lib/clinics";
import { t } from "@/lib/strings";
import { Card } from "../Card";
import { ClinicTypeCard } from "./ClinicTypeCard";

/** Problem picker → clinic type. The choice stays in memory only (no health data is stored). */
export function DoctorHelper() {
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const category = CATEGORIES.find((c) => c.id === categoryId);

  return (
    <>
      <Card title={t.local.doctor.pickerTitle} icon="🩺">
        <p className="mb-3 text-muted">{t.local.doctor.pickerHint}</p>
        <div className="grid grid-cols-2 gap-2">
          {CATEGORIES.map((c) => {
            const selected = c.id === categoryId;
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setCategoryId(selected ? null : c.id)}
                className={`flex min-h-16 items-center gap-2 rounded-xl border-2 px-3 py-2 text-left font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  selected ? "border-accent bg-accent text-accent-contrast" : "border-border bg-background"
                }`}
              >
                <span aria-hidden="true" className="text-2xl">{c.icon}</span>
                {c.label}
              </button>
            );
          })}
        </div>
      </Card>

      {category && <ClinicTypeCard id={category.clinicType} alsoId={category.alsoClinicType} />}
    </>
  );
}
