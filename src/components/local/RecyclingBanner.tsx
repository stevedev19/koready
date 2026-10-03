import { getT } from "@/lib/i18n/server";
import { Banner } from "../ui/Notice";

export async function RecyclingBanner() {
  const t = await getT();
  return (
    <Banner tone="warning">
      <span className="font-semibold">{t.local.recycling.banner}</span>
    </Banner>
  );
}
