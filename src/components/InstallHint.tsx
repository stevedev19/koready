"use client";

import { Copy, Share, SquarePlus, Smartphone, X, type LucideIcon } from "lucide-react";
import { useState, useSyncExternalStore, type ReactNode } from "react";
import { copyText } from "@/lib/clipboard";
import { useT } from "@/lib/i18n/client";
import { Card } from "./Card";
import { Button } from "./ui/button";

const STORAGE_KEY = "ksk.installHint.dismissed";
const CHANGE_EVENT = "ksk:install-hint-change";

type Mode = "safari" | "other-browser" | "hidden";

// iOS browsers that aren't Safari, plus in-app browsers (KakaoTalk, Naver, Instagram…).
const NOT_SAFARI = /CriOS|FxiOS|EdgiOS|OPiOS|OPT\/|GSA\/|YaBrowser|DuckDuckGo|Whale|NAVER|DaumApps|KAKAOTALK|Line\/|FBAN|FBAV|FB_IAB|Instagram|Twitter|MicroMessenger|Snapchat/i;

function readMode(): Mode {
  try {
    if (localStorage.getItem(STORAGE_KEY)) return "hidden";
  } catch {
    // storage blocked; still show the hint
  }
  const ua = navigator.userAgent;
  // iPadOS reports itself as a Mac; touch points give it away.
  const isIos = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  if (!isIos) return "hidden";
  const standalone =
    (navigator as Navigator & { standalone?: boolean }).standalone === true ||
    window.matchMedia("(display-mode: standalone)").matches;
  if (standalone) return "hidden";
  // In-app web views also lack the "Safari/" token.
  return NOT_SAFARI.test(ua) || !/Safari\//.test(ua) ? "other-browser" : "safari";
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

/**
 * "Add to Home Screen" steps for iPhone and iPad. iOS has no install prompt, so we explain it.
 * Shown only on iOS, only outside the installed app, until dismissed (remembered on this device).
 */
export function InstallHint() {
  const t = useT();
  const s = t.installHint;
  const mode = useSyncExternalStore(subscribe, readMode, (): Mode => "hidden");
  const [copied, setCopied] = useState(false);

  if (mode === "hidden") return null;

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore; it will show again next visit
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  return (
    <Card
      title={s.title}
      icon={Smartphone}
      meta={
        <button
          type="button"
          onClick={dismiss}
          aria-label={s.dismiss}
          className="-my-2 -mr-3 grid size-12 place-items-center rounded-full text-muted-foreground"
        >
          <X aria-hidden="true" className="size-6" />
        </button>
      }
    >
      {mode === "safari" ? (
        <>
          <p className="mb-3 text-muted-foreground">{s.why}</p>
          <ol className="space-y-2.5">
            <Step n={1} icon={Share}>
              {s.safari.share}
            </Step>
            <Step n={2} icon={SquarePlus}>
              {s.safari.add}
            </Step>
            <Step n={3}>{s.safari.confirm}</Step>
          </ol>
        </>
      ) : (
        <>
          <p className="font-bold">{s.otherBrowser.title}</p>
          <p className="mt-1 mb-3 text-muted-foreground">{s.otherBrowser.body}</p>
          <p aria-live="polite" className="sr-only">
            {copied ? s.otherBrowser.copied : ""}
          </p>
          <Button
            type="button"
            onClick={async () => setCopied(await copyText(window.location.origin + "/"))}
            variant="tonal"
            className="w-full"
          >
            <Copy aria-hidden="true" className="size-5" />
            {copied ? s.otherBrowser.copied : s.otherBrowser.copy}
          </Button>
        </>
      )}
    </Card>
  );
}

function Step({ n, icon: Icon, children }: { n: number; icon?: LucideIcon; children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span
        aria-hidden="true"
        className="grid size-7 shrink-0 place-items-center rounded-full bg-accent text-[0.9375rem] font-extrabold text-primary"
      >
        {n}
      </span>
      <span className="min-w-0 flex-1 pt-0.5">{children}</span>
      {Icon && <Icon aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-primary" />}
    </li>
  );
}
