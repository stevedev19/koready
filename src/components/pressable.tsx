"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type KeyboardEvent,
  type PointerEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

/**
 * Shared tap feedback. Exported for elements that can't become a Pressable
 * (a <summary>, or the label around a native <select>).
 * hover: only applies on devices with a real pointer (Tailwind v4 wraps it in
 * @media (hover: hover)), so it never sticks after a tap on a phone.
 * Focus ring: the global 3px :focus-visible outline in globals.css.
 */
export const pressableClass =
  "relative flex min-h-12 w-full items-center text-left transition-colors duration-100 " +
  "[-webkit-tap-highlight-color:transparent] hover:bg-surface-2 active:bg-surface-3 " +
  "disabled:pointer-events-none disabled:opacity-45";

type Common = { children: ReactNode; className?: string; ripple?: boolean };
type AsLink = Common & { href: string; external?: boolean } & Omit<ComponentProps<"a">, "href" | "className" | "children">;
type AsButton = Common & { href?: undefined } & Omit<ComponentProps<"button">, "className" | "children">;
export type PressableProps = AsLink | AsButton;

type Wave = { id: number; x: number; y: number; size: number };
const RIPPLE_MS = 550;

/** A <button>, or a link when `href` is given, with consistent tap feedback. */
export function Pressable(props: PressableProps) {
  const { children, className, ripple = false, ...rest } = props;
  const [waves, setWaves] = useState<Wave[]>([]);
  const nextId = useRef(0);
  const timers = useRef(new Set<ReturnType<typeof setTimeout>>());

  // Clear pending ripple timers on unmount.
  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach(clearTimeout);
  }, []);

  function addWave(e: PointerEvent<HTMLElement>) {
    if (!ripple || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.hypot(rect.width, rect.height) * 2;
    const wave = { id: nextId.current++, x: e.clientX - rect.left - size / 2, y: e.clientY - rect.top - size / 2, size };
    setWaves((w) => [...w, wave]);
    const timer = setTimeout(() => {
      setWaves((w) => w.filter((x) => x.id !== wave.id));
      timers.current.delete(timer);
    }, RIPPLE_MS);
    timers.current.add(timer);
  }

  const classes = cn(pressableClass, ripple && "overflow-hidden", className);
  const waveLayer = waves.length > 0 && (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      {waves.map((w) => (
        <span
          key={w.id}
          className="absolute animate-[pressable-ripple_550ms_ease-out_forwards] rounded-full bg-current"
          style={{ left: w.x, top: w.y, width: w.size, height: w.size }}
        />
      ))}
    </span>
  );

  if (rest.href !== undefined) {
    const { href, external, onKeyDown, onPointerDown, ...anchorProps } = rest as AsLink;
    const shared = {
      ...anchorProps,
      className: classes,
      onPointerDown: (e: PointerEvent<HTMLAnchorElement>) => {
        onPointerDown?.(e);
        addWave(e);
      },
      // Links natively open on Enter; make Space work too, as on buttons.
      onKeyDown: (e: KeyboardEvent<HTMLAnchorElement>) => {
        onKeyDown?.(e);
        if (e.key === " " && !e.defaultPrevented) {
          e.preventDefault();
          e.currentTarget.click();
        }
      },
    };
    // tel:, mailto: and external links stay plain <a> (no client routing or prefetch).
    return external || /^(tel:|mailto:|https?:)/.test(href) ? (
      <a href={href} {...shared} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {waveLayer}
        {children}
      </a>
    ) : (
      <Link href={href} {...shared}>
        {waveLayer}
        {children}
      </Link>
    );
  }

  const { type = "button", onPointerDown, ...buttonProps } = rest as AsButton;
  return (
    <button
      type={type}
      {...buttonProps}
      className={classes}
      onPointerDown={(e) => {
        onPointerDown?.(e);
        addWave(e);
      }}
    >
      {waveLayer}
      {children}
    </button>
  );
}
