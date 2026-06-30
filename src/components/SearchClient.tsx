'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { buildSearchIndex, type SearchItem } from '@/lib/search';

const KIND_ORDER: SearchItem['kind'][] = ['国・文明', 'テーマ', '人物', '用語'];

export default function SearchClient() {
  const [q, setQ] = useState('');
  const index = useMemo(() => buildSearchIndex(), []);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [];
    const terms = query.split(/\s+/);
    return index
      .filter((it) => {
        const hay = `${it.title} ${it.keywords}`.toLowerCase();
        return terms.every((t) => hay.includes(t));
      })
      .slice(0, 60);
  }, [q, index]);

  const grouped = KIND_ORDER.map((kind) => ({
    kind,
    items: results.filter((r) => r.kind === kind),
  })).filter((g) => g.items.length > 0);

  return (
    <div>
      {/* 検索バー */}
      <div className="ios-fade-up sticky top-14 z-20 -mx-4 bg-ios-bg/80 px-4 pb-3 pt-1 backdrop-blur">
        <div className="flex items-center gap-2 rounded-[12px] bg-ios-card-2 px-3 py-2.5">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <circle
              cx="7"
              cy="7"
              r="5"
              stroke="var(--ios-text-3)"
              strokeWidth="1.6"
            />
            <path
              d="M11 11L14 14"
              stroke="var(--ios-text-3)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="国・人物・テーマ・用語を検索"
            className="w-full bg-transparent text-[16px] text-ios-text outline-none placeholder:text-ios-text-3"
          />
          {q && (
            <button
              type="button"
              onClick={() => setQ('')}
              className="text-[13px] text-ios-text-3"
              aria-label="クリア"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* 結果 */}
      {q.trim() === '' ? (
        <p className="px-1 py-10 text-center text-[14px] text-ios-text-3">
          キーワードを入力してください。
          <br />
          例：「ナポレオン」「シルクロード」「科挙」「インカ」
        </p>
      ) : results.length === 0 ? (
        <p className="px-1 py-10 text-center text-[14px] text-ios-text-3">
          「{q}」に一致する項目は見つかりませんでした。
        </p>
      ) : (
        <div className="space-y-5 pb-4">
          {grouped.map((group) => (
            <div key={group.kind}>
              <h3 className="px-1 pb-2 text-[12px] font-semibold uppercase tracking-wide text-ios-text-3">
                {group.kind}（{group.items.length}）
              </h3>
              <div className="overflow-hidden rounded-ios bg-ios-card shadow-ios">
                {group.items.map((it, i) => (
                  <Link
                    key={`${it.href}-${i}`}
                    href={it.href}
                    className={`ios-tap flex items-center gap-3 p-3 ${
                      i > 0 ? 'border-t border-[var(--ios-separator)]' : ''
                    }`}
                  >
                    <span className="text-[22px] leading-none">{it.icon}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-serif text-[14px] font-semibold text-ios-text">
                        {it.title}
                      </span>
                      <span className="block truncate text-[12px] text-ios-text-3">
                        {it.subtitle}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
