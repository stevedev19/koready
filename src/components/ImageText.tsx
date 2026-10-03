"use client";

import { ImageUp, LoaderCircle } from "lucide-react";
import { useId, useRef, useState, type ClipboardEvent } from "react";
import { OcrError, readImageText, type OcrLang, type OcrProgress } from "@/lib/ocr";
import { useT } from "@/lib/i18n/client";
import { Button } from "./ui/button";

// Privacy: the image goes straight from the file picker or clipboard to the on-device
// reader. It is never kept in state, stored or logged; only the recognized text is
// handed back, into the same text box the user would paste into.

type State =
  | { kind: "idle" }
  | { kind: "busy"; progress: OcrProgress }
  | { kind: "done" }
  | { kind: "error"; code: OcrError["code"] };

export type ImageText = ReturnType<typeof useImageText>;

/** Reads text from a screenshot and passes it to `onText`. */
export function useImageText(langs: OcrLang[], onText: (text: string) => void) {
  const [state, setState] = useState<State>({ kind: "idle" });
  // Ignores a read that finished after a newer one started or after reset().
  const runRef = useRef(0);

  async function read(file: File) {
    const run = ++runRef.current;
    setState({ kind: "busy", progress: { stage: "loading", progress: 0 } });
    try {
      const text = await readImageText(file, langs, (progress) => {
        if (run === runRef.current) setState({ kind: "busy", progress });
      });
      if (run !== runRef.current) return;
      onText(text);
      setState({ kind: "done" });
    } catch (error) {
      if (run !== runRef.current) return;
      setState({ kind: "error", code: error instanceof OcrError ? error.code : "failed" });
    }
  }

  /** Text-box paste handler: a pasted image is read; pasted text works as usual. */
  function onPaste(event: ClipboardEvent<HTMLTextAreaElement>) {
    if (event.clipboardData.getData("text")) return;
    const file = [...event.clipboardData.files].find((f) => f.type.startsWith("image/"));
    if (!file) return;
    event.preventDefault();
    void read(file);
  }

  function reset() {
    runRef.current++;
    setState({ kind: "idle" });
  }

  return { state, read, onPaste, reset, busy: state.kind === "busy" };
}

/** "Upload a screenshot" button plus the reader's progress and result messages. */
export function ImageTextButton({ ocr }: { ocr: ImageText }) {
  const t = useT();
  const s = t.imageText;
  const inputRef = useRef<HTMLInputElement>(null);
  const hintId = useId();
  const { state } = ocr;

  return (
    <div className="space-y-2">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        tabIndex={-1}
        aria-hidden="true"
        onChange={(e) => {
          const file = e.target.files?.[0];
          e.target.value = ""; // so picking the same file again still triggers a read
          if (file) void ocr.read(file);
        }}
      />
      <Button
        type="button"
        variant="tonal"
        className="w-full"
        disabled={ocr.busy}
        aria-describedby={hintId}
        onClick={() => inputRef.current?.click()}
      >
        <ImageUp aria-hidden="true" className="size-5" />
        {s.upload}
      </Button>
      <p id={hintId} className="text-[0.9375rem] text-muted-foreground">
        {s.hint}
      </p>

      <div role="status" aria-live="polite">
        {state.kind === "busy" && <BusyMessage progress={state.progress} />}
        {state.kind === "done" && <p className="rounded-xl bg-accent px-3.5 py-3 font-semibold text-accent-foreground">{s.done}</p>}
        {state.kind === "error" && <p className="rounded-xl bg-warning-soft px-3.5 py-3 font-semibold text-warning">{s.errors[state.code]}</p>}
      </div>
    </div>
  );
}

function BusyMessage({ progress }: { progress: OcrProgress }) {
  const t = useT();
  const s = t.imageText;
  const reading = progress.stage === "reading";
  const pct = Math.round(progress.progress * 100);
  return (
    <div className="space-y-2 rounded-xl bg-surface-2 px-3.5 py-3">
      <p className="flex items-center gap-2 font-semibold">
        <LoaderCircle aria-hidden="true" className="size-5 shrink-0 animate-spin motion-reduce:animate-none" />
        {reading ? s.reading : s.loading}
      </p>
      {!reading && <p className="text-[0.9375rem] text-muted-foreground">{s.loadingFirstTime}</p>}
      {reading && (
        <div
          role="progressbar"
          aria-label={s.reading}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={pct}
          className="h-2 overflow-hidden rounded-full bg-border"
        >
          <div className="h-full rounded-full bg-primary transition-[width]" style={{ width: `${pct}%` }} />
        </div>
      )}
    </div>
  );
}
