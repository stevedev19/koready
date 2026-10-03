// Who the app is set up for: chosen once on Home, changeable in Settings.
// Content items carry an `audience` tag; "all" fits everyone.
export type Audience = "all" | "visitor" | "resident";

/**
 * Order items so the ones tagged for this audience come first.
 * Stable: otherwise keeps data order. Never removes anything.
 */
export function byAudience<T extends { audience?: Audience }>(items: readonly T[], audience: Audience): T[] {
  if (audience === "all") return [...items];
  const rank = (item: T) => ((item.audience ?? "all") === audience ? 0 : (item.audience ?? "all") === "all" ? 1 : 2);
  return items
    .map((item, i) => [item, i] as const)
    .sort(([a, i], [b, j]) => rank(a) - rank(b) || i - j)
    .map(([item]) => item);
}
