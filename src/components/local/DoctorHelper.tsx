"use client";

import { Bone, CircleQuestionMark, Ear, Eye, Hand, Soup, Stethoscope, Thermometer, Venus, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { CATEGORIES } from "@/lib/clinics";
import { t } from "@/lib/strings";
import { Card } from "../Card";
import { ClinicTypeCard } from "./ClinicTypeCard";

// Icons by category id (data/clinics.json keeps its emoji field; the UI uses Lucide).
const CATEGORY_ICON: Record<string, LucideIcon> = {
  cold: Thermometer,
  stomach: Soup,
  skin: Hand,
  bones: Bone,
  eyes: Eye,
  ent: Ear,
  womens: Venus,
  other: CircleQuestionMark,
};

/** Problem picker → clinic type. The choice stays in memory only (no health data is stored). */
export function DoctorHelper() {
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const category = CATEGORIES.find((c) => c.id === categoryId);

  return (
    <>
      <Card title={t.local.doctor.pickerTitle} icon={Stethoscope}>
        <p className="mb-3 text-muted">{t.local.doctor.pickerHint}</p>
        <div className="grid grid-cols-2 gap-2">
          {CATEGORIES.map((c) => {
            const selected = c.id === categoryId;
            const Icon = CATEGORY_ICON[c.id] ?? CircleQuestionMark;
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setCategoryId(selected ? null : c.id)}
                className={`flex min-h-[4.5rem] flex-col items-start justify-center gap-1.5 rounded-2xl px-3.5 py-3 text-left leading-snug font-bold transition-colors ${
                  selected ? "bg-accent text-accent-contrast" : "bg-surface-2 text-foreground"
                }`}
              >
                <Icon aria-hidden="true" className="size-6" />
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
