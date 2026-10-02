"use client";

import { Copy, Maximize2, MessageSquareText } from "lucide-react";
import { useState } from "react";
import { copyText } from "@/lib/clipboard";
import type { Phrase } from "@/lib/clinics";
import { t } from "@/lib/strings";
import { Card } from "../Card";
import { buttonClass } from "../ui/button";
import { ShowToStaff, type StaffText } from "../ui/ShowToStaff";
import { Toast, useToast } from "../ui/Toast";

export function PhraseCard({ title, phrases }: { title: string; phrases: Phrase[] }) {
  const [shown, setShown] = useState<StaffText | null>(null);
  const [toast, showToast] = useToast();

  async function onCopy(phrase: Phrase) {
    if (await copyText(phrase.ko)) showToast(t.local.phrases.copied);
  }

  return (
    <Card
      title={title}
      icon={MessageSquareText}
      footer={phrases.some((p) => p.needs_native_review) ? t.local.phrases.reviewNote : undefined}
    >
      <ul className="space-y-2.5">
        {phrases.map((phrase) => (
          <li key={phrase.id} className="rounded-2xl bg-surface-2 p-4">
            <p lang="ko" className="text-[1.375rem] leading-snug font-extrabold">{phrase.ko}</p>
            <p className="text-muted italic">{phrase.romanization}</p>
            <p className="mt-0.5">{phrase.en}</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button
                type="button"
                className={buttonClass("secondary", "md", "bg-surface")}
                onClick={() => onCopy(phrase)}
                aria-label={`${t.local.phrases.copy}: ${phrase.en}`}
              >
                <Copy aria-hidden="true" className="size-5" />
                {t.local.phrases.copy}
              </button>
              <button
                type="button"
                className={buttonClass("tonal")}
                onClick={() =>
                  setShown({ ko: phrase.ko, en: phrase.en, hint: phrase.ko.includes("___") ? t.local.phrases.blankHint : undefined })
                }
                aria-label={`${t.local.phrases.showLarge}: ${phrase.en}`}
              >
                <Maximize2 aria-hidden="true" className="size-5" />
                {t.local.phrases.showLarge}
              </button>
            </div>
          </li>
        ))}
      </ul>
      <ShowToStaff text={shown} onClose={() => setShown(null)} />
      <Toast message={toast} />
    </Card>
  );
}
