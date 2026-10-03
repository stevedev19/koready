// On-device text recognition (OCR) for screenshots, using tesseract.js.
// Privacy: the image is read inside a Web Worker in this browser. It is never uploaded,
// stored or logged. The engine and language files come from our own site (public/ocr,
// see scripts/copy-ocr-assets.mjs); the language files are cached in this browser's
// IndexedDB so the next read is faster. They contain no user data.

export type OcrLang = "kor" | "eng";

/** Phone screenshots are a few MB; anything much bigger is unlikely to be a message. */
export const MAX_IMAGE_BYTES = 15 * 1024 * 1024;

export type OcrProgress = { stage: "loading" | "reading"; progress: number };

export class OcrError extends Error {
  constructor(public readonly code: "not_image" | "too_big" | "no_text" | "failed") {
    super(code);
  }
}

/**
 * Reads the text in an image. Loads the engine on first use (a few MB), and
 * shuts it down afterwards to free memory on low-end phones.
 */
export async function readImageText(
  image: File,
  langs: OcrLang[],
  onProgress?: (p: OcrProgress) => void,
): Promise<string> {
  if (!image.type.startsWith("image/")) throw new OcrError("not_image");
  if (image.size > MAX_IMAGE_BYTES) throw new OcrError("too_big");

  // Loaded on demand so the checker page stays light for people who only paste text.
  const { createWorker } = await import("tesseract.js");
  const base = `${window.location.origin}/ocr`;
  let worker: Awaited<ReturnType<typeof createWorker>> | undefined;
  try {
    onProgress?.({ stage: "loading", progress: 0 });
    worker = await createWorker(langs, undefined, {
      workerPath: `${base}/worker.min.js`,
      corePath: `${base}/core`,
      langPath: `${base}/lang`,
      // Progress only. The logger never receives the recognized text.
      logger: (m) => {
        if (m.status === "recognizing text") onProgress?.({ stage: "reading", progress: m.progress });
        else if (m.status.startsWith("loading")) onProgress?.({ stage: "loading", progress: m.progress });
      },
    });
    // Keeps Korean words together instead of spacing out every syllable.
    await worker.setParameters({ preserve_interword_spaces: "1" });
    const { data } = await worker.recognize(image);
    const text = tidy(data.text);
    if (!text) throw new OcrError("no_text");
    return text;
  } catch (error) {
    // Never pass on the engine's own error: it could include image details.
    throw error instanceof OcrError ? error : new OcrError("failed");
  } finally {
    await worker?.terminate().catch(() => {});
  }
}

/** Trims each line and drops the blank-line runs OCR adds between chat bubbles. */
function tidy(raw: string): string {
  return raw
    .split("\n")
    .map((line) => line.replace(/[ \t]+/g, " ").trim())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
