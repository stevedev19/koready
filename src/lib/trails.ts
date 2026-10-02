import trailData from "../../data/trails.json";

export type TrailTag = "kpop" | "kdrama" | "film" | "food" | "nature" | "culture";

export type TrailStop = {
  id: string;
  name: string;
  nameKo: string;
  kind: string;
  relatedWork: { title: string; type: string } | null;
  why: string;
  hours: string | null;
  cost: string | null;
  mapQuery: string;
  mapLinks: { naver: string; kakao: string; google: string };
  source: string;
  last_checked: string;
  needs_review: boolean;
  reviewNote?: string;
};

export type Trail = {
  id: string;
  title: string;
  region: string;
  regionKo: string;
  tags: TrailTag[];
  estimatedTime: string;
  difficulty: string;
  bestSeason: string;
  gettingThere: string[];
  respectNote: string;
  sources: string[];
  stops: TrailStop[];
};

export const TRAILS = trailData.trails as Trail[];

export function getTrail(id: string): Trail | undefined {
  return TRAILS.find((trail) => trail.id === id);
}
