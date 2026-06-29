import type { Era } from '@/data/histories/types';
import { formatYear } from '@/lib/timeline';

const THEME_ICON: Record<string, string> = {
  政治: '⚖️',
  '経済・社会': '🌾',
  '文化・宗教': '🏛️',
  対外関係: '🌐',
};

/** 詳細ページの時代セクション（縦タイムラインの1ノード） */
export default function EraSection({
  era,
  color,
  isLast,
}: {
  era: Era;
  color: string;
  isLast: boolean;
}) {
  return (
    <div className="relative flex gap-4">
      {/* 縦タイムラインの軸 */}
      <div className="flex w-4 shrink-0 flex-col items-center">
        <span
          className="mt-1.5 h-3.5 w-3.5 rounded-full ring-4 ring-[var(--ios-bg)]"
          style={{ background: color }}
        />
        {!isLast && (
          <span className="w-0.5 flex-1 bg-[var(--ios-separator)]" />
        )}
      </div>

      {/* 内容 */}
      <div className="flex-1 pb-8">
        <div className="rounded-ios bg-ios-card p-4 shadow-ios">
          <h3 className="font-serif text-[19px] font-bold text-ios-text">
            {era.name}
          </h3>
          <p className="mt-0.5 text-[12px] font-medium" style={{ color }}>
            {era.period}
          </p>
          <p className="mt-2 text-[14px] leading-relaxed text-ios-text-2">
            {era.body}
          </p>

          {/* 観点別解説 */}
          {era.themes && era.themes.length > 0 && (
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {era.themes.map((t, i) => (
                <div
                  key={i}
                  className="rounded-[12px] bg-ios-card-2 p-2.5"
                >
                  <div className="flex items-center gap-1.5">
                    <span aria-hidden className="text-[12px]">
                      {THEME_ICON[t.label] ?? '•'}
                    </span>
                    <span
                      className="text-[11px] font-semibold"
                      style={{ color }}
                    >
                      {t.label}
                    </span>
                  </div>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-ios-text-2">
                    {t.text}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* できごと年表 */}
          {era.events && era.events.length > 0 && (
            <ul className="mt-3 space-y-1.5 border-t border-[var(--ios-separator)] pt-3">
              {era.events.map((ev, i) => (
                <li key={i} className="flex gap-3 text-[13px]">
                  <span
                    className="w-14 shrink-0 text-right font-semibold tabular-nums"
                    style={{ color }}
                  >
                    {formatYear(ev.year)}
                  </span>
                  <span className="text-ios-text-2">{ev.text}</span>
                </li>
              ))}
            </ul>
          )}

          {/* 史料 */}
          {era.sources && era.sources.length > 0 && (
            <div className="mt-3 flex flex-wrap items-center gap-1.5 border-t border-[var(--ios-separator)] pt-3">
              <span className="text-[10px] font-semibold uppercase tracking-wide text-ios-text-3">
                史料
              </span>
              {era.sources.map((s, i) => (
                <span key={i} className="source-chip">
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
