import { t } from "@/lib/strings";

// Only numbers confirmed on an official Korean government source are listed.
// Re-check each source before changing a number.
export type HelpLine = {
  id: keyof typeof t.helpLines.lines;
  number: string;
  source: string;
  verifiedOn: string;
};

export const HELP_LINES: HelpLine[] = [
  {
    id: "police",
    number: "112",
    // English interpretation on 112: korea.net/NewsFocus/policies/view?articleId=248494
    source: "https://www.korea.kr/news/policyNewsView.do?newsId=148950963",
    verifiedOn: "2026-10-02",
  },
  {
    id: "scamReport",
    number: "1394",
    source: "https://www.counterscam112.go.kr",
    verifiedOn: "2026-10-02",
  },
  {
    id: "fss",
    number: "1332",
    source: "https://fine.fss.or.kr/fine/main/contents.do?menuNo=900206",
    verifiedOn: "2026-10-02",
  },
  {
    id: "kisa",
    number: "118",
    source: "https://spam.kisa.or.kr",
    verifiedOn: "2026-10-02",
  },
  {
    id: "immigration",
    number: "1345",
    source: "https://mojhome.moj.go.kr/bbs/moj/184/595420/artclView.do",
    verifiedOn: "2026-10-02",
  },
];
