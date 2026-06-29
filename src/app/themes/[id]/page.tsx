import { notFound } from 'next/navigation';
import Link from 'next/link';
import IOSNavBar from '@/components/IOSNavBar';
import { themes, getTheme } from '@/data/themes';
import { getCountry } from '@/data/countries';

export function generateStaticParams() {
  return themes.map((t) => ({ id: t.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const theme = getTheme(params.id);
  if (!theme) return { title: 'テーマで読む世界史' };
  return {
    title: `${theme.title} — テーマで読む世界史`,
    description: theme.tagline,
  };
}

/** 関連する国へのリンクチップ */
function CountryChips({ ids }: { ids: string[] }) {
  const list = ids.map(getCountry).filter(Boolean);
  if (list.length === 0) return null;
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {list.map(
        (c) =>
          c && (
            <Link
              key={c.id}
              href={`/country/${c.id}`}
              className="ios-tap flex items-center gap-1 rounded-full bg-ios-card-2 px-3 py-1 text-[12px] font-medium text-ios-text"
            >
              <span>{c.flag}</span>
              {c.name}
            </Link>
          )
      )}
    </div>
  );
}

export default function ThemePage({ params }: { params: { id: string } }) {
  const theme = getTheme(params.id);
  if (!theme) notFound();

  return (
    <div className="min-h-screen pb-20">
      <IOSNavBar title={theme.title} backHref="/themes" backLabel="テーマ" />

      {/* ヒーロー */}
      <div
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${theme.color}, ${theme.colorTo})`,
        }}
      >
        <div className="mx-auto max-w-3xl px-5 py-8 text-white">
          <div className="text-[48px] leading-none drop-shadow-sm">
            {theme.icon}
          </div>
          <h1 className="mt-2 font-serif text-[30px] font-bold tracking-tight drop-shadow-sm">
            {theme.title}
          </h1>
          <p className="mt-1 text-[14px] text-white/90">{theme.tagline}</p>
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-4">
        {/* 導入 */}
        <section className="ios-fade-up py-6">
          <div className="rounded-ios bg-ios-card p-5 shadow-ios">
            <p className="prose-academic dropcap text-[15px] text-ios-text-2">
              {theme.intro}
            </p>
          </div>
        </section>

        {/* 各節 */}
        <section className="ios-fade-up space-y-4">
          {theme.sections.map((s, i) => (
            <div key={i} className="rounded-ios bg-ios-card p-5 shadow-ios">
              <h2
                className="rule-heading font-serif text-[18px] font-bold text-ios-text"
                style={{ color: theme.color }}
              >
                {s.heading}
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-ios-text-2">
                {s.body}
              </p>
              {s.relatedCountryIds && (
                <CountryChips ids={s.relatedCountryIds} />
              )}
            </div>
          ))}
        </section>

        {/* 関連する国 */}
        <section className="ios-fade-up pt-6">
          <h2 className="rule-heading mb-3 px-1 font-serif text-[15px] font-bold text-ios-text">
            このテーマに関係する国・文明
          </h2>
          <div className="rounded-ios bg-ios-card p-4 shadow-ios">
            <CountryChips ids={theme.relatedCountryIds} />
          </div>
        </section>
      </main>
    </div>
  );
}
