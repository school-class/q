const fs = require('fs');
const path = require('path');
const subjects = require('./data.js');

const ADS_SCRIPT = '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3571574988222927" crossorigin="anonymous"></script>';
const SITE_TITLE = 'まなびドリル | 中学生の無料練習問題';
const FA_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css';

function getLayout(content, title = SITE_TITLE, depth = 0) {
  const rootPrefix = '../'.repeat(depth) || './';
  return `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="icon" href="${rootPrefix}favicon.ico">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="${FA_CDN}">
    ${ADS_SCRIPT}
    <style>
        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700&display=swap');
        body { font-family: 'M PLUS Rounded 1c', sans-serif; }
        @media print {
            .no-print { display: none !important; }
            .print-only { display: block !important; }
            body { background: white; color: black; }
            main { padding: 0 !important; max-width: none !important; }
            .unit-card { border: 1px solid #000 !important; break-inside: avoid; margin-bottom: 1rem; border-radius: 0.5rem !important; }
            .print-footer { position: fixed; bottom: 0; right: 0; font-size: 10px; color: #94a3b8; padding: 10px; }
            .print-header { display: flex !important; justify-content: space-between; align-items: flex-end; margin-bottom: 2rem; border-bottom: 2px solid #000; padding-bottom: 1rem; }
            .print-title { font-size: 24px; font-weight: bold; }
            .student-info { display: flex !important; gap: 2rem; }
            .info-box { border-bottom: 1px solid #000; min-width: 150px; padding-bottom: 2px; font-size: 14px; }
            .ans-section { margin-top: 3rem; border-top: 2px dashed #ccc; padding-top: 2rem; break-before: page; }
        }
        .print-only { display: none; }
    </style>
</head>
<body class="bg-slate-50 text-slate-800">
    <div class="min-h-screen flex flex-col">
        <header class="bg-white border-b border-slate-200 sticky top-0 z-50 no-print">
            <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="${rootPrefix}index.html" class="text-2xl font-bold flex items-center gap-2 text-sky-600">
                    <i class="fa-solid fa-graduation-cap"></i>
                    <span>まなびドリル</span>
                </a>

                <div class="hidden md:flex gap-8 items-center text-slate-600 font-bold">
                    <a href="${rootPrefix}index.html" class="hover:text-sky-500 flex items-center gap-1 transition">
                        <i class="fa-solid fa-house"></i>
                    </a>
                    <a href="${rootPrefix}subjects/math/index.html" class="hover:text-sky-500 transition">数学</a>
                    <a href="${rootPrefix}subjects/science/index.html" class="hover:text-sky-500 transition">理科</a>
                    <a href="${rootPrefix}subjects/social/index.html" class="hover:text-sky-500 transition">社会</a>
                    <a href="${rootPrefix}subjects/english/index.html" class="hover:text-sky-500 transition">英語</a>
                    <a href="${rootPrefix}about.html" class="hover:text-sky-500 transition flex items-center gap-1">
                        <i class="fa-solid fa-circle-info"></i>
                    </a>
                </div>

                <div class="md:hidden">
                    <button id="menu-btn" class="text-slate-600 focus:outline-none">
                        <i class="fa-solid fa-bars text-2xl"></i>
                    </button>
                </div>
            </nav>
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-4 font-bold text-slate-600">
                <a href="${rootPrefix}index.html" class="block hover:text-sky-500">ホーム</a>
                <a href="${rootPrefix}subjects/math/index.html" class="block hover:text-sky-500">数学</a>
                <a href="${rootPrefix}subjects/science/index.html" class="block hover:text-sky-500">理科</a>
                <a href="${rootPrefix}subjects/social/index.html" class="block hover:text-sky-500">社会</a>
                <a href="${rootPrefix}subjects/english/index.html" class="block hover:text-sky-500">英語</a>
                <a href="${rootPrefix}about.html" class="block hover:text-sky-500">このサイトについて</a>
            </div>
        </header>

        <main class="flex-grow container mx-auto px-4 py-8 max-w-5xl">
            ${content}
        </main>

        <footer class="bg-slate-800 text-slate-300 py-12 mt-12 no-print">
            <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                    <h3 class="text-xl font-bold mb-4 text-white">まなびドリル</h3>
                    <p class="text-slate-400">中学生の自学自習をサポートする、完全無料の練習問題サイトです。</p>
                </div>
                <div>
                    <h3 class="text-lg font-bold mb-4 text-white">コンテンツ</h3>
                    <ul class="space-y-2">
                        <li><a href="${rootPrefix}how-to-use.html" class="hover:text-sky-400 transition">使い方</a></li>
                        <li><a href="${rootPrefix}privacy-policy.html" class="hover:text-sky-400 transition">プライバシーポリシー</a></li>
                        <li><a href="${rootPrefix}about.html" class="hover:text-sky-400 transition">運営者情報</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-bold mb-4 text-white">科目</h3>
                    <div class="flex flex-wrap gap-2 text-sm">
                        <a href="${rootPrefix}subjects/math/index.html" class="px-3 py-1 bg-slate-700 rounded hover:bg-sky-600 transition">数学</a>
                        <a href="${rootPrefix}subjects/science/index.html" class="px-3 py-1 bg-slate-700 rounded hover:bg-sky-600 transition">理科</a>
                        <a href="${rootPrefix}subjects/social/index.html" class="px-3 py-1 bg-slate-700 rounded hover:bg-sky-600 transition">社会</a>
                        <a href="${rootPrefix}subjects/english/index.html" class="px-3 py-1 bg-slate-700 rounded hover:bg-sky-600 transition">英語</a>
                    </div>
                </div>
            </div>
            <div class="container mx-auto px-4 mt-8 pt-8 border-t border-slate-700 text-center text-slate-500 text-sm">
                &copy; ${new Date().getFullYear()} まなびドリル. All rights reserved.
            </div>
        </footer>
    </div>
    <script>
        document.getElementById('menu-btn')?.addEventListener('click', () => {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });
    </script>
</body>
</html>`;
}

