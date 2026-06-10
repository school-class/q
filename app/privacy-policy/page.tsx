export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>
      <div className="prose max-w-none text-gray-700 space-y-6 text-sm">
        <h2 className="text-xl font-bold text-gray-800">広告の配信について</h2>
        <p>
          当サイトでは、第三者配信の広告サービス「Googleアドセンス」を利用しています。
          このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、
          当サイトや他サイトへのアクセスに関する情報 「Cookie」(氏名、住所、メール アドレス、電話番号は含まれません) を使用することがあります。
        </p>
        <h2 className="text-xl font-bold text-gray-800 mt-6">アクセス解析ツールについて</h2>
        <p>
          当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
          このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
          このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
        </p>
        <h2 className="text-xl font-bold text-gray-800 mt-6">免責事項</h2>
        <p>
          当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、
          誤情報が入り込んだり、情報が古くなっていることもございます。
          当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
        </p>
      </div>
    </div>
  );
}
