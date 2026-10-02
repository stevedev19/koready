import { REPORT_EMAIL } from "@/lib/config";
import { t } from "@/lib/strings";

/** "Places can close or change" banner, plus a mailto report link when an address is configured. */
export function ExploreBanner({ trailTitle }: { trailTitle?: string }) {
  const subject = trailTitle ? `${t.explore.reportSubject}: ${trailTitle}` : t.explore.reportSubject;
  return (
    <div
      role="note"
      className="flex flex-wrap items-center justify-between gap-2 rounded-lg border-2 border-amber-400 bg-amber-50 px-3 py-2 text-amber-950 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-50"
    >
      <p className="font-semibold">⚠️ {t.explore.banner}</p>
      {REPORT_EMAIL && (
        <a
          href={`mailto:${REPORT_EMAIL}?subject=${encodeURIComponent(subject)}`}
          className="inline-flex min-h-11 items-center font-semibold underline underline-offset-2"
        >
          {t.explore.reportProblem}
        </a>
      )}
    </div>
  );
}
