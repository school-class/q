"use client";

import { Subject, Unit } from "@/lib/data";
import Link from "next/link";
import { ChevronRight, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function UnitPageClient({ subject, unit }: { subject: Subject; unit: Unit }) {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      <nav className="flex mb-6 text-sm text-gray-500" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-blue-600">ホーム</Link></li>
          <li className="flex items-center gap-2">
            <ChevronRight size={14} />
            <Link href={`/subjects/${subject.id}`} className="hover:text-blue-600">{subject.name}</Link>
          </li>
          <li className="flex items-center gap-2">
            <ChevronRight size={14} />
            <span className="font-semibold text-gray-800">{unit.title}</span>
          </li>
        </ol>
      </nav>

      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{unit.title} の練習問題</h1>
        <p className="text-gray-600">基礎知識の確認から応用問題まで、しっかりマスターしましょう。</p>
      </header>

      <div className="space-y-8">
        <section className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <CheckCircle2 className="text-green-500" /> 問題 1
          </h2>
          <div className="prose max-w-none text-gray-700 mb-6">
            <p>ここに問題文が表示されます。現在のバージョンでは、各単元の学習内容に合わせた問題を作成中です。</p>
            <div className="bg-gray-50 p-4 rounded-lg border border-dashed border-gray-300 italic">
              例: {unit.title} に関する基礎的な問い...
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setShowAnswer1(!showAnswer1)}
              className="w-fit bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {showAnswer1 ? "答えを隠す" : "答えを見る"}
            </button>
            {showAnswer1 && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                <p className="font-bold mb-1">解説:</p>
                <p>正解はここに表示されます。この問題の考え方は...</p>
              </div>
            )}
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <CheckCircle2 className="text-green-500" /> 問題 2
          </h2>
          <div className="prose max-w-none text-gray-700 mb-6">
            <p>ここに問題文が表示されます。図やグラフが必要な問題も今後追加される予定です。</p>
          </div>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setShowAnswer2(!showAnswer2)}
              className="w-fit bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {showAnswer2 ? "答えを隠す" : "答えを見る"}
            </button>
            {showAnswer2 && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                <p className="font-bold mb-1">解説:</p>
                <p>正解はここに表示されます。しっかりと復習しましょう。</p>
              </div>
            )}
          </div>
        </section>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 flex gap-4 items-start text-yellow-800">
          <AlertCircle className="shrink-0" />
          <div>
            <h4 className="font-bold mb-1">学習のポイント</h4>
            <p className="text-sm">
              {unit.title}は、テストでもよく出題される重要な単元です。
              まずは用語の意味や公式を正しく覚えることから始めましょう。
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between">
        <Link href={`/subjects/${subject.id}`} className="text-blue-600 font-semibold flex items-center gap-1 hover:underline">
          ← {subject.name}の一覧に戻る
        </Link>
      </div>
    </div>
  );
}
