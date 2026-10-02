import type { Metadata } from "next";
import Link from "next/link";
import { LocalScreen } from "@/components/local/LocalScreen";
import { RecyclingBanner } from "@/components/local/RecyclingBanner";
import { listRecyclingGuides } from "@/lib/server/recycling";
import { t } from "@/lib/strings";

const s = t.local.recycling;

export const metadata: Metadata = { title: s.title };

export default function RecyclingIndexPage() {
  const districts = listRecyclingGuides();
  return (
    <LocalScreen title={s.title} icon="♻️" notice={<RecyclingBanner />}>
      <h2 className="text-xl font-bold">{s.chooseDistrict}</h2>
      <ul className="grid gap-3">
        {districts.map((d) => (
          <li key={d.id}>
            <Link
              href={`/local/recycling/${d.id}`}
              className="flex min-h-16 items-center gap-4 rounded-2xl border border-border bg-surface px-5 py-3 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span className="flex-1">
                <span className="block text-xl font-semibold">{d.name}</span>
                <span lang="ko" className="block text-muted">{d.city} · {d.nameKo}</span>
              </span>
              <span aria-hidden="true" className="text-2xl text-muted">›</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-muted">{s.onlyThese}</p>
    </LocalScreen>
  );
}
