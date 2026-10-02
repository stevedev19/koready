import { REPORT_EMAIL } from "@/lib/config";
import { t } from "@/lib/strings";
import { Banner } from "../ui/Notice";

/** "Places can close or change" banner, plus a mailto report link when an address is configured. */
export function ExploreBanner({ trailTitle }: { trailTitle?: string }) {
  const subject = trailTitle ? `${t.explore.reportSubject}: ${trailTitle}` : t.explore.reportSubject;
  return (
    <Banner tone="warning">
      <p className="font-semibold">{t.explore.banner}</p>
      {REPORT_EMAIL && (
        <a
          href={`mailto:${REPORT_EMAIL}?subject=${encodeURIComponent(subject)}`}
          className="inline-flex min-h-12 items-center font-bold underline underline-offset-2"
        >
          {t.explore.reportProblem}
        </a>
      )}
    </Banner>
  );
}
