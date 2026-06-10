const fs = require('fs');

const mathUnits = [
    { id: "positive-negative", title: "正負の数" },
    { id: "algebraic-expressions", title: "文字の式" },
    { id: "linear-equations", title: "一次方程式" },
    { id: "proportional-inverse", title: "比例と反比例" },
    { id: "plane-figures", title: "平面図形" },
    { id: "solid-figures", title: "空間図形" },
    { id: "data-analysis", title: "データの活用" },
    { id: "calculating-expressions", title: "式の計算" },
    { id: "simultaneous-equations", title: "連立方程式" },
    { id: "linear-functions", title: "一次関数" },
    { id: "examining-figures", title: "図形の調べ方" },
    { id: "properties-and-proofs", title: "図形の性質と証明" },
    { id: "probability", title: "確率" },
    { id: "polynomials", title: "多項式" },
    { id: "square-roots", title: "平方根" },
    { id: "quadratic-equations", title: "二次方程式" },
    { id: "functions-y-ax2", title: "関数y=ax^2" },
    { id: "similar-figures", title: "図形の相似" },
    { id: "circumference-angle", title: "円周角の定理" },
    { id: "pythagorean-theorem", title: "三平方の定理" },
    { id: "sample-surveys", title: "標本調査" }
];

const scienceUnits = [
    { id: "plant-world", title: "植物の世界" },
    { id: "materials-around-us", title: "身のまわりの物質" },
    { id: "light-sound-force", title: "光・音・力" },
    { id: "changes-in-earth", title: "大地の変化" },
    { id: "chemical-changes-atoms", title: "化学変化と原子・分子" },
    { id: "biology-structure", title: "生物の体とつくり" },
    { id: "electricity-use", title: "電流とその利用" },
    { id: "weather-changes", title: "天気の変化" },
    { id: "chemical-changes-ions", title: "化学変化とイオン" },
    { id: "continuity-of-life", title: "生命の連続性" },
    { id: "motion-energy", title: "運動とエネルギー" },
    { id: "earth-universe", title: "地球と宇宙" },
    { id: "nature-humans", title: "自然と人間" }
];

const socialUnits = [
    { id: "world-overview", title: "世界の姿" },
    { id: "japan-overview", title: "日本の姿" },
    { id: "world-regions", title: "世界の諸地域" },
    { id: "japan-regions", title: "日本の諸地域" },
    { id: "history-intro", title: "歴史の導入" },
    { id: "ancient-japan", title: "古代の日本" },
    { id: "medieval-japan", title: "中世の日本" },
    { id: "early-modern-japan", title: "近世の日本" },
    { id: "modern-japan", title: "近代の日本" },
    { id: "contemporary-japan", title: "現代の日本" },
    { id: "modern-society", title: "現代社会" },
    { id: "constitution", title: "日本国憲法" },
    { id: "politics", title: "政治" },
    { id: "economics", title: "経済" },
    { id: "international-society", title: "国際社会" }
];

const englishUnits = [
    { id: "be-verbs", title: "Be動詞" },
    { id: "general-verbs", title: "一般動詞" },
    { id: "auxiliary-can", title: "助動詞can" },
    { id: "present-progressive", title: "現在進行形" },
    { id: "past-tense", title: "過去形" },
    { id: "future-tense", title: "未来形" },
    { id: "auxiliary-must-should", title: "助動詞must/should" },
    { id: "infinitives", title: "不定詞" },
    { id: "gerunds", title: "動名詞" },
    { id: "comparison", title: "比較" },
    { id: "passive-voice", title: "受動態" },
    { id: "present-perfect", title: "現在完了" },
    { id: "relative-pronouns", title: "関係代名詞" },
    { id: "participles", title: "分詞" },
    { id: "indirect-questions", title: "間接疑問文" }
];

