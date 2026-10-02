"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { Phrase } from "@/lib/clinics";
import { t } from "@/lib/strings";
import { Card } from "../Card";

/** Clipboard API needs HTTPS; fall back to execCommand on plain-HTTP dev URLs. */
async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    area.remove();
    return ok;
  } catch {
    return false;
  }
}

const smallButton =
  "min-h-11 rounded-lg border border-border px-3 text-sm font-semibold text-accent focus-visible:outline-2 focus-visible:outline-accent";

export function PhraseCard({ title, phrases }: { title: string; phrases: Phrase[] }) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [shown, setShown] = useState<Phrase | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const largeTextId = useId();

  useEffect(() => {
    if (shown) dialogRef.current?.showModal();
  }, [shown]);

  useEffect(() => {
    if (!copiedId) return;
    const timer = setTimeout(() => setCopiedId(null), 2000);
    return () => clearTimeout(timer);
  }, [copiedId]);

  async function onCopy(phrase: Phrase) {
    if (await copyText(phrase.ko)) setCopiedId(phrase.id);
  }

  return (
    <Card
      title={title}
      icon="🗣️"
      footer={phrases.some((p) => p.needs_native_review) ? t.local.phrases.reviewNote : undefined}
    >
      <ul className="divide-y divide-border">
        {phrases.map((phrase) => (
          <li key={phrase.id} className="py-3 first:pt-0 last:pb-0">
            <p lang="ko" className="text-xl font-bold">{phrase.ko}</p>
            <p className="text-muted italic">{phrase.romanization}</p>
            <p>{phrase.en}</p>
            <div className="mt-2 flex gap-2">
              <button type="button" className={smallButton} onClick={() => onCopy(phrase)}>
                {copiedId === phrase.id ? `✓ ${t.local.phrases.copied}` : t.local.phrases.copy}
              </button>
              <button
                type="button"
                className={smallButton}
                onClick={() => setShown(phrase)}
                aria-label={`${t.local.phrases.showLarge}: ${phrase.en}`}
              >
                {t.local.phrases.showLarge} ⛶
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p aria-live="polite" className="sr-only">
        {copiedId ? t.local.phrases.copied : ""}
      </p>

      <dialog
        ref={dialogRef}
        onClose={() => setShown(null)}
        aria-labelledby={largeTextId}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-surface p-0 text-foreground backdrop:bg-black/60"
      >
        {shown && (
          <div className="flex h-full flex-col p-6 pt-[max(1.5rem,env(safe-area-inset-top))]">
            <p className="text-sm font-semibold tracking-wide text-muted uppercase">{t.local.phrases.showToStaff}</p>
            <div className="flex flex-1 flex-col justify-center">
              <p id={largeTextId} lang="ko" className="text-5xl leading-tight font-bold break-keep">
                {shown.ko}
              </p>
              <p className="mt-6 text-xl text-muted">{shown.en}</p>
              {shown.ko.includes("___") && <p className="mt-2 text-muted">{t.local.phrases.blankHint}</p>}
            </div>
            <form method="dialog">
              <button
                type="submit"
                autoFocus
                className="min-h-14 w-full rounded-xl bg-accent text-lg font-semibold text-accent-contrast focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {t.local.phrases.close}
              </button>
            </form>
          </div>
        )}
      </dialog>
    </Card>
  );
}
