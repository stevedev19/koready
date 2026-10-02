"use client";

import { useEffect } from "react";

/** Registers /sw.js in production only (a SW in dev makes reloads confusing). */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("/sw.js", { scope: "/" }).catch(() => {
      // Offline support is a nice-to-have; ignore registration failures.
    });
  }, []);
  return null;
}
