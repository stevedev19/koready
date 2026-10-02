import { t } from "@/lib/strings";

export function RecyclingBanner() {
  return (
    <p
      role="note"
      className="rounded-lg border-2 border-amber-400 bg-amber-50 px-3 py-2 font-semibold text-amber-950 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-50"
    >
      ⚠️ {t.local.recycling.banner}
    </p>
  );
}
