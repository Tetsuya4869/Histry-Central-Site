import type { Metadata } from 'next';
import Link from 'next/link';
import IOSNavBar from '@/components/IOSNavBar';
import { getAllPeople } from '@/lib/people';
import { countries } from '@/data/countries';

export const metadata: Metadata = {
  title: '人物から探す — 世界の歴史',
  description: '世界史を動かした主要な人物を、文明ごとに一覧で。',
};

export default function PeoplePage() {
  const people = getAllPeople();

  return (
    <div className="min-h-screen pb-16">
      <IOSNavBar title="人物から探す" backHref="/" />
      <main className="mx-auto max-w-3xl px-4">
        <section className="ios-fade-up py-6">
          <h2 className="font-serif text-[28px] font-bold tracking-tight text-ios-text">
            人物から探す
          </h2>
          <p className="mt-1 text-[14px] leading-relaxed text-ios-text-2">
            歴史を動かした人々を文明ごとに。名前をタップで詳しく。（全{people.length}名）
          </p>
        </section>

        <section className="ios-fade-up space-y-5">
          {countries.map((c) => {
            const list = people.filter((p) => p.countryId === c.id);
            if (list.length === 0) return null;
            return (
              <div key={c.id}>
                <h3 className="flex items-center gap-2 px-1 pb-2 text-[13px] font-semibold text-ios-text-3">
                  <span>{c.flag}</span>
                  {c.name}
                </h3>
                <div className="overflow-hidden rounded-ios bg-ios-card shadow-ios">
                  {list.map((p, i) => (
                    <Link
                      key={p.slug}
                      href={`/people/${p.slug}`}
                      className={`ios-tap flex items-center gap-3 p-3 ${
                        i > 0 ? 'border-t border-[var(--ios-separator)]' : ''
                      }`}
                    >
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-white"
                        style={{
                          background: `linear-gradient(135deg, ${c.color}, ${c.colorTo})`,
                        }}
                      >
                        {p.name.slice(0, 1)}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-serif text-[14px] font-semibold text-ios-text">
                          {p.name}
                        </span>
                        <span className="block truncate text-[12px] text-ios-text-3">
                          {p.role}
                          {p.years && ` ・ ${p.years}`}
                        </span>
                      </span>
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 8 14"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M1 1L7 7L1 13"
                          stroke="var(--ios-text-3)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}
