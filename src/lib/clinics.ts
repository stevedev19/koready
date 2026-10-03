import clinicData from "../../data/clinics.json";
import type { Audience } from "./audience";

export type ClinicType = {
  ko: string;
  romanization: string;
  en: string;
  audience: Audience;
  handles: string;
  search: string;
  needs_native_review: boolean;
};

export type ClinicTypeId = keyof typeof clinicData.clinicTypes;

export type ProblemCategory = {
  id: string;
  label: string;
  icon: string;
  clinicType: ClinicTypeId;
  alsoClinicType?: ClinicTypeId;
  needs_native_review: boolean;
};

export type Phrase = {
  id: string;
  ko: string;
  romanization: string;
  en: string;
  audience: Audience;
  needs_native_review: boolean;
};

export type PhraseSet = keyof typeof clinicData.phrases;

export const CLINIC_TYPES = clinicData.clinicTypes as Record<ClinicTypeId, ClinicType>;
export const CATEGORIES = clinicData.categories as ProblemCategory[];
export const PHRASES = clinicData.phrases as Record<PhraseSet, Phrase[]>;
