// Rule-based reader for Korean emergency alert texts (재난문자).
// Pure functions with no runtime imports, so scripts/check-alert-samples.ts can run it in Node.
// Privacy: the text is only read in memory here. Never log, store or send it.
// Safety: this never claims danger has passed. "lifted" is true only when the text itself says 해제.

export type AlertCategory = {
  id: string;
  ko: string;
  romanization: string;
  en: string;
  meaning: string;
  sound: string;
  canTurnOff: boolean;
  patterns: string[];
  source: string;
  needs_native_review: boolean;
};

export type AlertType = {
  id: string;
  en: string;
  ko: string;
  patterns: string[];
  enPatterns: string[];
  summary: string;
  actions: string[];
  actionsSource: string;
  needs_native_review: boolean;
};

export type GlossaryEntry = {
  ko: string;
  pattern?: string;
  romanization: string;
  en: string;
  kind: "level" | "instruction" | "place" | "hazard" | "general" | "time" | "sender" | "filler";
};

export type AlertRuleSet = {
  version: number;
  last_checked: string;
  categories: AlertCategory[];
  types: AlertType[];
  lifted: { patterns: string[]; enPatterns: string[] };
  drill: { patterns: string[]; enPatterns: string[] };
  glossary: GlossaryEntry[];
};

export type AlertSegment = {
  /** Exactly as it appears in the original text. */
  text: string;
  recognized: boolean;
  /** Glossary words found in this segment. */
  terms: GlossaryEntry[];
};

export type AlertReading = {
  /** The pasted text, unmodified. */
  original: string;
  category: AlertCategory | null;
  sender: string | null;
  /** Most urgent first. */
  types: AlertType[];
  level: "warning" | "advisory" | null;
  lifted: boolean;
  drill: boolean;
  /** As written in the alert (Korean), never translated or guessed. */
  areas: string[];
  times: string[];
  glossary: GlossaryEntry[];
  instructions: GlossaryEntry[];
  segments: AlertSegment[];
  fullyUnderstood: boolean;
};

type Matcher = { ko: RegExp[]; en: RegExp[] };

export type CompiledAlertRules = {
  rules: AlertRuleSet;
  categories: { category: AlertCategory; m: Matcher }[];
  types: { type: AlertType; m: Matcher }[];
  lifted: Matcher;
  drill: Matcher;
  glossary: { entry: GlossaryEntry; re: RegExp }[];
};

const ko = (patterns: string[] = []) => patterns.map((p) => new RegExp(p, "u"));
const en = (patterns: string[] = []) => patterns.map((p) => new RegExp(p, "iu"));

export function compileAlertRules(rules: AlertRuleSet): CompiledAlertRules {
  return {
    rules,
    categories: rules.categories.map((category) => ({ category, m: { ko: ko(category.patterns), en: [] } })),
    types: rules.types.map((type) => ({ type, m: { ko: ko(type.patterns), en: en(type.enPatterns) } })),
    lifted: { ko: ko(rules.lifted.patterns), en: en(rules.lifted.enPatterns) },
    drill: { ko: ko(rules.drill.patterns), en: en(rules.drill.enPatterns) },
    glossary: rules.glossary.map((entry) => ({
      entry,
      re: new RegExp(entry.pattern ?? entry.ko.replace(/\s+/g, ""), "u"),
    })),
  };
}

const ZERO_WIDTH = /[​-‍⁠﻿]/g;
const unspace = (s: string) => s.normalize("NFKC").replace(ZERO_WIDTH, "").replace(/\s+/g, "");
const matches = (m: Matcher, spaced: string, unspaced: string) =>
  m.ko.some((re) => re.test(unspaced)) || m.en.some((re) => re.test(spaced));

const PROVINCES =
  "서울|부산|대구|인천|광주|대전|울산|세종|경기|강원|충북|충남|전북|전남|경북|경남|제주|충청북도|충청남도|전라북도|전라남도|경상북도|경상남도";
