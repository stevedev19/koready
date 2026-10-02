import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { ClinicTypeCard } from "@/components/local/ClinicTypeCard";
import { LocalScreen } from "@/components/local/LocalScreen";
import { EGEN_URL } from "@/lib/helpLines";
import { t } from "@/lib/strings";

const s = t.local.emergency;

export const metadata: Metadata = { title: s.title };

export default function EmergencyPage() {
  return (
    <LocalScreen title={s.title} icon="🚑">
      <section
        aria-labelledby="call-119"
        className="rounded-2xl border-4 border-red-700 bg-red-50 p-5 text-red-950 dark:border-red-500 dark:bg-red-950 dark:text-red-50"
      >
        <h2 id="call-119" className="text-3xl font-bold">{s.callTitle}</h2>
        <p className="mt-1 text-lg">{s.callBody}</p>
        <a
          href="tel:119"
          className="mt-4 flex min-h-16 items-center justify-center gap-3 rounded-xl bg-red-700 text-2xl font-bold text-white focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-red-700 dark:bg-red-600"
        >
          <span aria-hidden="true">📞</span> {s.callButton}
        </a>
        <p className="mt-4 font-semibold">{s.tellThem}</p>
        <ul className="mt-1 list-disc space-y-1 pl-5">
          {s.tellList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <Card title={s.notSureTitle} icon="☎️">
        <p>{s.notSureBody}</p>
        <a
          href={EGEN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex min-h-11 items-center font-semibold text-accent underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-accent"
        >
          {s.egenLink} ↗
        </a>
      </Card>

      <ClinicTypeCard id="eungeupsil" title={s.findEr} icon="🏥" />
    </LocalScreen>
  );
}
