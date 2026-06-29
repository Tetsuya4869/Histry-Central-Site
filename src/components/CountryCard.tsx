'use client';

import Link from 'next/link';
import type { Country } from '@/data/countries';

/** ホーム下部の国カード（一覧からも詳細へ飛べる） */
export default function CountryCard({ country }: { country: Country }) {
  return (
    <Link
      href={`/country/${country.id}`}
      className="ios-tap flex items-center gap-3 rounded-ios bg-ios-card p-3 shadow-ios"
    >
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] text-[26px]"
        style={{
          background: `linear-gradient(135deg, ${country.color}, ${country.colorTo})`,
        }}
      >
        {country.flag}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate text-[15px] font-semibold text-ios-text">
            {country.name}
          </h3>
          <span className="shrink-0 rounded-full bg-ios-card-2 px-2 py-0.5 text-[10px] text-ios-text-3">
            {country.region}
          </span>
        </div>
        <p className="mt-0.5 truncate text-[12px] text-ios-text-3">
          {country.summary}
        </p>
      </div>
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
  );
}
