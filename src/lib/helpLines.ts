import { t } from "@/lib/strings";

// Only numbers confirmed on an official Korean government source are listed.
// Re-check each source before changing a number.
export type HelpLineId = keyof typeof t.helpLines.lines;

export type HelpLine = {
  number: string;
  source: string;
  verifiedOn: string;
};

export const HELP_LINES: Record<HelpLineId, HelpLine> = {
  emergency: {
    number: "119",
    // 1339 was merged into 119 in 2013; 119 now gives 24h medical advice and
    // hospital/pharmacy guidance: mohw.go.kr board list_no=287774
    source: "https://www.mohw.go.kr/board.es?mid=a10503010100&bid=0027&act=view&list_no=287774",
    verifiedOn: "2026-10-02",
  },
  police: {
    number: "112",
    // English interpretation on 112: korea.net/NewsFocus/policies/view?articleId=248494
    source: "https://www.korea.kr/news/policyNewsView.do?newsId=148950963",
    verifiedOn: "2026-10-02",
  },
  mentalHealthCrisis: {
    number: "109",
    // 24h operation: korea.kr/news/policyNewsView.do?newsId=148954797
    source: "https://www.korea.kr/news/policyNewsView.do?newsId=148921874",
    verifiedOn: "2026-10-02",
  },
  scamReport: {
    number: "1394",
    source: "https://www.counterscam112.go.kr",
    verifiedOn: "2026-10-02",
  },
  fss: {
    number: "1332",
    source: "https://fine.fss.or.kr/fine/main/contents.do?menuNo=900206",
    verifiedOn: "2026-10-02",
  },
  kisa: {
    number: "118",
    source: "https://spam.kisa.or.kr",
    verifiedOn: "2026-10-02",
  },
  immigration: {
    number: "1345",
    source: "https://mojhome.moj.go.kr/bbs/moj/184/595420/artclView.do",
    verifiedOn: "2026-10-02",
  },
};

/** Official site to find ERs and pharmacies open now (Korean only). Named by mohw.go.kr list_no=287774. */
export const EGEN_URL = "https://www.e-gen.or.kr/";
