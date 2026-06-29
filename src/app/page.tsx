import IOSNavBar from '@/components/IOSNavBar';
import TimelineChart from '@/components/TimelineChart';
import CountryCard from '@/components/CountryCard';
import { countries } from '@/data/countries';

export default function HomePage() {
  return (
    <div className="min-h-screen pb-16">
      <IOSNavBar title="世界の歴史" />

      <main className="mx-auto max-w-3xl px-4">
        {/* ヒーロー */}
        <section className="ios-fade-up pb-2 pt-6">
          <h2 className="text-[34px] font-bold leading-tight tracking-tight text-ios-text">
            世界の歴史
          </h2>
          <p className="mt-1 text-[15px] text-ios-text-2">
            年表で時代を俯瞰し、気になる国をタップ。
            <br />
            各国のとても詳細な歴史へ旅しよう。
          </p>
        </section>

        {/* 横スクロール年表 */}
        <section className="ios-fade-up py-3">
          <TimelineChart />
        </section>

        {/* 国の一覧 */}
        <section className="ios-fade-up pt-4">
          <h3 className="px-1 pb-2 text-[13px] font-semibold uppercase tracking-wide text-ios-text-3">
            国から探す
          </h3>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {countries.map((c) => (
              <CountryCard key={c.id} country={c} />
            ))}
          </div>
        </section>

        <footer className="pt-10 text-center text-[11px] text-ios-text-3">
          史実をもとにした概略です・日本語コンテンツ
        </footer>
      </main>
    </div>
  );
}
