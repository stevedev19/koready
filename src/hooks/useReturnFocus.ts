"use client";

import { useRef } from "react";

type AutoFocusEvent = Event;
type Handlers = {
  onOpenAutoFocus?: (event: AutoFocusEvent) => void;
  onCloseAutoFocus?: (event: AutoFocusEvent) => void;
};

/**
 * Radix Dialog only returns focus to a <DialogTrigger>. Our sheets are opened by plain
 * buttons, so remember whatever had focus on open and put focus back there on close
 * (what the native <dialog> did before). Caller handlers still run.
 */
export function useReturnFocus({ onOpenAutoFocus, onCloseAutoFocus }: Handlers): Required<Handlers> {
  const returnTo = useRef<HTMLElement | null>(null);
  return {
    onOpenAutoFocus: (event) => {
      returnTo.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      onOpenAutoFocus?.(event);
    },
    onCloseAutoFocus: (event) => {
      onCloseAutoFocus?.(event);
      if (event.defaultPrevented) return;
      const target = returnTo.current;
      returnTo.current = null;
      if (target?.isConnected) {
        event.preventDefault();
        target.focus();
      }
    },
  };
}
