import { subjects } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Book } from "lucide-react";

export async function generateStaticParams() {
  return Object.keys(subjects).map((subject) => ({
    subject: subject,
  }));
}

export default function SubjectPage({ params }: { params: { subject: string } }) {
  const subject = subjects[params.subject];

  if (!subject) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <nav className="flex mb-6 text-sm text-gray-500" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-blue-600">ホーム</Link></li>
          <li className="flex items-center gap-2">
            <ChevronRight size={14} />
            <span className="font-semibold text-gray-800">{subject.name}</span>
          </li>
        </ol>
      </nav>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-3xl mb-12">
        <h1 className="text-4xl font-bold mb-4">{subject.name}の学習</h1>
        <p className="text-blue-100 text-lg">{subject.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {subject.units.map((unit) => (
          <Link
            key={unit.id}
            href={`/subjects/${subject.id}/${unit.id}`}
            className="flex items-center justify-between p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all shadow-sm group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Book size={20} />
              </div>
              <span className="text-lg font-medium text-gray-800">{unit.title}</span>
            </div>
            <ChevronRight className="text-gray-400 group-hover:text-blue-600" />
          </Link>
        ))}
      </div>
    </div>
  );
}
