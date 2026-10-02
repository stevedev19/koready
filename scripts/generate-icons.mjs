// Generates placeholder PWA icons from an inline SVG. Run: node scripts/generate-icons.mjs
// Replace with real artwork later. Uses `sharp`, which ships with Next.js.
import sharp from "sharp";

const svg = (size, padding) => {
  const r = size / 2 - padding;
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
  <rect width="100%" height="100%" fill="#1d4ed8"/>
  <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="#ffffff"/>
  <path d="M ${size / 2 - r} ${size / 2} A ${r} ${r} 0 0 1 ${size / 2 + r} ${size / 2} Z" fill="#cd2e3a"/>
  <path d="M ${size / 2 - r} ${size / 2} A ${r} ${r} 0 0 0 ${size / 2 + r} ${size / 2} Z" fill="#0047a0"/>
</svg>`);
};

const out = [
  ["public/icons/icon-192.png", 192, 28],
  ["public/icons/icon-512.png", 512, 72],
  ["public/icons/icon-maskable-512.png", 512, 128], // extra padding for the maskable safe zone
  ["public/icons/apple-touch-icon.png", 180, 26],
];

for (const [file, size, padding] of out) {
  await sharp(svg(size, padding)).png().toFile(file);
  console.log("wrote", file);
}
