import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalScreen } from "@/components/local/LocalScreen";
import { RecyclingBanner } from "@/components/local/RecyclingBanner";
import { RecyclingGuide } from "@/components/local/RecyclingGuide";
import { getRecyclingGuide, listRecyclingGuides } from "@/lib/server/recycling";
import { getT } from "@/lib/i18n/server";

// One static page per data/recycling-<id>.json file, built at build time.
export function generateStaticParams() {
  return listRecyclingGuides().map((d) => ({ district: d.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/local/recycling/[district]">): Promise<Metadata> {
  const t = await getT();
  const guide = getRecyclingGuide((await params).district);
  return { title: guide ? `${t.local.recycling.title}: ${guide.district.name}` : t.local.recycling.title };
}

export default async function RecyclingDistrictPage({ params }: PageProps<"/local/recycling/[district]">) {
  const t = await getT();
  const guide = getRecyclingGuide((await params).district);
  if (!guide) notFound();

  return (
    <LocalScreen
      title={`${guide.district.name} ${t.local.recycling.title.toLowerCase()}`}
      notice={<RecyclingBanner />}
      backHref="/local/recycling"
    >
      <RecyclingGuide guide={guide} />
    </LocalScreen>
  );
}
