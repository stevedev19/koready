// Types and search for district recycling guides (data/recycling-<district>.json).
// Shared by the server loader and the client guide.

export type Weekday = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
export const WEEKDAYS: Weekday[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

export type RecyclingItem = {
  id: string;
  category: string;
  name: string;
  nameKo: string;
  aliases: string[];
  bin: string;
  prep: string[];
  /** Key into schedule.streams, or null when the district doesn't publish a day. */
  schedule: string | null;
  pickupNote?: string;
  note?: string;
  /** True when the item isn't named by the district and the answer applies its general rule. */
  inferred?: boolean;
  link?: string;
};

export type RecyclingGuide = {
  district: { id: string; name: string; nameKo: string; city: string };
  last_checked: string;
  needs_native_review: boolean;
  sources: { title: string; url: string; published: string | null }[];
  contact: { name: string; phone: string; source: string };
  schedule: {
    time: string;
    place: string;
    appliesTo: string;
    streams: Record<string, { label: string; days: Weekday[] }>;
  };
  bins: Record<string, { name: string; nameKo: string; how: string }>;
  categories: Record<string, string>;
  items: RecyclingItem[];
};

const normalize = (s: string) => s.normalize("NFKC").toLowerCase().replace(/\s+/g, "");

/** Matches English or Korean names and aliases, ignoring case and spaces. */
export function searchItems(items: RecyclingItem[], query: string): RecyclingItem[] {
  const q = normalize(query);
  if (!q) return items;
  return items.filter((item) =>
    [item.name, item.nameKo, ...item.aliases].some((text) => normalize(text).includes(q)),
  );
}

/** Throws a readable error so a broken district file fails the build, not the user. */
export function validateGuide(guide: RecyclingGuide, file: string): RecyclingGuide {
  const problems: string[] = [];
  if (!guide.district?.id) problems.push("district.id is missing");
  if (!guide.last_checked) problems.push("last_checked is missing");
  if (!guide.sources?.length) problems.push("at least one source is required");
  for (const item of guide.items ?? []) {
    if (!guide.bins[item.bin]) problems.push(`item "${item.id}": unknown bin "${item.bin}"`);
    if (!guide.categories[item.category]) problems.push(`item "${item.id}": unknown category "${item.category}"`);
    if (item.schedule && !guide.schedule.streams[item.schedule]) {
      problems.push(`item "${item.id}": unknown schedule "${item.schedule}"`);
    }
  }
  for (const [id, stream] of Object.entries(guide.schedule?.streams ?? {})) {
    for (const day of stream.days) {
      if (!WEEKDAYS.includes(day)) problems.push(`schedule "${id}": bad day "${day}"`);
    }
  }
  if (problems.length) throw new Error(`${file}:\n- ${problems.join("\n- ")}`);
  return guide;
}