const AREA_PATTERNS = [
  // 서울 강남구, 경기 수원시 팔달구, 강원특별자치도 강릉시 ...
  new RegExp(
    `(?:${PROVINCES})(?:특별시|광역시|특별자치시|특별자치도|도)?(?=\\s|,|$|에|의)(?:\\s+[가-힣]{1,5}(?:시|군|구)(?![가-힣]))*(?:\\s+[가-힣]{1,6}(?:읍|면|동)(?![가-힣]))?`,
    "gu",
  ),
  // 강남구 역삼동, 종로구 세종대로 ... (district + neighborhood or road)
  /[가-힣]{1,5}(?:시|군|구)\s+[가-힣]{1,8}(?:읍|면|동|로|길)(?:\s*\d+(?:-\d+)?)?(?![가-힣])/gu,
  // 성산면 어흘리 (township + village). Skips verb endings like 하시면, 되면.
  /(?<![가-힣])[가-힣]{1,4}(?<!시|으|다|라|하|되|이|려|않|없|있)(?:읍|면)\s+[가-힣]{1,4}리(?![가-힣])/gu,
];
const TIME_PATTERNS = [
  /(?:(?:오늘|금일|내일|명일)\s*)?(?:(?:오전|오후)\s*)?\d{1,2}(?::\d{2}|시(?!간)(?:\s*\d{1,2}분)?)(?:\s*(?:부터|까지|현재|경(?![가-힣])))?/gu,
  /\d{1,2}\.\s?\d{1,2}\.?\s?\([월화수목금토일]\)/gu,
  /\d{1,2}월\s?\d{1,2}일/gu,
];
const LINK = /https?:\/\/\S+|\b[a-z0-9-]+\.(?:kr|com|net|me|ly|go\.kr)\/\S*/iu;

function findAll(text: string, patterns: RegExp[]): string[] {
  const found: string[] = [];
  for (const re of patterns) {
    for (const m of text.matchAll(re)) {
      const value = m[0].trim();
      if (value && !found.some((f) => f.includes(value))) found.push(value);
    }
  }
  // Drop entries contained in longer ones found later.
  return found.filter((f, i) => !found.some((g, j) => j !== i && g.length > f.length && g.includes(f)));
}

/** Leading [..] labels: the sender (e.g. [강남구청]) and English labels (e.g. [Heavy Rain]). */
function splitLabels(text: string): { labels: string[]; body: string } {
  const labels: string[] = [];
  let body = text.trimStart();
  for (let m = body.match(/^\[([^\]]{1,40})\]\s*/u); m; m = body.match(/^\[([^\]]{1,40})\]\s*/u)) {
    labels.push(m[1]);
    body = body.slice(m[0].length);
  }
  return { labels, body };
}

const NOT_SENDER = /발신|재난문자|안전안내|긴급재난|위급재난/u;

function splitSegments(body: string): string[] {
  return body
    .split(/[.!?。]+(?=\s|$)|\n+|,\s+/u)
    .map((s) => s.trim())
    .filter(Boolean);
}

export function readAlert(original: string, compiled: CompiledAlertRules): AlertReading {
  const spaced = original.normalize("NFKC").replace(ZERO_WIDTH, "");
  const unspaced = unspace(original);

  const category = compiled.categories.find(({ m }) => matches(m, spaced, unspaced))?.category ?? null;
  const types = compiled.types.filter(({ m }) => matches(m, spaced, unspaced)).map(({ type }) => type);
  const lifted = matches(compiled.lifted, spaced, unspaced);
  const drill = matches(compiled.drill, spaced, unspaced);

  const glossary = compiled.glossary.filter(({ re }) => re.test(unspaced)).map(({ entry }) => entry);
  const instructions = glossary.filter((g) => g.kind === "instruction");
  const hasWarning = /경보(?!해제)/u.test(unspaced.replace(/공습경보|경계경보/gu, ""));
  const level = hasWarning ? "warning" : /주의보/u.test(unspaced) ? "advisory" : null;

  const { labels, body } = splitLabels(spaced);
  const sender = labels.find((l) => /[가-힣]/u.test(l) && !NOT_SENDER.test(l)) ?? null;

  const areas = findAll(body, AREA_PATTERNS);
  const times = findAll(body, TIME_PATTERNS);

  const segments: AlertSegment[] = splitSegments(body).map((text) => {
    const seg = unspace(text);
    const terms = compiled.glossary.filter(({ re }) => re.test(seg)).map(({ entry }) => entry);
    const meaningful = terms.some((t) => t.kind !== "filler");
    const typeOrCategory =
      compiled.types.some(({ m }) => matches(m, text, seg)) || compiled.categories.some(({ m }) => matches(m, text, seg));
    // Things that need no translation: links, English-only text, numbers, or just an area/time.
    const leftover = [...areas, ...times].reduce((rest, piece) => rest.replace(piece, ""), text);
    const noKoreanLeft = !/[가-힣]/u.test(leftover);
    const recognized = meaningful || typeOrCategory || LINK.test(text) || noKoreanLeft;
    return { text, recognized, terms };
  });

  return {
    original,
    category,
    sender,
    types,
    level,
    lifted,
    drill,
    areas,
    times,
    glossary,
    instructions,
    segments,
    fullyUnderstood: types.length > 0 && segments.every((s) => s.recognized),
  };
}
