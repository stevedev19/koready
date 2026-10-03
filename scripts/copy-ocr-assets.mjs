// Copies the on-device OCR files (tesseract.js worker, WASM core, Korean + English
// language data) into public/ocr so images are read without any third-party request.
// Runs before dev and build. The output is generated, so public/ocr is gitignored.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const modules = join(root, "node_modules");
const out = join(root, "public", "ocr");
mkdirSync(out, { recursive: true });

const files = [
  ["tesseract.js/dist/worker.min.js", "worker.min.js"],
  // Only the LSTM cores are loaded (we use the default LSTM engine); the worker picks one by CPU support.
  ["tesseract.js-core/tesseract-core-lstm.wasm.js", "core/tesseract-core-lstm.wasm.js"],
  ["tesseract.js-core/tesseract-core-simd-lstm.wasm.js", "core/tesseract-core-simd-lstm.wasm.js"],
  ["tesseract.js-core/tesseract-core-relaxedsimd-lstm.wasm.js", "core/tesseract-core-relaxedsimd-lstm.wasm.js"],
  // "best_int" models: the smaller, faster ones tesseract.js uses by default.
  ["@tesseract.js-data/kor/4.0.0_best_int/kor.traineddata.gz", "lang/kor.traineddata.gz"],
  ["@tesseract.js-data/eng/4.0.0_best_int/eng.traineddata.gz", "lang/eng.traineddata.gz"],
];

for (const [from, to] of files) {
  mkdirSync(join(out, to, ".."), { recursive: true });
  copyFileSync(join(modules, from), join(out, to));
}
console.log(`Copied ${files.length} OCR files to public/ocr`);
