import { Hospital, Phone } from "lucide-react";
import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { ClinicTypeCard } from "@/components/local/ClinicTypeCard";
import { LocalScreen } from "@/components/local/LocalScreen";
import { buttonClass } from "@/components/ui/button";
import { EGEN_URL } from "@/lib/helpLines";
import { t } from "@/lib/strings";

const s = t.local.emergency;

export const metadata: Metadata = { title: s.title };

export default function EmergencyPage() {
  return (
    <LocalScreen title={s.title}>
      {/* Emergency mode: plain surface, large text, one big action. No animation. */}
      <section aria-labelledby="call-119" className="rounded-card border-2 border-emergency bg-card p-5">
        <h2 id="call-119" className="text-[2rem] leading-tight font-extrabold">{s.callTitle}</h2>
        <p className="mt-1 text-xl">{s.callBody}</p>
        <p className="mt-5 text-lg font-extrabold">{s.tellThem}</p>
        <ol className="mt-1 list-decimal space-y-1 pl-6 text-xl">
          {s.tellList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <a href="tel:119" className={buttonClass("emergency", "xl", "mt-6 w-full")}>
          <Phone aria-hidden="true" className="size-8" />
          {s.callButton}
        </a>
      </section>

      <Card title={s.notSureTitle}>
        <p>{s.notSureBody}</p>
        <a
          href={EGEN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex min-h-12 items-center font-bold text-primary underline underline-offset-2"
        >
          {s.egenLink} ↗
        </a>
      </Card>

      <ClinicTypeCard id="eungeupsil" title={s.findEr} icon={Hospital} />
    </LocalScreen>
  );
}
