import { REPORT_EMAIL } from "@/lib/config";
import { getT } from "@/lib/i18n/server";
import { Banner } from "../ui/Notice";

/** "Places can close or change" banner, plus a mailto report link when an address is configured. */
export async function TrailBanner({ trailTitle }: { trailTitle?: string }) {
  const t = await getT();
  const subject = trailTitle ? `${t.trails.reportSubject}: ${trailTitle}` : t.trails.reportSubject;
  return (
    <Banner tone="warning">
      <p className="font-semibold">{t.trails.banner}</p>
      {REPORT_EMAIL && (
        <a
          href={`mailto:${REPORT_EMAIL}?subject=${encodeURIComponent(subject)}`}
          className="inline-flex min-h-12 items-center font-bold underline underline-offset-2"
        >
          {t.trails.reportProblem}
        </a>
      )}
    </Banner>
  );
}
