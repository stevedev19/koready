"use client";

import { Copy, Sun } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { useWakeLock } from "@/hooks/useWakeLock";
import { copyText } from "@/lib/clipboard";
import { t } from "@/lib/strings";
import { buttonClass } from "./button";

export type StaffText = { ko: string; en?: string; hint?: string };

/**
 * Full-screen "show this to staff" mode for clinics, pharmacies and taxis:
 * plain white (black in dark mode), very large Korean, Copy and Close.
 * Keeps the screen awake while shown, or tells the user it may dim.
 */
export function ShowToStaff({ text, onClose }: { text: StaffText | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const koId = useId();
  const [copied, setCopied] = useState(false);
  const wakeLock = useWakeLock(text !== null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (text && !dialog.open) dialog.showModal();
    if (!text && dialog.open) dialog.close();
    setCopied(false);
  }, [text]);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      aria-labelledby={koId}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-white p-0 text-black dark:bg-black dark:text-white"
    >
      {text && (
        <div className="mx-auto flex h-full max-w-2xl flex-col pr-[max(1.5rem,env(safe-area-inset-right))] pl-[max(1.5rem,env(safe-area-inset-left))] pt-[max(2rem,env(safe-area-inset-top))] pb-[max(1.75rem,env(safe-area-inset-bottom))]">
          <p className="text-sm font-extrabold tracking-wide uppercase opacity-75">{t.local.phrases.showToStaff}</p>
          {wakeLock !== "pending" && (
            <p className="mt-1 flex items-center gap-1.5 text-[0.9375rem] opacity-75">
              <Sun aria-hidden="true" className="size-4 shrink-0" />
              {wakeLock === "on" ? t.local.phrases.screenOn : t.local.phrases.screenMayDim}
            </p>
          )}
          <div className="flex flex-1 flex-col justify-center">
            <p id={koId} lang="ko" className="text-[2.875rem] leading-tight font-extrabold tracking-tight">
              {text.ko}
            </p>
            {text.en && <p className="mt-5 text-xl opacity-75">{text.en}</p>}
            {text.hint && <p className="mt-2 opacity-75">{text.hint}</p>}
          </div>
          <p aria-live="polite" className="sr-only">{copied ? t.local.phrases.copied : ""}</p>
          <div className="flex gap-2.5">
            <button
              type="button"
              onClick={async () => setCopied(await copyText(text.ko))}
              className={buttonClass("secondary", "lg", "flex-1 bg-black/10 text-inherit dark:bg-white/15")}
            >
              <Copy aria-hidden="true" className="size-5" />
              {copied ? t.local.phrases.copied : t.local.phrases.copy}
            </button>
            <form method="dialog" className="flex-[1.4]">
              <button type="submit" autoFocus className={buttonClass("primary", "lg", "w-full")}>
                {t.local.phrases.close}
              </button>
            </form>
          </div>
        </div>
      )}
    </dialog>
  );
}
