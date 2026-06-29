'use client';

import Link from 'next/link';
import type { Theme } from '@/data/themes';

/** テーマ一覧のカード */
export default function ThemeCard({ theme }: { theme: Theme }) {
  return (
    <Link
      href={`/themes/${theme.id}`}
      className="ios-tap relative flex flex-col justify-between overflow-hidden rounded-ios-lg p-4 shadow-ios"
      style={{
        background: `linear-gradient(150deg, ${theme.color}, ${theme.colorTo})`,
        minHeight: 124,
      }}
    >
      <div className="text-[30px] leading-none drop-shadow-sm">{theme.icon}</div>
      <div>
        <h3 className="font-serif text-[17px] font-bold text-white drop-shadow-sm">
          {theme.title}
        </h3>
        <p className="mt-0.5 text-[12px] leading-snug text-white/90">
          {theme.tagline}
        </p>
      </div>
    </Link>
  );
}
