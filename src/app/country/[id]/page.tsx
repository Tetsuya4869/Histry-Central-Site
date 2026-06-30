import { notFound } from 'next/navigation';
import IOSNavBar from '@/components/IOSNavBar';
import EraSection from '@/components/EraSection';
import KeyFigureCard from '@/components/KeyFigureCard';
import ReferencesList from '@/components/ReferencesList';
import WorldMap from '@/components/WorldMap';
import { countries, getCountry } from '@/data/countries';
import { getHistory } from '@/data/histories';
import { getGeo } from '@/data/geo';

// 静的エクスポートのため全国分のパスを生成
export function generateStaticParams() {
  return countries.map((c) => ({ id: c.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const country = getCountry(params.id);
  if (!country) return { title: '世界の歴史' };
  return {
    title: `${country.name}の歴史 — 世界の歴史`,
    description: country.summary,
  };
}

export default function CountryPage({ params }: { params: { id: string } }) {
  const country = getCountry(params.id);
  const history = getHistory(params.id);
  if (!country || !history) notFound();

  return (
    <div className="min-h-screen pb-20">
      <IOSNavBar title={country.name} subtitle="の歴史" backHref="/" />

      {/* ヒーロー */}
      <div
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${country.color}, ${country.colorTo})`,
        }}
      >
        <div className="mx-auto max-w-3xl px-5 py-8 text-white">
          <div className="text-[56px] leading-none drop-shadow-sm">
            {country.flag}
          </div>
          <h1 className="mt-3 font-serif text-[32px] font-bold tracking-tight drop-shadow-sm">
            {country.name}
          </h1>
          <p className="mt-1 max-w-md text-[15px] leading-relaxed text-white/90">
            {country.summary}
          </p>
          <span className="mt-3 inline-block rounded-full bg-white/20 px-3 py-1 text-[12px] font-medium backdrop-blur">
            {country.region}
          </span>
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-4">
        {/* 概要（短文） */}
        <section className="ios-fade-up py-6">
          <div className="rounded-ios bg-ios-card p-4 text-[14px] leading-relaxed text-ios-text-2 shadow-ios">
            {history.intro}
          </div>
        </section>

        {/* 位置（ロケーター地図） */}
        {getGeo(country.id) && (
          <section className="ios-fade-up pb-6">
            <h2 className="rule-heading mb-3 px-1 font-serif text-[15px] font-bold text-ios-text">
              位置
            </h2>
            <div className="rounded-ios bg-ios-card p-3 shadow-ios">
              <WorldMap highlightId={country.id} />
              <p className="mt-2 text-center text-[11px] text-ios-text-3">
                {country.name}のおおよその中心地
              </p>
            </div>
          </section>
        )}

        {/* 総論（学術的・明朝体・ドロップキャップ） */}
        {history.overview && (
          <section className="ios-fade-up pb-6">
            <h2 className="rule-heading mb-3 px-1 font-serif text-[15px] font-bold text-ios-text">
              総論
            </h2>
            <div className="rounded-ios bg-ios-card p-5 shadow-ios">
              <p className="prose-academic dropcap text-[15px] text-ios-text-2">
                {history.overview}
              </p>
            </div>
          </section>
        )}

        {/* 主要人物 */}
        {history.figures && history.figures.length > 0 && (
          <section className="ios-fade-up pb-6">
            <h2 className="px-1 pb-2 text-[13px] font-semibold uppercase tracking-wide text-ios-text-3">
              主要な人物
            </h2>
            <div className="ios-scroll -mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
              {history.figures.map((f, i) => (
                <KeyFigureCard
                  key={i}
                  figure={f}
                  color={country.color}
                  colorTo={country.colorTo}
                />
              ))}
            </div>
          </section>
        )}

        {/* 時代ごとの歴史（縦タイムライン） */}
        <section className="ios-fade-up">
          <h2 className="rule-heading mb-3 px-1 font-serif text-[15px] font-bold text-ios-text">
            時代の流れ
          </h2>
          <div>
            {history.eras.map((era, i) => (
              <EraSection
                key={i}
                era={era}
                color={country.color}
                isLast={i === history.eras.length - 1}
              />
            ))}
          </div>
        </section>

        {/* 後世への影響 */}
        {history.legacy && (
          <section className="ios-fade-up pt-2">
            <h2 className="rule-heading mb-3 px-1 font-serif text-[15px] font-bold text-ios-text">
              後世への影響
            </h2>
            <div className="rounded-ios bg-ios-card p-5 shadow-ios">
              <p className="prose-academic text-[14.5px] text-ios-text-2">
                {history.legacy}
              </p>
            </div>
          </section>
        )}

        {/* 参考文献 */}
        {history.references && history.references.length > 0 && (
          <section className="ios-fade-up pt-6">
            <h2 className="rule-heading mb-3 px-1 font-serif text-[15px] font-bold text-ios-text">
              参考文献
            </h2>
            <div className="rounded-ios bg-ios-card p-5 shadow-ios">
              <ReferencesList references={history.references} />
            </div>
            <p className="mt-3 px-1 text-[11px] leading-relaxed text-ios-text-3">
              本ページは上記をはじめとする一般的な概説書・通史に基づく要約です。
              年代・時代区分はわかりやすさを優先した概略を含みます。
            </p>
          </section>
        )}
      </main>
    </div>
  );
}
