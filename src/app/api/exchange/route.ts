import { cachedJson, errorJson, fetchJson, SIX_HOURS } from "@/lib/server/upstream";
import type { ExchangeCurrency, ExchangeData } from "@/lib/types";

type FrankfurterRate = { date: string; base: string; quote: string; rate: number };

// JPY is quoted per 100 yen, as Korean banks do.
const CURRENCIES: { currency: ExchangeCurrency; unit: number }[] = [
  { currency: "USD", unit: 1 },
  { currency: "EUR", unit: 1 },
  { currency: "JPY", unit: 100 },
  { currency: "CNY", unit: 1 },
];

export async function GET() {
  try {
    // One call per base currency keeps full precision (inverting KRW-based rates loses digits).
    const results = await Promise.all(
      CURRENCIES.map(({ currency }) =>
        fetchJson<FrankfurterRate[]>(
          `https://api.frankfurter.dev/v2/rates?base=${currency}&quotes=KRW`,
          SIX_HOURS,
        ),
      ),
    );

    const data: ExchangeData = {
      date: results[0][0].date,
      rates: CURRENCIES.map(({ currency, unit }, i) => {
        const rate = results[i][0]?.rate;
        if (typeof rate !== "number") throw new Error(`Missing ${currency} rate`);
        return { currency, unit, krw: Math.round(rate * unit * 100) / 100 };
      }),
    };
    return cachedJson(data, SIX_HOURS);
  } catch (err) {
    console.error("exchange route failed:", err instanceof Error ? err.message : err);
    return errorJson("Exchange rates are unavailable right now", 502);
  }
}
