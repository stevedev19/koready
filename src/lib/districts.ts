// Places for the Home weather and air cards: one entry per city, spread across the
// country so the choices actually differ (coast vs inland, north vs south, Jeju).
// To add one, append an entry. `id` must be unique and URL-safe.
// Coordinates are roughly city hall; good enough for weather/air.

export type District = {
  id: string;
  name: { en: string; ko: string };
  lat: number;
  lon: number;
};

// Seoul first (most users), then A–Z so the list is easy to scan.
export const DISTRICTS: District[] = [
  { id: "seoul", name: { en: "Seoul", ko: "서울" }, lat: 37.5663, lon: 126.9779 },
  { id: "busan", name: { en: "Busan", ko: "부산" }, lat: 35.1798, lon: 129.075 },
  { id: "changwon", name: { en: "Changwon", ko: "창원" }, lat: 35.228, lon: 128.6811 },
  { id: "cheongju", name: { en: "Cheongju", ko: "청주" }, lat: 36.6424, lon: 127.489 },
  { id: "chuncheon", name: { en: "Chuncheon", ko: "춘천" }, lat: 37.8813, lon: 127.7298 },
  { id: "daegu", name: { en: "Daegu", ko: "대구" }, lat: 35.8714, lon: 128.6014 },
  { id: "daejeon", name: { en: "Daejeon", ko: "대전" }, lat: 36.3504, lon: 127.3845 },
  { id: "gangneung", name: { en: "Gangneung", ko: "강릉" }, lat: 37.7519, lon: 128.8761 },
  { id: "gwangju", name: { en: "Gwangju", ko: "광주" }, lat: 35.1601, lon: 126.8514 },
  { id: "incheon", name: { en: "Incheon", ko: "인천" }, lat: 37.4563, lon: 126.7052 },
  { id: "jeju", name: { en: "Jeju", ko: "제주" }, lat: 33.4996, lon: 126.5312 },
  { id: "jeonju", name: { en: "Jeonju", ko: "전주" }, lat: 35.8242, lon: 127.148 },
  { id: "pyeongtaek", name: { en: "Pyeongtaek", ko: "평택" }, lat: 36.9921, lon: 127.1129 },
  { id: "suwon", name: { en: "Suwon", ko: "수원" }, lat: 37.2636, lon: 127.0286 },
  { id: "ulsan", name: { en: "Ulsan", ko: "울산" }, lat: 35.5384, lon: 129.3114 },
];

export const DEFAULT_DISTRICT_ID = "seoul";

// Ids from the old per-district list, so saved choices land on the right city.
const LEGACY_IDS: Record<string, string> = {
  gangnam: "seoul",
  mapo: "seoul",
  yongsan: "seoul",
  jongno: "seoul",
  seodaemun: "seoul",
  songpa: "seoul",
  haeundae: "busan",
  yeonsu: "incheon",
  yuseong: "daejeon",
};

export function getDistrict(id: string | null | undefined): District | undefined {
  const key = id && Object.hasOwn(LEGACY_IDS, id) ? LEGACY_IDS[id] : id;
  return DISTRICTS.find((d) => d.id === key);
}
