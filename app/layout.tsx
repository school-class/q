import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { BookOpen, Home, Settings, Info, Menu } from "lucide-react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "学問の扉 | 中学校学習支援サイト",
  description: "中学生のための数学・理科・社会・英語の練習問題サイトです。",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3571574988222927"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-blue-600 text-white shadow-md">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold flex items-center gap-2">
                <BookOpen size={32} />
                <span>学問の扉</span>
              </Link>

              <div className="hidden md:flex gap-6 items-center">
                <Link href="/" className="hover:text-blue-200 flex items-center gap-1">
                  <Home size={18} /> ホーム
                </Link>
                <Link href="/subjects/math" className="hover:text-blue-200">数学</Link>
                <Link href="/subjects/science" className="hover:text-blue-200">理科</Link>
                <Link href="/subjects/social" className="hover:text-blue-200">社会</Link>
                <Link href="/subjects/english" className="hover:text-blue-200">英語</Link>
                <Link href="/about" className="hover:text-blue-200 flex items-center gap-1">
                  <Info size={18} /> このサイトについて
                </Link>
              </div>

              <div className="md:hidden">
                {/* Mobile menu could be implemented here */}
                <Menu size={24} />
              </div>
            </nav>
          </header>

          <main className="flex-grow container mx-auto px-4 py-8 bg-white">
            {children}
          </main>

          <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">学問の扉</h3>
                <p className="text-gray-400">中学生の自学自習をサポートする、完全無料の練習問題サイトです。</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">リンク</h3>
                <ul className="space-y-2">
                  <li><Link href="/how-to-use" className="hover:text-blue-400">使い方</Link></li>
                  <li><Link href="/privacy-policy" className="hover:text-blue-400">プライバシーポリシー</Link></li>
                  <li><Link href="/about" className="hover:text-blue-400">運営者情報</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">科目</h3>
                <div className="flex flex-wrap gap-2 text-sm">
                  <Link href="/subjects/math" className="px-2 py-1 bg-gray-700 rounded hover:bg-blue-600 transition">数学</Link>
                  <Link href="/subjects/science" className="px-2 py-1 bg-gray-700 rounded hover:bg-blue-600 transition">理科</Link>
                  <Link href="/subjects/social" className="px-2 py-1 bg-gray-700 rounded hover:bg-blue-600 transition">社会</Link>
                  <Link href="/subjects/english" className="px-2 py-1 bg-gray-700 rounded hover:bg-blue-600 transition">英語</Link>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
              &copy; {new Date().getFullYear()} 学問の扉. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
