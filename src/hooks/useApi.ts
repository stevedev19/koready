"use client";

import { useCallback, useEffect, useState } from "react";

type State<T> = { key: string; data?: T; error?: true };

export type ApiResult<T> =
  | { status: "loading" }
  | { status: "error"; retry: () => void }
  | { status: "success"; data: T };

/** Fetch one of our own /api routes. Never throws; failures become an error state. */
export function useApi<T>(url: string): ApiResult<T> {
  const [attempt, setAttempt] = useState(0);
  const key = `${url}#${attempt}`;
  const [state, setState] = useState<State<T>>({ key: "" });

  useEffect(() => {
    const controller = new AbortController();
    fetch(url, { signal: controller.signal })
      .then(async (res) => {
        if (!res.ok) throw new Error(String(res.status));
        const data = (await res.json()) as T;
        setState({ key, data });
      })
      .catch(() => {
        if (!controller.signal.aborted) setState({ key, error: true });
      });
    return () => controller.abort();
  }, [url, key]);

  const retry = useCallback(() => setAttempt((n) => n + 1), []);

  // Anything left over from a previous url/attempt counts as loading.
  if (state.key !== key) return { status: "loading" };
  if (state.error || state.data === undefined) return { status: "error", retry };
  return { status: "success", data: state.data };
}
