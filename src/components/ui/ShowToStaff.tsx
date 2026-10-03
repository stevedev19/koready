"use client";

import { Copy, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useWakeLock } from "@/hooks/useWakeLock";
import { copyText } from "@/lib/clipboard";
import { t } from "@/lib/strings";
import { Button } from "./button";
import { Dialog, DialogClose, DialogContent, DialogTitle } from "./dialog";

export type StaffText = { ko: string; en?: string; hint?: string };

/**
 * Full-screen "show this to staff" mode for clinics, pharmacies and taxis:
 * plain white (black in dark mode), very large Korean, Copy and Close.
 * Keeps the screen awake while shown, or tells the user it may dim.
 */
export function ShowToStaff({ text, onClose }: { text: StaffText | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  // Remember which phrase was copied, so another phrase starts with the plain "Copy" label.
  const [copiedKo, setCopiedKo] = useState<string | null>(null);
  const copied = copiedKo !== null && copiedKo === text?.ko;
  const wakeLock = useWakeLock(text !== null);

  useEffect(() => {
    if (copiedKo === null) return;
    const timer = setTimeout(() => setCopiedKo(null), 2000);
    return () => clearTimeout(timer);
  }, [copiedKo]);

  return (
    <Dialog
      open={text !== null}
      onOpenChange={(open) => {
        if (open) return;
        setCopiedKo(null);
        onClose();
      }}
    >
      <DialogContent
        variant="fullscreen"
        aria-describedby={undefined}
        // Land on Close, as before: one tap gets the user back.
        onOpenAutoFocus={(e) => {
          e.preventDefault();
          closeRef.current?.focus();
        }}
        className="bg-white text-black dark:bg-black dark:text-white"
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
              <DialogTitle asChild className="text-[2.875rem] leading-tight font-extrabold tracking-tight">
                <p lang="ko">{text.ko}</p>
              </DialogTitle>
              {text.en && <p className="mt-5 text-xl opacity-75">{text.en}</p>}
              {text.hint && <p className="mt-2 opacity-75">{text.hint}</p>}
            </div>
            <p aria-live="polite" className="sr-only">{copied ? t.local.phrases.copied : ""}</p>
            <div className="flex gap-2.5">
              <Button
                type="button"
                onClick={async () => setCopiedKo((await copyText(text.ko)) ? text.ko : null)}
                variant="outline"
                size="lg"
                className="flex-1 text-inherit dark:bg-white/15"
              >
                <Copy aria-hidden="true" className="size-5" />
                {copied ? t.local.phrases.copied : t.local.phrases.copy}
              </Button>
              <div className="flex-[1.4]">
                <DialogClose asChild>
                  <Button ref={closeRef} size="lg" className="w-full">
                    {t.local.phrases.close}
                  </Button>
                </DialogClose>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
