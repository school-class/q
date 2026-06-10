export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">このサイトについて</h1>
      <div className="prose max-w-none text-gray-700 space-y-6">
        <p>
          「学問の扉」は、中学生の皆さんが日々の学習や定期テスト対策、高校入試に向けた準備を
          自力で進められるように支援することを目的とした無料学習サイトです。
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mt-8">私たちの想い</h2>
        <p>
          「塾に通っていないけれど、もっとたくさん練習問題を解きたい」
          「苦手な単元を基礎から復習したい」
          そんな声に応えるために、このサイトは作られました。
          誰でも、いつでも、どこでも、質の高い練習問題にアクセスできる環境を目指しています。
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mt-8">サイト運営</h2>
        <p>
          本サイトは、有志の教育関係者およびエンジニアによって運営されています。
          内容は教科書に基づき、標準的な学習進度に合わせたものとなっていますが、
          随時最新の情報にアップデートを行っております。
        </p>
      </div>
    </div>
  );
}
