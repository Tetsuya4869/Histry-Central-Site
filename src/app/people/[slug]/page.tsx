import { notFound } from 'next/navigation';
import Link from 'next/link';
import IOSNavBar from '@/components/IOSNavBar';
import { getAllPeople, getPerson, getPeopleOfCountry } from '@/lib/people';

export function generateStaticParams() {
  return getAllPeople().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getPerson(params.slug);
  if (!p) return { title: '人物 — 世界の歴史' };
  return {
    title: `${p.name} — 世界の歴史`,
    description: `${p.countryName}の${p.role}。${p.note}`,
  };
}

export default function PersonPage({ params }: { params: { slug: string } }) {
  const person = getPerson(params.slug);
  if (!person) notFound();
  const others = getPeopleOfCountry(person.countryId).filter(
    (p) => p.slug !== person.slug
  );

  return (
    <div className="min-h-screen pb-20">
      <IOSNavBar title={person.name} backHref="/people" backLabel="人物" />

      {/* ヒーロー */}
      <div
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${person.color}, ${person.colorTo})`,
        }}
      >
        <div className="mx-auto max-w-3xl px-5 py-8 text-white">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-[28px] font-bold backdrop-blur">
            {person.name.slice(0, 1)}
          </div>
          <h1 className="mt-3 font-serif text-[30px] font-bold tracking-tight drop-shadow-sm">
            {person.name}
          </h1>
          <p className="mt-1 text-[15px] text-white/90">
            {person.role}
            {person.years && ` ・ ${person.years}`}
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-4">
        {/* 解説 */}
        <section className="ios-fade-up py-6">
          <div className="rounded-ios bg-ios-card p-5 text-[15px] leading-relaxed text-ios-text-2 shadow-ios">
            {person.note}。
          </div>
        </section>

        {/* 属する文明 */}
        <section className="ios-fade-up pb-6">
          <h2 className="rule-heading mb-3 px-1 font-serif text-[15px] font-bold text-ios-text">
            この人物が生きた文明
          </h2>
          <Link
            href={`/country/${person.countryId}`}
            className="ios-tap flex items-center gap-3 rounded-ios bg-ios-card p-4 shadow-ios"
          >
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] text-[26px]"
              style={{
                background: `linear-gradient(135deg, ${person.color}, ${person.colorTo})`,
              }}
            >
              {person.flag}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-serif text-[15px] font-semibold text-ios-text">
                {person.countryName}の歴史
              </span>
              <span className="block text-[12px] text-ios-text-3">
                時代の流れと出来事を読む
              </span>
            </span>
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" aria-hidden>
              <path
                d="M1 1L7 7L1 13"
                stroke="var(--ios-text-3)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </section>

        {/* 同じ文明の人物 */}
        {others.length > 0 && (
          <section className="ios-fade-up">
            <h2 className="rule-heading mb-3 px-1 font-serif text-[15px] font-bold text-ios-text">
              同じ文明の人物
            </h2>
            <div className="flex flex-wrap gap-2">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/people/${p.slug}`}
                  className="ios-tap rounded-full bg-ios-card px-3 py-1.5 text-[13px] font-medium text-ios-text shadow-ios"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
