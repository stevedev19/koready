import { t } from "@/lib/strings";
import { Banner } from "../ui/Notice";

export function RecyclingBanner() {
  return (
    <Banner tone="warning">
      <span className="font-semibold">{t.local.recycling.banner}</span>
    </Banner>
  );
}
