'use client';

import Link from 'next/link';
import type { Country } from '@/data/countries';
import { spanToRect } from '@/lib/timeline';

export const LABEL_WIDTH = 128;
export const ROW_HEIGHT = 60;

interface TimelineRowProps {
  country: Country;
  trackWidth: number;
}

/** 年表の1カ国分の行：左に固定の国名ラベル、右に存在期間の帯 */
export default function TimelineRow({ country, trackWidth }: TimelineRowProps) {
  return (
    <div
      className="flex border-b border-[var(--ios-separator)]"
      style={{ height: ROW_HEIGHT }}
    >
      {/* 左：スティッキー固定の国名ラベル */}
      <Link
        href={`/country/${country.id}`}
        className="ios-tap sticky left-0 z-10 flex items-center gap-2 border-r border-[var(--ios-separator)] bg-ios-card px-3"
        style={{ width: LABEL_WIDTH, minWidth: LABEL_WIDTH }}
      >
        <span className="text-[22px] leading-none">{country.flag}</span>
        <span className="truncate text-[13px] font-semibold text-ios-text">
          {country.name}
        </span>
      </Link>

      {/* 右：存在期間の帯（タップで詳細ページへ） */}
      <div className="relative" style={{ width: trackWidth }}>
        {country.spans.map((span, i) => {
          const { left, width } = spanToRect(span.start, span.end);
          return (
            <Link
              key={i}
              href={`/country/${country.id}`}
              title={`${country.name}：${span.label}`}
              className="ios-tap group absolute top-1/2 flex -translate-y-1/2 items-center overflow-hidden rounded-full px-2 shadow-ios"
              style={{
                left,
                width,
                height: 30,
                background: `linear-gradient(135deg, ${country.color}, ${country.colorTo})`,
              }}
            >
              <span className="truncate text-[11px] font-semibold text-white/95 drop-shadow-sm">
                {span.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
