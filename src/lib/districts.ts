// To add a district, append an entry. `id` must be unique and URL-safe.
// Coordinates are roughly the district office; good enough for weather/air.

export type District = {
  id: string;
  name: { en: string; ko: string };
  lat: number;
  lon: number;
};

export const DISTRICTS: District[] = [
  { id: "gangnam", name: { en: "Gangnam, Seoul", ko: "서울 강남구" }, lat: 37.5172, lon: 127.0473 },
  { id: "mapo", name: { en: "Mapo, Seoul", ko: "서울 마포구" }, lat: 37.5663, lon: 126.9019 },
  { id: "yongsan", name: { en: "Yongsan, Seoul", ko: "서울 용산구" }, lat: 37.5326, lon: 126.9905 },
  { id: "jongno", name: { en: "Jongno, Seoul", ko: "서울 종로구" }, lat: 37.5735, lon: 126.9790 },
  { id: "seodaemun", name: { en: "Seodaemun, Seoul", ko: "서울 서대문구" }, lat: 37.5791, lon: 126.9368 },
  { id: "songpa", name: { en: "Songpa, Seoul", ko: "서울 송파구" }, lat: 37.5145, lon: 127.1059 },
  { id: "haeundae", name: { en: "Haeundae, Busan", ko: "부산 해운대구" }, lat: 35.1631, lon: 129.1635 },
  { id: "yeonsu", name: { en: "Yeonsu (Songdo), Incheon", ko: "인천 연수구" }, lat: 37.4100, lon: 126.6783 },
  { id: "yuseong", name: { en: "Yuseong, Daejeon", ko: "대전 유성구" }, lat: 36.3624, lon: 127.3563 },
];

export const DEFAULT_DISTRICT_ID = "gangnam";

export function getDistrict(id: string | null | undefined): District | undefined {
  return DISTRICTS.find((d) => d.id === id);
}
