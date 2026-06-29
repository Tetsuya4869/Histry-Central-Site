import type { Era } from '@/data/histories/types';
import { formatYear } from '@/lib/timeline';

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
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-[18px] font-bold text-ios-text">{era.name}</h3>
          </div>
          <p className="mt-0.5 text-[12px] font-medium" style={{ color }}>
            {era.period}
          </p>
          <p className="mt-2 text-[14px] leading-relaxed text-ios-text-2">
            {era.body}
          </p>

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
        </div>
      </div>
    </div>
  );
}
