'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { Country } from '@/data/countries';
import { countries as allCountries, REGIONS } from '@/data/countries';
import {
  TIMELINE_WIDTH,
  generateTicks,
  yearToX,
} from '@/lib/timeline';
import SegmentedControl from './SegmentedControl';
import TimelineRow, { LABEL_WIDTH } from './TimelineRow';

const AXIS_HEIGHT = 34;

/** ホームの中核：横スクロール年表（年代×国のガントチャート） */
export default function TimelineChart() {
  const [region, setRegion] = useState<string>('all');
  const ticks = useMemo(() => generateTicks(), []);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 初期表示はBC1500付近（諸文明が出そろう前後）から見せる。
  // 以降は左右にスクロールして古代〜現代を行き来できる。
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollLeft = yearToX(-1500);
  }, []);

  const filtered: Country[] = useMemo(() => {
    const list =
      region === 'all'
        ? allCountries
        : allCountries.filter((c) => c.region === region);
    // 年表は古い順（最初の帯の開始年）に並べる
    return [...list].sort((a, b) => a.spans[0].start - b.spans[0].start);
  }, [region]);

  const options = [
    { value: 'all', label: 'すべて' },
    ...REGIONS.map((r) => ({ value: r, label: r })),
  ];

  return (
    <div className="space-y-3">
      <SegmentedControl options={options} value={region} onChange={setRegion} />

      <div className="overflow-hidden rounded-ios-lg bg-ios-card shadow-ios">
        {/* 横スクロール領域：年代目盛り(上)と国名(左)を固定 */}
        <div ref={scrollRef} className="ios-scroll max-h-[68vh] overflow-auto">
          <div
            className="relative"
            style={{ width: LABEL_WIDTH + TIMELINE_WIDTH }}
          >
            {/* 年代目盛り（スティッキー上） */}
            <div
              className="ios-glass sticky top-0 z-20 flex border-b border-[var(--ios-separator)]"
              style={{ height: AXIS_HEIGHT }}
            >
              {/* 左上の角（スティッキー左×上） */}
              <div
                className="sticky left-0 z-30 flex items-center border-r border-[var(--ios-separator)] bg-ios-card px-3 text-[11px] font-semibold text-ios-text-3"
                style={{ width: LABEL_WIDTH, minWidth: LABEL_WIDTH }}
              >
                年代 →
              </div>
              <div className="relative" style={{ width: TIMELINE_WIDTH }}>
                {ticks.map((t) => (
                  <div
                    key={t.year}
                    className="absolute top-0 flex h-full flex-col items-center"
                    style={{ left: t.x, transform: 'translateX(-50%)' }}
                  >
                    <span
                      className={`mt-1 text-[10px] ${
                        t.year === 0
                          ? 'font-bold text-ios-blue'
                          : 'text-ios-text-3'
                      }`}
                    >
                      {t.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 縦のグリッド線（目盛りに合わせて薄く） */}
            <div
              className="pointer-events-none absolute z-0"
              style={{
                left: LABEL_WIDTH,
                top: AXIS_HEIGHT,
                width: TIMELINE_WIDTH,
                bottom: 0,
              }}
            >
              {ticks.map((t) => (
                <div
                  key={t.year}
                  className="absolute top-0 h-full border-l border-dashed"
                  style={{
                    left: t.x,
                    borderColor:
                      t.year === 0
                        ? 'rgba(10,132,255,0.35)'
                        : 'var(--ios-separator)',
                  }}
                />
              ))}
            </div>

            {/* 各国の行 */}
            <div className="relative z-10">
              {filtered.map((c) => (
                <TimelineRow
                  key={c.id}
                  country={c}
                  trackWidth={TIMELINE_WIDTH}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="px-1 text-center text-[12px] text-ios-text-3">
        ← 横にスクロールして時代を移動／帯をタップで各国の歴史へ →
      </p>
    </div>
  );
}
