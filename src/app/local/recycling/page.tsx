import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { LocalScreen } from "@/components/local/LocalScreen";
import { RecyclingBanner } from "@/components/local/RecyclingBanner";
import { ListGroup, ListRow } from "@/components/ui/List";
import { listRecyclingGuides } from "@/lib/server/recycling";
import { getT } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t.local.recycling.title };
}

export default async function RecyclingIndexPage() {
  const t = await getT();
  const s = t.local.recycling;
  const districts = listRecyclingGuides();
  return (
    <LocalScreen title={s.title} notice={<RecyclingBanner />}>
      <h2 className="px-1 text-xl font-extrabold">{s.chooseDistrict}</h2>
      <ListGroup>
        {districts.map((d) => (
          <ListRow
            key={d.id}
            href={`/local/recycling/${d.id}`}
            icon={MapPin}
            tone="amber"
            title={d.name}
            subtitle={<span lang="ko">{d.city} · {d.nameKo}</span>}
          />
        ))}
      </ListGroup>
      <p className="px-1 text-muted-foreground">{s.onlyThese}</p>
    </LocalScreen>
  );
}
