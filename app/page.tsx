import Link from "next/link";
import { subjects } from "@/lib/data";
import { Book, Microscope, Globe, Languages, ArrowRight } from "lucide-react";

const iconMap = {
  math: <Book className="text-blue-500" size={48} />,
  science: <Microscope className="text-green-500" size={48} />,
  social: <Globe className="text-red-500" size={48} />,
  english: <Languages className="text-purple-500" size={48} />,
};

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-blue-50 rounded-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
          学問の扉へようこそ
        </h1>
        <p className="text-xl text-blue-700 max-w-2xl mx-auto mb-8">
          中学生の皆さんの「わからない」を「わかった！」に変える、
          基礎からしっかり学べる練習問題サイトです。
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/how-to-use"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition"
          >
            使い方を見る
          </Link>
          <Link
            href="/about"
            className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition"
          >
            サイトについて
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">科目を選んで学習を始める</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.values(subjects).map((subject) => (
            <Link
              key={subject.id}
              href={`/subjects/${subject.id}`}
              className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-300 transition-all flex flex-col items-center text-center"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform">
                {iconMap[subject.id as keyof typeof iconMap]}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{subject.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{subject.description}</p>
              <div className="mt-auto text-blue-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                単元一覧を見る <ArrowRight size={18} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">新着のお知らせ</h2>
        <ul className="space-y-4">
          <li className="flex gap-4 items-start">
            <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">2023.10.27</span>
            <p className="text-gray-700">サイトを公開しました！全単元の練習問題を順次追加中です。</p>
          </li>
          <li className="flex gap-4 items-start">
            <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">2023.10.27</span>
            <p className="text-gray-700">数学「正負の数」の練習問題を更新しました。</p>
          </li>
        </ul>
      </section>
    </div>
  );
}