function generateIndex() {
  const content = `
    <div class="space-y-16">
      <section class="text-center py-20 bg-gradient-to-br from-sky-50 to-indigo-50 rounded-[2rem] border border-sky-100 shadow-sm relative overflow-hidden">
        <div class="relative z-10">
            <h1 class="text-4xl md:text-6xl font-extrabold text-slate-800 mb-6 tracking-tight">
                まなびドリル
            </h1>
            <p class="text-xl text-slate-600 max-w-2xl mx-auto mb-10 px-4">
                中学生のための無料学習支援サイト。<br class="hidden md:block">
                各教科の重要単元を、ドリル形式で繰り返し練習しましょう！
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4 px-4">
                <a href="how-to-use.html" class="bg-sky-500 text-white px-10 py-4 rounded-2xl font-bold hover:bg-sky-600 transition shadow-lg shadow-sky-200">
                    <i class="fa-solid fa-play mr-2"></i> 学習を始める
                </a>
                <a href="about.html" class="bg-white text-sky-600 border-2 border-sky-100 px-10 py-4 rounded-2xl font-bold hover:bg-sky-50 transition">
                    サイトについて
                </a>
            </div>
        </div>
      </section>

      <section>
        <h2 class="text-3xl font-bold text-slate-800 mb-10 text-center">科目を選んでスタート</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          ${Object.values(subjects).map(s => `
            <a href="subjects/${s.id}/index.html" class="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-50 transition-all flex flex-col items-center text-center relative">
              <div class="w-20 h-20 mb-6 rounded-2xl flex items-center justify-center text-4xl transition-transform group-hover:scale-110
                ${s.id === 'math' ? 'bg-blue-50 text-blue-500' : s.id === 'science' ? 'bg-green-50 text-green-500' : s.id === 'social' ? 'bg-orange-50 text-orange-500' : 'bg-purple-50 text-purple-500'}">
                <i class="fa-solid ${s.id === 'math' ? 'fa-calculator' : s.id === 'science' ? 'fa-flask' : s.id === 'social' ? 'fa-earth-americas' : 'fa-language'}"></i>
              </div>
              <h3 class="text-2xl font-bold text-slate-800 mb-3">${s.name}</h3>
              <p class="text-slate-500 text-sm mb-6 leading-relaxed">${s.description}</p>
              <div class="mt-auto text-sky-500 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                ドリル一覧 <i class="fa-solid fa-arrow-right"></i>
              </div>
            </a>
          `).join('')}
        </div>
      </section>

      <section class="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm">
        <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <i class="fa-solid fa-bullhorn text-sky-500"></i> お知らせ
        </h2>
        <ul class="space-y-6">
          <li class="flex flex-col sm:flex-row gap-4 sm:items-center p-4 hover:bg-slate-50 rounded-xl transition">
            <span class="bg-sky-100 text-sky-700 text-xs font-bold px-3 py-1 rounded-full w-fit">2023.10.27</span>
            <p class="text-slate-700">「まなびドリル」としてリニューアルオープンしました！</p>
          </li>
          <li class="flex flex-col sm:flex-row gap-4 sm:items-center p-4 hover:bg-slate-50 rounded-xl transition">
            <span class="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full w-fit">2023.10.27</span>
            <p class="text-slate-700">全教科の単元を網羅し、各単元の問題数を30問に増やしました。</p>
          </li>
        </ul>
      </section>
    </div>`;
  fs.writeFileSync('index.html', getLayout(content));
}

