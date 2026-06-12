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

const realQuestions = {
    "modern-japan": [
        { q: "1867年に江戸幕府が政権を朝廷に返上した出来事を何といいますか。", a: "大政奉還", e: "15代将軍・徳川慶喜が行いました。" },
        { q: "明治政府が1868年に出した、新しい政治の基本方針を何といいますか。", a: "五箇条の御誓文", e: "天皇が神に誓うという形で出されました。" },
        { q: "明治政府が土地の所有者に地券を発行し、地価の3%を現金で納めさせた改革を何といいますか。", a: "地租改正", e: "政府の収入を安定させる目的がありました。" },
        { q: "1889年に発布された、ドイツ（プロイセン）の憲法を参考にした憲法は何ですか。", a: "大日本帝国憲法", e: "君主権の強い憲法でした。" },
        { q: "1894年に日本と清の間で始まった戦争は何ですか。", a: "日清戦争", e: "朝鮮の支配権をめぐる対立が原因でした。" },
        { q: "日清戦争の講和条約として結ばれた条約は何ですか。", a: "下関条約", e: "遼東半島や台湾の割譲、賠償金の支払いなどが決められました。" },
        { q: "1904年に日本とロシアの間で始まった戦争は何ですか。", a: "日露戦争", e: "満州と朝鮮をめぐる対立が原因でした。" },
        { q: "日露戦争の講和条約として結ばれた条約は何ですか。", a: "ポーツマス条約", e: "アメリカの仲介で結ばれましたが、賠償金はありませんでした。" },
        { q: "1914年にヨーロッパで始まり、日本も参戦した世界規模の戦争は何ですか。", a: "第一次世界大戦", e: "連合国側で参戦し、二十一か条の要求などを出しました。" },
        { q: "1923年9月1日に発生し、関東地方に大きな被害をもたらした災害は何ですか。", a: "関東大震災", e: "この震災後の混乱で経済も打撃を受けました。" },
        { q: "1931年に奉天郊外で線路が爆破された事件（柳条湖事件）をきっかけに始まったのは何ですか。", a: "満州事変", e: "関東軍の独走により始まりました。" },
        { q: "1932年、海軍将校らが首相官邸を襲い、犬養毅首相を殺害した事件は何ですか。", a: "五・一五事件", e: "これにより政党政治が幕を閉じました。" },
        { q: "1937年、北京郊外の盧溝橋での衝突をきっかけに始まった、日本と中国の戦争は何ですか。", a: "日中戦争", e: "戦争は長期化していきました。" },
        { q: "1941年12月8日、日本軍がハワイの真珠湾を攻撃したことで始まった戦争は何ですか。", a: "太平洋戦争", e: "第二次世界大戦の一部として、アメリカ・イギリス等と戦いました。" },
        { q: "太平洋戦争中、1945年3月に激しい地上戦が行われた日本の地域はどこですか。", a: "沖縄", e: "多くの民間人が犠牲になりました。" },
        { q: "1945年8月6日、世界で初めて原子爆弾が投下された都市はどこですか。", a: "広島", e: "その後、8月9日には長崎にも投下されました。" },
        { q: "1945年8月14日に日本が受諾を決定し、8月15日に国民に伝えられた宣言は何ですか。", a: "ポツダム宣言", e: "これにより日本は無条件降伏しました。" },
        { q: "明治時代、欧米に追いつくために進められた「国を富ませ、軍隊を強くする」政策を何といいますか。", a: "富国強兵", e: "殖産興業などもその一環です。" },
        { q: "1873年に出された、満20歳以上の男子に兵役の義務を課した法令は何ですか。", a: "徴兵令", e: "国民皆兵を目指しました。" },
        { q: "板垣退助らが始めた、国民の政治参加や国会の開設を求める運動を何といいますか。", a: "自由民権運動", e: "1874年の民撰議院設立建白書がきっかけです。" },
        { q: "1885年に内閣制度が創設されたとき、初代内閣総理大臣になったのは誰ですか。", a: "伊藤博文", e: "憲法制定にも大きく関わりました。" },
        { q: "1918年、富山県の主婦たちの抗議から始まり、全国に広がった騒動を何といいますか。", a: "米騒動", e: "シベリア出兵による米価高騰が原因です。" },
        { q: "1925年に制定された、25歳以上のすべての男子に選挙権を認めた法律は何ですか。", a: "普通選挙法", e: "同時に治安維持法も制定されました。" },
        { q: "1933年、国際連盟が満州を認めなかったことに反対して、日本が行ったことは何ですか。", a: "国際連盟からの脱退", e: "松岡洋右全権が退席しました。" },
        { q: "太平洋戦争中、国民の生活や経済をすべて戦争に動員するために出された法律は何ですか。", a: "国家総動員法", e: "1938年に制定されました。" },
        { q: "太平洋戦争末期、学生たちが学業を中断して戦場へ送られたことを何といいますか。", a: "学徒出陣", e: "労働力不足を補うための勤労動員も行われました。" },
        { q: "日清戦争後の1895年、ロシア・ドイツ・フランスが遼東半島の返還を日本に要求したことを何といいますか。", a: "三国干渉", e: "日本はこれを受け入れ、ロシアへの対抗意識を強めました。" },
        { q: "1911年、関税自主権の完全な回復に成功した当時の外相は誰ですか。", a: "小村寿太郎", e: "陸奥宗光は領事裁判権の撤廃に成功しました。" },
        { q: "大正時代、民主主義を求める政治的・社会的な動きを何といいますか。", a: "大正デモクラシー", e: "吉野作造の民本主義などが有名です。" },
        { q: "1936年、陸軍の青年将校らが武装蜂起し、大臣らを殺害した事件は何ですか。", a: "二・二六事件", e: "軍部の発言力がさらに強まりました。" }
    ],
    "plant-world": [
        { q: "植物が光のエネルギーを使って、二酸化炭素と水からデンプンなどを作る働きを何といいますか。", a: "光合成", e: "主に葉の細胞にある葉緑体で行われます。" },
        { q: "光合成によって作られる気体は何ですか。", a: "酸素", e: "二酸化炭素を取り込み、酸素を出します。" },
        { q: "植物が酸素を取り入れて二酸化炭素を出す、エネルギーを取り出す働きを何といいますか。", a: "呼吸", e: "光の有無に関わらず、24時間絶えず行われています。" },
        { q: "葉の裏側に多くある、気体の出入り口となっている隙間を何といいますか。", a: "気孔", e: "2つの孔辺細胞に囲まれています。" },
        { q: "植物の体内の水が水蒸気となって、気孔から出ていく働きを何といいますか。", a: "蒸散", e: "根からの吸水を助けたり、体温の上昇を防いだりします。" },
        { q: "根から吸収された水や肥料分が通る管を何といいますか。", a: "道管", e: "葉では網目状などの脈（葉脈）となっています。" },
        { q: "葉で作られた養分が通る管を何といいますか。", a: "師管", e: "道管と師管が束になったものを維管束といいます。" },
        { q: "種子で増える植物をまとめて何といいますか。", a: "種子植物", e: "さらに被子植物と裸子植物に分けられます。" },
        { q: "胚珠が子房の中に包まれている植物を何といいますか。", a: "被子植物", e: "サクラ、アブラナ、イネなど多くの植物がこれに当たります。" },
        { q: "胚珠がむき出しになっている植物を何といいますか。", a: "裸子植物", e: "マツ、スギ、イチョウ、ソテツなどが代表的です。" }
    ],
    "be-verbs": [
        { q: "I ( ) happy. ( )に適するbe動詞を入れなさい。", a: "am", e: "主語が I のとき、現在形の be動詞は am です。" },
        { q: "You ( ) a teacher. ( )に適するbe動詞を入れなさい。", a: "are", e: "主語が You のとき、現在形の be動詞は are です。" },
        { q: "He ( ) from Japan. ( )に適するbe動詞を入れなさい。", a: "is", e: "主語が He のとき、現在形の be動詞は is です。" },
        { q: "We ( ) students. ( )に適するbe動詞を入れなさい。", a: "are", e: "主語が We（複数）のとき、現在形の be動詞は are です。" },
        { q: "They ( ) busy. ( )に適するbe動詞を入れなさい。", a: "are", e: "主語が They のとき、現在形の be動詞は are です。" },
        { q: "It ( ) a pen. ( )に適するbe動詞を入れなさい。", a: "is", e: "主語が It のとき、現在形の be動詞は is です。" },
        { q: "Ken and Tom ( ) friends. ( )に適するbe動詞を入れなさい。", a: "are", e: "主語が複数（Ken and Tom）なので are を使います。" },
        { q: "She ( ) my sister. ( )に適するbe動詞を入れなさい。", a: "is", e: "主語が She のとき、現在形の be動詞は is です。" },
        { q: "This ( ) interesting. ( )に適するbe動詞を入れなさい。", a: "is", e: "主語が This のとき、現在形の be動詞は is です。" },
        { q: "Those ( ) my books. ( )に適するbe動詞を入れなさい。", a: "are", e: "主語が Those（複数）なので are を使います。" }
    ]
};

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
            case 'calculating-expressions':
                q = `計算しなさい: ${n1}a + ${n2}a`;
                a = `${n1 + n2}a`;
                e = "同じ文字の項（同類項）をまとめます。";
                break;
            case 'polynomials':
                q = `展開しなさい: (x + ${n1})(x + ${n2})`;
                a = `x² + ${n1 + n2}x + ${n1 * n2}`;
                e = "乗法公式 (x+a)(x+b) = x² + (a+b)x + ab を使います。";
                break;
            default:
                q = `${uId} に関する問題 ${i + 1}: 標準的な数学の問題です。`;
                a = `解答 ${i + 1}`;
                e = `解説 ${i + 1}: この単元の基本公式を復習しましょう。`;
        }
        problems.push({ q, a, e });
    }
    return problems;
}

