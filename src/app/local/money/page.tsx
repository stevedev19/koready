import type { Metadata } from "next";
import { CardError } from "@/components/Card";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ExchangeCard } from "@/components/ExchangeCard";
import { LocalScreen } from "@/components/local/LocalScreen";
import { Card } from "@/components/ui/card";
import { getT } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t.exchange.title };
}

/** Exchange rate, opened from the quick-actions button. */
export default async function MoneyPage() {
  const t = await getT();
  return (
    <LocalScreen title={t.exchange.title} notice={null}>
      <ErrorBoundary
        fallback={
          <Card>
            <CardError />
          </Card>
        }
      >
        <ExchangeCard />
      </ErrorBoundary>
    </LocalScreen>
  );
}
