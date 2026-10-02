import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { HelpLines } from "@/components/HelpLines";
import { LocalScreen } from "@/components/local/LocalScreen";
import { ALERT_RULES } from "@/lib/alerts/check";
import { t } from "@/lib/strings";

const s = t.alertGuide;

export const metadata: Metadata = { title: s.title };

const CATEGORY_STYLE: Record<string, string> = {
  critical: "border-red-600 bg-red-50 text-red-950 dark:border-red-500 dark:bg-red-950 dark:text-red-50",
  emergency: "border-orange-500 bg-orange-50 text-orange-950 dark:border-orange-500 dark:bg-orange-950 dark:text-orange-50",
  safety: "border-sky-500 bg-sky-50 text-sky-950 dark:border-sky-500 dark:bg-sky-950 dark:text-sky-50",
};

const SOURCES = [
  { label: "Disaster text sending rules, Annex 1 (law.go.kr)", url: ALERT_RULES.categories[0].source },
  { label: "KMA: earthquake alert criteria", url: "https://www.weather.go.kr/wnuri_help/html/eqk-vol/eqk-message.jsp" },
  { label: "Ministry of the Interior and Safety: English in alerts (2024)", url: "https://www.mois.go.kr/frt/bbs/type010/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000008&nttId=107429" },
  { label: "Ministry of the Interior and Safety: Emergency Ready App", url: "https://www.mois.go.kr/frt/sub/a06/b11/safetyStep/screen.do" },
  { label: "Apple: Government alerts on iPhone", url: "https://support.apple.com/en-us/102516" },
  { label: "Samsung: Wireless emergency alerts", url: "https://www.samsung.com/us/support/answer/ANS10001579/" },
];

export default function AlertGuidePage() {
  return (
    <LocalScreen
      title={s.title}
      icon="📘"
      backHref="/safety"
      backLabel={s.back}
      notice={<p role="note" className="rounded-lg border border-border bg-surface px-3 py-2 font-semibold">⚠️ {t.alerts.disclaimer}</p>}
    >
      <p className="text-lg">{s.intro}</p>

      <section aria-labelledby="categories" className="space-y-3">
        <h2 id="categories" className="text-xl font-bold">{s.categoriesTitle}</h2>
        {ALERT_RULES.categories.map((c) => (
          <div key={c.id} className={`rounded-2xl border-l-8 p-4 ${CATEGORY_STYLE[c.id] ?? "border-border bg-surface"}`}>
            <p lang="ko" className="text-2xl font-bold">{c.ko}</p>
            <p className="italic opacity-80">{c.romanization}</p>
            <p className="mt-1 text-lg font-semibold">{c.en}</p>
            <p className="mt-2 text-lg">{c.meaning}</p>
            <dl className="mt-2 space-y-1 text-lg">
              <div><dt className="inline font-semibold">🔊 {s.sound}: </dt><dd className="inline">{c.sound}</dd></div>
              <div><dt className="inline font-semibold">{s.canTurnOff} </dt><dd className="inline">{c.canTurnOff ? s.yes : s.no}</dd></div>
            </dl>
          </div>
        ))}
      </section>

      <Card title={s.screenTitle} icon="📱">
        <p className="text-lg">{s.screenBody}</p>
        <h3 className="mt-3 font-semibold">{s.englishTitle}</h3>
        <p className="text-lg">{s.englishBody}</p>
        <h3 className="mt-3 font-semibold">{s.earthquakeTitle}</h3>
        <p className="text-lg">{s.earthquakeBody}</p>
      </Card>

      <Card title={s.enableTitle} icon="✅">
        <h3 className="font-semibold">{s.iphoneTitle}</h3>
        <ol className="mt-1 list-decimal space-y-1 pl-6 text-lg">
          {s.iphoneSteps.map((step) => <li key={step}>{step}</li>)}
        </ol>
        <h3 className="mt-3 font-semibold">{s.androidTitle}</h3>
        <ol className="mt-1 list-decimal space-y-1 pl-6 text-lg">
          {s.androidSteps.map((step) => <li key={step}>{step}</li>)}
        </ol>
        <p className="mt-2 text-muted">{s.otherAndroid}</p>
        <h3 className="mt-3 font-semibold">{s.appTitle}</h3>
        <p className="text-lg">{s.appBody}</p>
      </Card>

      <HelpLines ids={["emergency", "police", "travelHotline", "immigration", "kdca"]} title={s.helpTitle} />

      <footer className="space-y-1 text-sm text-muted">
        <p className="font-semibold text-foreground">{s.lastChecked}: {ALERT_RULES.last_checked}</p>
        <p className="font-semibold">{s.sourcesTitle}:</p>
        <ul className="list-disc space-y-1 pl-5">
          {SOURCES.map((src) => (
            <li key={src.url}>
              <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">
                {src.label}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </LocalScreen>
  );
}
