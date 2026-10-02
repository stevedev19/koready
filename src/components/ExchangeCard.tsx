"use client";

import { Banknote } from "lucide-react";
import { useApi } from "@/hooks/useApi";
import { t } from "@/lib/strings";
import type { ExchangeData } from "@/lib/types";
import { Card, CardError, CardLoading } from "./Card";

const krw = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function ExchangeCard() {
  const result = useApi<ExchangeData>("/api/exchange");

  return (
    <Card
      title={t.exchange.title}
      icon={Banknote}
      footer={
        <>
          <p>{t.exchange.note}</p>
          <p>
            {result.status === "success" && `${t.exchange.asOf} ${result.data.date} · `}
            <a href="https://frankfurter.dev/" className="inline-flex min-h-12 items-center underline" target="_blank" rel="noopener noreferrer">{t.exchange.attribution}</a>
          </p>
        </>
      }
    >
      {result.status === "loading" && <CardLoading />}
      {result.status === "error" && <CardError onRetry={result.retry} />}
      {result.status === "success" && (
        <ul className="divide-y divide-border">
          {result.data.rates.map((r) => (
            <li key={r.currency} className="flex items-center justify-between gap-3 py-2.5">
              <span className="font-bold">
                {r.unit} {r.currency}
              </span>
              <span className="text-lg font-extrabold tabular-nums">₩{krw.format(r.krw)}</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
