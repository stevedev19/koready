import { CLINIC_TYPES, type ClinicTypeId } from "@/lib/clinics";
import { t } from "@/lib/strings";
import { Card } from "../Card";
import { FindNearby } from "./FindNearby";

function ClinicTypeInfo({ id, small = false }: { id: ClinicTypeId; small?: boolean }) {
  const clinic = CLINIC_TYPES[id];
  return (
    <div>
      <p lang="ko" className={`${small ? "text-xl" : "text-3xl"} font-bold`}>
        {clinic.ko}
      </p>
      <p className="text-muted italic">
        {clinic.romanization} · {clinic.en}
      </p>
      <p className="mt-1">{clinic.handles}</p>
    </div>
  );
}

type ClinicTypeCardProps = {
  id: ClinicTypeId;
  alsoId?: ClinicTypeId;
  title?: string;
  icon?: string;
};

/** Clinic type (Korean name, romanization, what it handles) plus map search links. */
export function ClinicTypeCard({ id, alsoId, title = t.local.doctor.clinicTitle, icon = "🏥" }: ClinicTypeCardProps) {
  const clinic = CLINIC_TYPES[id];
  return (
    <Card title={title} icon={icon}>
      <ClinicTypeInfo id={id} />
      {alsoId && (
        <div className="mt-3 border-l-4 border-border pl-3">
          <p className="text-sm font-semibold text-muted">{t.local.doctor.also}</p>
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
