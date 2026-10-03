import { Hospital, type LucideIcon } from "lucide-react";
import { CLINIC_TYPES, type ClinicTypeId } from "@/lib/clinics";
import { Card } from "../Card";
import { FindNearby } from "./FindNearby";

function ClinicTypeInfo({ id, small = false }: { id: ClinicTypeId; small?: boolean }) {
  const clinic = CLINIC_TYPES[id];
  return (
    <div>
      <p lang="ko" className={`${small ? "text-xl" : "text-[2rem] leading-tight"} font-extrabold tracking-tight`}>
        {clinic.ko}
      </p>
      <p className="text-muted-foreground">
        <span className="italic">{clinic.romanization}</span> · {clinic.en}
      </p>
      <p className="mt-1.5">{clinic.handles}</p>
    </div>
  );
}

type ClinicTypeCardProps = {
  id: ClinicTypeId;
  alsoId?: ClinicTypeId;
  title: string;
  /** Label above the second clinic ("Or:"); needed with alsoId. */
  alsoLabel?: string;
  icon?: LucideIcon;
};

/** Clinic type (Korean name, romanization, what it handles) plus map search. */
export function ClinicTypeCard({ id, alsoId, title, alsoLabel, icon = Hospital }: ClinicTypeCardProps) {
  const clinic = CLINIC_TYPES[id];
  return (
    <Card title={title} icon={icon}>
      <ClinicTypeInfo id={id} />
      {alsoId && (
        <div className="mt-3 rounded-xl bg-surface-2 px-3.5 py-3">
          <p className="text-sm font-bold text-muted-foreground">{alsoLabel}</p>
          <ClinicTypeInfo id={alsoId} small />
        </div>
      )}
      <div className="mt-4">
        {/* key resets the location step when the clinic type changes */}
        <FindNearby key={id} query={clinic.search} label={clinic.ko} />
      </div>
    </Card>
  );
}
