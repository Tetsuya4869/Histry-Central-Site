import type { Metadata } from 'next';
import IOSNavBar from '@/components/IOSNavBar';

export const metadata: Metadata = {
  title: '編集方針 — 世界の歴史',
  description:
    '本サイトの編集の考え方、史料と参考文献の扱い、年代表記の凡例、誠実性の方針について。',
};

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-ios bg-ios-card p-5 shadow-ios">
      <h2 className="rule-heading mb-3 font-serif text-[17px] font-bold text-ios-text">
        {title}
      </h2>
      <div className="space-y-2 text-[14px] leading-relaxed text-ios-text-2">
        {children}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pb-20">
      <IOSNavBar title="編集方針" backHref="/" />
      <main className="mx-auto max-w-3xl px-4">
        <section className="ios-fade-up py-6">
          <h1 className="font-serif text-[30px] font-bold tracking-tight text-ios-text">
            編集方針
          </h1>
          <p className="mt-2 prose-academic text-[15px] text-ios-text-2">
            本サイト「世界の歴史」は、年代と各文明を一望できる年表を入口に、
            各国・各文明の歩みを多面的に読み解くことを目的とした、
            日本語の世界史アーカイブです。専門の通史・概説書に依拠しつつ、
            政治・経済・社会・文化・宗教・対外関係といった複数の観点から
            歴史を立体的に提示することを編集の基本姿勢としています。
          </p>
        </section>

        <section className="ios-fade-up space-y-4">
          <Card title="史料と参考文献">
            <p>
              各ページの記述は、山川出版社『詳説世界史』をはじめとする標準的な教科書・概説書、
              岩波新書・中公新書などの各国史、および Cambridge / Oxford の通史といった
              一般に流通する信頼できる文献に基づいています。各国ページの末尾に主要な参考文献を、
              各時代には依拠した代表的な史料（一次史料・古典）を明示しています。
            </p>
          </Card>

          <Card title="誠実性について">
            <p>
              本サイトは、実在しない人物を「監修者」として掲げることはしません。
              権威づけのために架空の専門家名や肩書きを用いることは、読者への誠実さに反すると
              考えるためです。内容の信頼性は、あくまで実在する文献の参照と、
              検証可能な史実の記述によって担保します。
            </p>
          </Card>

          <Card title="年代と時代区分の凡例">
            <ul className="list-disc space-y-1 pl-5">
              <li>年代は西暦で表記し、紀元前は「BC」を付して示します（例：BC753）。</li>
              <li>
                年表の「帯」や時代区分は、俯瞰しやすさを優先した概略です。王朝の境界や
                文明の盛衰には諸説があり、厳密な確定年代と異なる場合があります。
              </li>
              <li>
                古代・先史の年代や、文字史料を欠く文明（インカ・初期メソアメリカ等）の記述には、
                考古学的推定や後代の記録に基づく不確実性が含まれます。
              </li>
            </ul>
          </Card>

          <Card title="記述の限界">
            <p>
              各ページは膨大な歴史の要約であり、すべての出来事・解釈を網羅するものではありません。
              歴史には複数の見方が存在します。本サイトを入口として、
              参考文献にあたり、より深く・多角的に学んでいただくことを願っています。
            </p>
          </Card>

          <Card title="主な参考文献（全体）">
            <ul className="space-y-1 font-serif text-[13px]">
              <li>『詳説世界史』『世界史用語集』（山川出版社）</li>
              <li>『世界の歴史』全集（中央公論新社／講談社学術文庫）</li>
              <li>各国史シリーズ（岩波新書・中公新書ほか）</li>
              <li>The Cambridge / Oxford History シリーズ（各地域・各時代）</li>
            </ul>
          </Card>
        </section>
      </main>
    </div>
  );
}