function generateStaticPages() {
    // Basic static pages (About, How to use, Privacy) updated with new styles
    const aboutContent = `
        <div class="max-w-3xl mx-auto py-12">
            <h1 class="text-3xl font-bold mb-8 text-sky-600">このサイトについて</h1>
            <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6 text-slate-700 leading-loose">
                <p>「まなびドリル」は、中学生の皆さんが日々の学習や定期テスト対策を自力で進められるように支援することを目的とした無料学習サイトです。</p>
                <h2 class="text-2xl font-bold text-slate-800 mt-10">リニューアルについて</h2>
                <p>より使いやすく、より多くの問題に取り組めるようにデザインと内容を一新しました。全単元で30問の問題を用意し、PDFでのダウンロードや印刷にも対応しました。</p>
            </div>
        </div>`;
    fs.writeFileSync('about.html', getLayout(aboutContent));

    const howToUseContent = `
        <div class="max-w-3xl mx-auto py-12">
            <h1 class="text-3xl font-bold mb-8 text-sky-600">学習の進め方</h1>
            <div class="grid gap-6">
                ${[
                    { step: '1', title: '教科と単元を選ぶ', text: 'トップページから勉強したい教科を選び、ドリル一覧から単元を選択しましょう。' },
                    { step: '2', title: '問題にチャレンジ', text: '各単元には30つの問題があります。まずは自分で答えを考えてみてください。' },
                    { step: '3', title: '答え合わせと復習', text: '「答え合わせ」ボタンで正解を確認。解説を読んで理解を深めましょう。' }
                ].map(s => `
                    <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex gap-6">
                        <div class="w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold text-xl shrink-0">${s.step}</div>
                        <div>
                            <h3 class="text-xl font-bold text-slate-800 mb-2">${s.title}</h3>
                            <p class="text-slate-600 leading-relaxed">${s.text}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>`;
    fs.writeFileSync('how-to-use.html', getLayout(howToUseContent));

    const privacyContent = `
        <div class="max-w-3xl mx-auto py-12">
            <h1 class="text-3xl font-bold mb-8 text-sky-600">プライバシーポリシー</h1>
            <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6 text-slate-600 text-sm leading-relaxed">
                <h2 class="text-lg font-bold text-slate-800">広告の配信について</h2>
                <p>当サイトでは、第三者配信の広告サービス「Googleアドセンス」を利用しています。広告配信事業者は、Cookieを使用して、ユーザーの興味に応じた広告を表示することがあります。</p>
            </div>
        </div>`;
    fs.writeFileSync('privacy-policy.html', getLayout(privacyContent));
}

function generateSubjectPages() {
  if (!fs.existsSync('subjects')) fs.mkdirSync('subjects');

  Object.values(subjects).forEach(subject => {
    const subDir = path.join('subjects', subject.id);
    if (!fs.existsSync(subDir)) fs.mkdirSync(subDir);

    const indexContent = `
      <div class="max-w-4xl mx-auto">
        <nav class="flex mb-8 text-sm font-bold text-slate-400">
          <ol class="flex items-center space-x-2">
            <li><a href="../../index.html" class="hover:text-sky-500 transition">ホーム</a></li>
            <li class="flex items-center gap-2">
                <i class="fa-solid fa-chevron-right text-[10px]"></i>
                <span class="text-slate-600">${subject.name}</span>
            </li>
          </ol>
        </nav>

        <div class="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm mb-12 flex flex-col md:flex-row items-center gap-8">
          <div class="w-24 h-24 rounded-3xl bg-slate-50 flex items-center justify-center text-4xl text-sky-500 shrink-0">
             <i class="fa-solid ${subject.id === 'math' ? 'fa-calculator' : subject.id === 'science' ? 'fa-flask' : subject.id === 'social' ? 'fa-earth-americas' : 'fa-language'}"></i>
          </div>
          <div>
              <h1 class="text-4xl font-black text-slate-800 mb-3">${subject.name}</h1>
              <p class="text-slate-500 leading-relaxed">${subject.description}</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${subject.units.map(u => `
            <a href="${u.id}.html" class="flex items-center justify-between p-6 bg-white border border-slate-100 rounded-2xl hover:border-sky-300 hover:bg-sky-50/30 transition-all group">
              <span class="font-bold text-slate-700 group-hover:text-sky-600 transition">${u.title}</span>
              <i class="fa-solid fa-circle-arrow-right text-slate-200 group-hover:text-sky-500 transition-all text-xl"></i>
            </a>
          `).join('')}
        </div>
      </div>`;
    fs.writeFileSync(path.join(subDir, 'index.html'), getLayout(indexContent, `${subject.name} | まなびドリル`, 2));

    subject.units.forEach(unit => {
      const problems = unit.problems.map((p, idx) => {
        const num = idx + 1;
        return `
        <section class="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm overflow-hidden relative group unit-card">
            <div class="flex items-center gap-3 mb-6">
                <span class="bg-sky-500 text-white w-10 h-10 rounded-xl flex items-center justify-center font-black">問${num}</span>
                <h2 class="text-xl font-bold text-slate-800">${unit.title} の問題 ${num}</h2>
            </div>

            <div class="bg-slate-50 p-8 rounded-2xl mb-8 border border-slate-100">
                <p class="text-lg leading-relaxed text-slate-700">
                    ${p.q}
                </p>
            </div>

            <div class="flex flex-col gap-4">
                <button onclick="toggleAnswer('ans${num}', this)" class="w-full sm:w-fit bg-sky-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-sky-600 transition shadow-md shadow-sky-100 flex items-center justify-center gap-2 no-print">
                    <i class="fa-solid fa-check"></i> 答え合わせ
                </button>
                <div id="ans${num}" class="hidden animate-in fade-in slide-in-from-top-2 duration-300 print:block">
                    <div class="p-8 bg-green-50 border border-green-100 rounded-2xl">
                        <div class="flex items-center gap-2 text-green-700 font-bold mb-4">
                            <i class="fa-solid fa-lightbulb"></i> 正解と解説
                        </div>
                        <div class="text-green-800 leading-relaxed">
                            <div class="mb-4">
                                <span class="text-sm font-bold text-green-600 block uppercase tracking-wider">解答</span>
                                <span class="text-2xl font-black">${p.a}</span>
                            </div>
                            <div>
                                <span class="text-sm font-bold text-green-600 block uppercase tracking-wider">解説</span>
                                <p>${p.e}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      `;}).join('');

      const unitContent = `
        <div class="max-w-4xl mx-auto">
          <nav class="flex mb-8 text-sm font-bold text-slate-400 no-print">
            <ol class="flex items-center space-x-2">
              <li><a href="../../index.html" class="hover:text-sky-500">ホーム</a></li>
              <li class="flex items-center gap-2">
                <i class="fa-solid fa-chevron-right text-[10px]"></i>
                <a href="index.html" class="hover:text-sky-500">${subject.name}</a>
              </li>
              <li class="flex items-center gap-2">
                <i class="fa-solid fa-chevron-right text-[10px]"></i>
                <span class="text-slate-600">${unit.title}</span>
              </li>
            </ol>
          </nav>

          <header class="mb-12">
            <div class="print-header print-only hidden">
                <div class="print-title">${unit.title} ドリル</div>
                <div class="student-info">
                    <div class="info-box text-slate-400">年　　組　　番</div>
                    <div class="info-box text-slate-400">氏名：</div>
                    <div class="info-box text-slate-400 text-right">／30点</div>
                </div>
            </div>
            <h1 class="text-3xl md:text-4xl font-black text-slate-800 mb-4">${unit.title} 練習ドリル</h1>
            <p class="text-slate-500 font-medium no-print">全30問のドリルです。一つずつ丁寧に解いていきましょう。</p>
            <div class="mt-6 flex flex-wrap gap-4 no-print">
                <a href="${unit.id}.pdf" class="bg-rose-500 text-white px-6 py-2 rounded-xl font-bold hover:bg-rose-600 transition flex items-center gap-2 shadow-lg shadow-rose-100">
                    <i class="fa-solid fa-file-pdf"></i> PDF版をダウンロード
                </a>
                <button onclick="window.print()" class="bg-slate-800 text-white px-6 py-2 rounded-xl font-bold hover:bg-slate-900 transition flex items-center gap-2 shadow-lg shadow-slate-200">
                    <i class="fa-solid fa-print"></i> 印刷する
                </button>
            </div>
          </header>

          <div class="space-y-12">
            ${problems}
          </div>

          <div class="ans-section print-only hidden">
            <h2 class="text-2xl font-bold mb-6 border-b-2 border-slate-800 pb-2">解答と解説</h2>
            <div class="grid grid-cols-1 gap-4">
              ${unit.problems.map((p, i) => `
                <div class="border-b border-slate-200 pb-2">
                  <span class="font-bold mr-2">問${i + 1}:</span>
                  <span class="font-bold text-lg mr-4">${p.a}</span>
                  <span class="text-slate-600 text-sm">${p.e}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="mt-16 pt-10 border-t border-slate-200 flex justify-center no-print">
            <a href="index.html" class="bg-white text-slate-600 border border-slate-200 px-8 py-3 rounded-2xl font-bold hover:bg-slate-50 transition flex items-center gap-2">
              <i class="fa-solid fa-arrow-left"></i> ${subject.name}の一覧に戻る
            </a>
          </div>
          <div class="print-footer print-only text-right">
            まなびドリル
          </div>
        </div>
        <script>
            function toggleAnswer(id, btn) {
                const ans = document.getElementById(id);
                const isHidden = ans.classList.toggle('hidden');
                btn.innerHTML = isHidden ? '<i class="fa-solid fa-check"></i> 答え合わせ' : '<i class="fa-solid fa-eye-slash"></i> 答えを隠す';
                if (!isHidden) {
                    ans.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }
        </script>`;
      fs.writeFileSync(path.join(subDir, `${unit.id}.html`), getLayout(unitContent, `${unit.title} ドリル | まなびドリル`, 2));
    });
  });
}

function generateSitemap() {
  const BASE_URL = 'https://study.blocksurprise.f5.si';
  let urls = [
    '',
    'about.html',
    'how-to-use.html',
    'privacy-policy.html'
  ];

  Object.values(subjects).forEach(subject => {
    urls.push(`subjects/${subject.id}/index.html`);
    subject.units.forEach(unit => {
      urls.push(`subjects/${subject.id}/${unit.id}.html`);
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${BASE_URL}/${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync('sitemap.xml', sitemap);
}

generateIndex();
generateStaticPages();
generateSubjectPages();
generateSitemap();
console.log('Manabi Drill site and sitemap.xml generated successfully!');
