import "server-only";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { validateGuide, type RecyclingGuide } from "@/lib/recycling";

// To add a district, drop a new data/recycling-<id>.json file. No code changes needed.
const DATA_DIR = path.join(process.cwd(), "data");
const FILE_PATTERN = /^recycling-([a-z0-9-]+)\.json$/;

function loadAll(): RecyclingGuide[] {
  return readdirSync(DATA_DIR)
    .filter((file) => FILE_PATTERN.test(file))
    .map((file) => {
      const guide = JSON.parse(readFileSync(path.join(DATA_DIR, file), "utf8")) as RecyclingGuide;
      const id = file.match(FILE_PATTERN)![1];
      if (guide.district?.id !== id) throw new Error(`${file}: district.id must be "${id}"`);
      return validateGuide(guide, file);
    })
    .sort((a, b) => a.district.name.localeCompare(b.district.name));
}

export function listRecyclingGuides(): RecyclingGuide["district"][] {
  return loadAll().map((g) => g.district);
}

export function getRecyclingGuide(id: string): RecyclingGuide | undefined {
  return loadAll().find((g) => g.district.id === id);
}
