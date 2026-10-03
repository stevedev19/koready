"use client";

import { useEffect } from "react";

// Material-style touch ripple (like React Native Paper's TouchableRipple), for the web.
// One listener for the whole app: any button, link, tab, toggle or <summary> gets a
// ripple from the point you press. Opt out with data-no-ripple on an element or ancestor.
// The ripple uses the element's text color, so it shows on light and dark surfaces alike.

const TARGETS = 'a[href], button, summary, [role="tab"], [role="radio"], [role="checkbox"], [role="button"]';

function spawn(event: PointerEvent) {
  if (event.button !== 0 || !(event.target instanceof Element)) return;
  const el = event.target.closest<HTMLElement>(TARGETS);
  if (!el || el.closest("[data-no-ripple]")) return;
  if (el.matches(":disabled, [aria-disabled='true']")) return;

  const style = getComputedStyle(el);
  if (style.display === "inline") return; // plain text links inside sentences
  if (style.position === "static") el.style.position = "relative";

  const rect = el.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  // Big enough to reach the farthest corner from the press point.
  const radius = Math.hypot(Math.max(x, rect.width - x), Math.max(y, rect.height - y));

  // A clipping layer, so the element's own overflow is never changed.
  const layer = document.createElement("span");
  layer.className = "ripple-layer";
  layer.setAttribute("aria-hidden", "true");
  const wave = document.createElement("span");
  wave.className = "ripple-wave";
  wave.style.width = wave.style.height = `${radius * 2}px`;
  wave.style.left = `${x - radius}px`;
  wave.style.top = `${y - radius}px`;
  layer.append(wave);
  el.append(layer);

  // Grow while pressed, then fade out on release (or after the grow if released early).
  const pressedAt = performance.now();
  const release = () => {
    const wait = Math.max(0, 225 - (performance.now() - pressedAt));
    setTimeout(() => {
      wave.classList.add("ripple-out");
      wave.addEventListener("animationend", () => layer.remove(), { once: true });
      setTimeout(() => layer.remove(), 600); // in case animations are off
    }, wait);
  };
  window.addEventListener("pointerup", release, { once: true });
  window.addEventListener("pointercancel", release, { once: true });
}

export function Ripple() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.addEventListener("pointerdown", spawn, { passive: true });
    return () => document.removeEventListener("pointerdown", spawn);
  }, []);
  return null;
}
