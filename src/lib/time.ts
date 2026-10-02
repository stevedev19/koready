const kstClock = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Seoul",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

/**
 * "HH:MM" in Korea time. Accepts Open-Meteo's local "2026-10-02T12:30" (already KST,
 * no zone) or a full ISO timestamp with a zone.
 */
export function kstHhmm(time: string): string {
  if (/T\d{2}:\d{2}$/.test(time)) return time.slice(-5);
  const date = new Date(time);
  return Number.isNaN(date.getTime()) ? "" : kstClock.format(date);
}