function generateMathProblems(uId, count) {
    const problems = [];
    for (let i = 0; i < count; i++) {
        let q, a, e;
        const n1 = Math.floor(Math.random() * 20) + 1;
        const n2 = Math.floor(Math.random() * 20) + 1;
        const s1 = Math.random() > 0.5 ? 1 : -1;
        const s2 = Math.random() > 0.5 ? 1 : -1;

        switch(uId) {
            case 'positive-negative':
                const type = i % 4;
                if (type === 0) {
                    q = `計算しなさい: (${s1*n1}) + (${s2*n2})`;
                    a = (s1*n1 + s2*n2).toString();
                } else if (type === 1) {
                    q = `計算しなさい: (${s1*n1}) - (${s2*n2})`;
                    a = (s1*n1 - s2*n2).toString();
                } else if (type === 2) {
                    q = `計算しなさい: (${s1*n1}) × (${s2*n2})`;
                    a = (s1*n1 * s2*n2).toString();
                } else {
                    const m2 = s2*n2 || 1;
                    const m1 = m2 * (Math.floor(Math.random() * 10) - 5);
                    q = `計算しなさい: (${m1}) ÷ (${m2})`;
                    a = (m1 / m2).toString();
                }
                e = "正負の数の基本計算です。符号のルールに注意しましょう。";
                break;
            case 'linear-equations':
                q = `方程式を解きなさい: ${n1}x = ${n1 * n2}`;
                a = `x = ${n2}`;
                e = `両辺を ${n1} で割ります。`;
                break;
            case 'square-roots':
                const sq = n1 * n1;
                q = `√${sq} を整数で答えなさい。`;
                a = n1.toString();
                e = `${n1}の2乗は${sq}です。`;
                break;
            default:
                q = `${uId} に関する問題 ${i + 1}: ${n1} と ${n2} を用いた標準問題です。`;
                a = `解答 ${i + 1}`;
                e = `解説 ${i + 1}: この単元の基本事項を確認しましょう。`;
        }
        problems.push({ q, a, e });
    }
    return problems;
}

function generateEnglishProblems(uId, count) {
    const problems = [];
    const subjects = ["I", "You", "He", "She", "They", "Ken", "Mary"];
    for (let i = 0; i < count; i++) {
        const sub = subjects[i % subjects.length];
        let q, a, e;
        switch(uId) {
            case 'be-verbs':
                const ans = (sub === "I") ? "am" : (sub === "He" || sub === "She" || sub === "Ken" || sub === "Mary") ? "is" : "are";
                q = `${sub} ( ) a student. ( )に適するbe動詞を入れなさい。`;
                a = ans;
                e = `主語が ${sub} なので be動詞は ${ans} を使います。`;
                break;
            default:
                q = `Fill in the blank (${uId} exercise ${i+1}): This is a standard sentence for ${uId}.`;
                a = "Correct Answer";
                e = "Explanation for this grammatical point.";
        }
        problems.push({ q, a, e });
    }
    return problems;
}

function generateGenericProblems(title, count) {
    const problems = [];
    for (let i = 0; i < count; i++) {
        problems.push({
            q: `${title} に関する重要事項を問う問題 ${i + 1} です。教科書の基本内容を確認しましょう。`,
            a: `正解 ${i + 1}`,
            e: `解説 ${i + 1}: ${title} のこのポイントは非常に重要です。テストに出やすいので覚えましょう。`
        });
    }
    return problems;
}

const subjectsData = {
    math: { id: "math", name: "数学", description: "基礎から応用まで網羅。", units: mathUnits.map(u => ({ ...u, problems: generateMathProblems(u.id, 30) })) },
    science: { id: "science", name: "理科", description: "自然の不思議を解明。", units: scienceUnits.map(u => ({ ...u, problems: generateGenericProblems(u.title, 30) })) },
    social: { id: "social", name: "社会", description: "地理・歴史・公民を学ぶ。", units: socialUnits.map(u => ({ ...u, problems: generateGenericProblems(u.title, 30) })) },
    english: { id: "english", name: "英語", description: "世界とつながる力を身につける。", units: englishUnits.map(u => ({ ...u, problems: generateEnglishProblems(u.id, 30) })) }
};

fs.writeFileSync('data.js', `const subjects = ${JSON.stringify(subjectsData, null, 2)};\nmodule.exports = subjects;`);
console.log('data.js regenerated with 30 questions per unit.');
