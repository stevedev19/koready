"use client";

import { useApi } from "@/hooks/useApi";
import { t } from "@/lib/strings";
import type { ExchangeData } from "@/lib/types";
import { Card, CardError, CardLoading } from "./Card";

const FLAGS: Record<string, string> = { USD: "🇺🇸", EUR: "🇪🇺", JPY: "🇯🇵", CNY: "🇨🇳" };
const krw = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function ExchangeCard() {
  const result = useApi<ExchangeData>("/api/exchange");

  return (
    <Card
      title={t.exchange.title}
      icon="💱"
      footer={
        <>
          <p>{t.exchange.note}</p>
          <p>
            {result.status === "success" && `${t.exchange.asOf} ${result.data.date} · `}
            <a href="https://frankfurter.dev/" className="underline" target="_blank" rel="noopener noreferrer">{t.exchange.attribution}</a>
          </p>
        </>
      }
    >
      {result.status === "loading" && <CardLoading />}
      {result.status === "error" && <CardError onRetry={result.retry} />}
      {result.status === "success" && (
        <ul className="divide-y divide-border">
          {result.data.rates.map((r) => (
            <li key={r.currency} className="flex items-center justify-between py-2">
              <span className="flex items-center gap-2">
                <span aria-hidden="true">{FLAGS[r.currency]}</span>
                <span className="font-medium">
                  {r.unit} {r.currency}
                </span>
              </span>
              <span className="text-lg font-semibold tabular-nums">₩{krw.format(r.krw)}</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
