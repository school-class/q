import { subjects } from "@/lib/data";
import { notFound } from "next/navigation";
import UnitPageClient from "./UnitPageClient";

export async function generateStaticParams() {
  const params: { subject: string; unitId: string }[] = [];

  Object.values(subjects).forEach((subject) => {
    subject.units.forEach((unit) => {
      params.push({
        subject: subject.id,
        unitId: unit.id,
      });
    });
  });

  return params;
}

export default function UnitPage({ params }: { params: { subject: string; unitId: string } }) {
  const subject = subjects[params.subject];
  if (!subject) notFound();

  const unit = subject.units.find((u) => u.id === params.unitId);
  if (!unit) notFound();

  return <UnitPageClient subject={subject} unit={unit} />;
}
