import Link from 'next/link';
import { worldMap } from '@/lib/worldmap';
import { geo } from '@/data/geo';
import { countries } from '@/data/countries';

const [, , VB_W, VB_H] = worldMap.viewBox.split(' ').map(Number);

interface WorldMapProps {
  /** 指定すると「ロケーター」表示：その文明だけを強調し操作不可 */
  highlightId?: string;
  className?: string;
}

/**
 * 世界地図。各文明の中心国をその色で塗り、ピンを置く。
 * overview（ホーム）＝全文明クリック可、locator（各国ページ）＝1文明のみ強調。
 * 地図データ：@svg-maps/world（CC BY 4.0）。
 */
export default function WorldMap({ highlightId, className }: WorldMapProps) {
  const isLocator = Boolean(highlightId);
  const shown = isLocator
    ? countries.filter((c) => c.id === highlightId)
    : countries;

  // iso -> 塗り色
  const isoColor = new Map<string, string>();
  for (const c of shown) {
    const g = geo[c.id];
    if (g) isoColor.set(g.iso, c.color);
  }

  return (
    <div
      className={`relative w-full overflow-hidden ${className ?? ''}`}
      style={{ aspectRatio: `${VB_W} / ${VB_H}` }}
    >
      <svg
        viewBox={worldMap.viewBox}
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label={isLocator ? '位置を示す世界地図' : '世界の文明の地図'}
      >
        <rect
          x="0"
          y="0"
          width={VB_W}
          height={VB_H}
          fill="var(--ios-card-2)"
        />
        {worldMap.locations.map((loc) => {
          const hl = isoColor.get(loc.id);
          return (
            <path
              key={loc.id}
              d={loc.path}
              fill={hl ?? 'var(--ios-separator)'}
              stroke="var(--ios-card)"
              strokeWidth={0.4}
              opacity={hl ? 0.92 : 0.55}
            />
          );
        })}
      </svg>

      {/* ピン（HTMLオーバーレイ） */}
      {shown.map((c) => {
        const g = geo[c.id];
        if (!g) return null;
        const left = (g.x / VB_W) * 100;
        const top = (g.y / VB_H) * 100;
        const pin = (
          <span
            className="flex h-6 w-6 items-center justify-center rounded-full text-[13px] shadow-ios ring-2 ring-white"
            style={{ background: c.color }}
          >
            {c.flag}
          </span>
        );
        const style = {
          left: `${left}%`,
          top: `${top}%`,
          transform: 'translate(-50%, -50%)',
        } as const;
        if (isLocator) {
          return (
            <span
              key={c.id}
              className="absolute"
              style={style}
              title={c.name}
            >
              {pin}
            </span>
          );
        }
        return (
          <Link
            key={c.id}
            href={`/country/${c.id}`}
            className="ios-tap absolute"
            style={style}
            title={c.name}
            aria-label={c.name}
          >
            {pin}
          </Link>
        );
      })}
    </div>
  );
}
