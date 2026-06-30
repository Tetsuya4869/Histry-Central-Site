import Link from 'next/link';
import IOSNavBar from '@/components/IOSNavBar';
import TimelineChart from '@/components/TimelineChart';
import CountryCard from '@/components/CountryCard';
import WorldMap from '@/components/WorldMap';
import { countries } from '@/data/countries';

const EXPLORE = [
  {
    href: '/themes',
    icon: '🗺️',
    title: 'テーマで読む世界史',
    desc: '宗教・交易・帝国…文明を横断する視点',
  },
  {
    href: '/glossary',
    icon: '📖',
    title: '用語集',
    desc: '世界史の基本概念をわかりやすく',
  },
  {
    href: '/about',
    icon: '✒️',
    title: '編集方針',
    desc: '史料・参考文献と編集の考え方',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen pb-16">
      <IOSNavBar title="世界の歴史" />

      <main className="mx-auto max-w-3xl px-4">
        {/* ヒーロー */}
        <section className="ios-fade-up pb-2 pt-6">
          <p className="font-serif text-[13px] font-semibold tracking-wide text-ios-blue">
            世界史を、専門の視点で読む
          </p>
          <h2 className="mt-1 font-serif text-[34px] font-bold leading-tight tracking-tight text-ios-text">
            世界の歴史
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-ios-text-2">
            年表で時代を俯瞰し、気になる国・文明をタップ。
            <br />
            政治・経済・文化・宗教の多面的な解説で、世界史を立体的にたどる。
          </p>
        </section>

        {/* 横スクロール年表 */}
        <section className="ios-fade-up py-3">
          <TimelineChart />
        </section>

        {/* 世界地図 */}
        <section className="ios-fade-up pt-4">
          <h3 className="px-1 pb-2 text-[13px] font-semibold uppercase tracking-wide text-ios-text-3">
            地図で見る
          </h3>
          <div className="rounded-ios-lg bg-ios-card p-3 shadow-ios">
            <WorldMap />
            <p className="mt-2 text-center text-[11px] text-ios-text-3">
              ピンをタップで各文明の歴史へ／色は中心地の目安
            </p>
          </div>
        </section>

        {/* 読み物への導線 */}
        <section className="ios-fade-up pt-4">
          <h3 className="px-1 pb-2 text-[13px] font-semibold uppercase tracking-wide text-ios-text-3">
            深く読む
          </h3>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {EXPLORE.map((e) => (
              <Link
                key={e.href}
                href={e.href}
                className="ios-tap flex items-center gap-3 rounded-ios bg-ios-card p-3 shadow-ios sm:flex-col sm:items-start"
              >
                <div className="text-[26px] leading-none">{e.icon}</div>
                <div className="min-w-0">
                  <h4 className="font-serif text-[14px] font-bold text-ios-text">
                    {e.title}
                  </h4>
                  <p className="mt-0.5 text-[11.5px] leading-snug text-ios-text-3">
                    {e.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 国・文明の一覧 */}
        <section className="ios-fade-up pt-6">
          <h3 className="px-1 pb-2 text-[13px] font-semibold uppercase tracking-wide text-ios-text-3">
            国・文明から探す（{countries.length}）
          </h3>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {countries.map((c) => (
              <CountryCard key={c.id} country={c} />
            ))}
          </div>
        </section>

        <footer className="pt-10 text-center text-[11px] leading-relaxed text-ios-text-3">
          史実をもとにした概略です・日本語コンテンツ
          <br />
          <Link href="/about" className="text-ios-blue">
            編集方針・参考文献について
          </Link>
        </footer>
      </main>
    </div>
  );
}
