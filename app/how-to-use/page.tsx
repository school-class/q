export default function HowToUsePage() {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">サイトの使い方</h1>
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">1. 科目と単元を選ぶ</h2>
          <p className="text-gray-700">
            ホーム画面から、学習したい科目（数学・理科・社会・英語）を選択してください。
            その後、表示される単元一覧から、今日取り組む単元を選びます。
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">2. 問題を解く</h2>
          <p className="text-gray-700">
            問題文を読み、ノートなどに自分の答えを書いてみましょう。
            選択肢問題の場合は、頭の中で選ぶだけでもOKです。
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">3. 答え合わせをする</h2>
          <p className="text-gray-700">
            「答えを見る」ボタンをクリックすると、正解が表示されます。
            間違えてしまった場合は、解説をよく読んで、なぜその答えになるのかを理解しましょう。
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">4. 繰り返し取り組む</h2>
          <p className="text-gray-700">
            一度解いただけでは定着しません。数日後にもう一度同じ問題に挑戦し、
            スラスラ解けるようになるまで繰り返すのが成績アップのコツです。
          </p>
        </section>
      </div>
    </div>
  );
}
