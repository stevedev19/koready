"use client";

import { useEffect, useState } from "react";

export type WakeLockState = "pending" | "on" | "unavailable";

/**
 * Keeps the screen on while `active` (Screen Wake Lock API).
 * The browser drops the lock whenever the app goes to the background, so it is
 * requested again on return. Unsupported or refused (older iOS, Low Power Mode,
 * some Home Screen apps) resolves to "unavailable" so the UI can show a hint.
 */
export function useWakeLock(active: boolean): WakeLockState {
  const [state, setState] = useState<WakeLockState>("pending");

  useEffect(() => {
    if (!active) return;
    let lock: WakeLockSentinel | null = null;
    let cancelled = false;

    const acquire = async () => {
      if (document.visibilityState !== "visible") return;
      try {
        if (!("wakeLock" in navigator)) throw new Error("unsupported");
        const next = await navigator.wakeLock.request("screen");
        if (cancelled) {
          next.release().catch(() => {});
          return;
        }
        lock = next;
        setState("on");
      } catch {
        if (!cancelled) setState("unavailable");
      }
    };

    acquire();
    document.addEventListener("visibilitychange", acquire);
    return () => {
      cancelled = true;
      document.removeEventListener("visibilitychange", acquire);
      lock?.release().catch(() => {});
      setState("pending");
    };
  }, [active]);

  return state;
}