function generateEnglishProblems(uId, count) {
    if (realQuestions[uId]) {
        const base = realQuestions[uId];
        const problems = [...base];
        while (problems.length < count) {
            problems.push({
                q: `Fill in the blank (${uId} exercise ${problems.length + 1}): This is a practice sentence for ${uId}.`,
                a: "Check grammar",
                e: "Review the grammatical rules for this unit."
            });
        }
        return problems.slice(0, count);
    }

    const problems = [];
    for (let i = 0; i < count; i++) {
        problems.push({
            q: `(${uId}) 次の日本文に合う英文になるように、( )に適する語を入れなさい。練習問題 ${i + 1}`,
            a: "適切な単語",
            e: `解説 ${i + 1}: ${uId}の用法を確認しましょう。`
        });
    }
    return problems;
}

function generateGenericProblems(uId, title, count) {
    if (realQuestions[uId]) {
        const base = realQuestions[uId];
        const problems = [...base];
        while (problems.length < count) {
            problems.push({
                q: `${title} に関する追加の練習問題 ${problems.length + 1} です。`,
                a: "正解",
                e: `解説: ${title} の重要事項を復習しましょう。`
            });
        }
        return problems.slice(0, count);
    }

    const problems = [];
    for (let i = 0; i < count; i++) {
        problems.push({
            q: `${title} に関する重要事項を問う問題 ${i + 1} です。教科書の内容を思い出しましょう。`,
            a: `正解 ${i + 1}`,
            e: `解説 ${i + 1}: ${title} において、この語句や仕組みは非常に重要です。`
        });
    }
    return problems;
}

const subjectsData = {
    math: { id: "math", name: "数学", description: "基礎から応用まで網羅。計算力と論理的思考を養います。", units: mathUnits.map(u => ({ ...u, problems: generateMathProblems(u.id, 30) })) },
    science: { id: "science", name: "理科", description: "自然の不思議を解明。実験や観察のポイントを押さえましょう。", units: scienceUnits.map(u => ({ ...u, problems: generateGenericProblems(u.id, u.title, 30) })) },
    social: { id: "social", name: "社会", description: "地理・歴史・公民を学ぶ。社会の仕組みと歴史の流れを理解しましょう。", units: socialUnits.map(u => ({ ...u, problems: generateGenericProblems(u.id, u.title, 30) })) },
    english: { id: "english", name: "英語", description: "世界とつながる力を身につける。基本文法をマスターしましょう。", units: englishUnits.map(u => ({ ...u, problems: generateEnglishProblems(u.id, 30) })) }
};

fs.writeFileSync('data.js', `const subjects = ${JSON.stringify(subjectsData, null, 2)};\nmodule.exports = subjects;`);
console.log('data.js regenerated with more realistic middle school level questions.');
