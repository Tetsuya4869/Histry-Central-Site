import type { Figure } from '@/data/histories/types';

/** 詳細ページの主要人物カード（横スクロールカルーセルの1枚） */
export default function KeyFigureCard({
  figure,
  color,
  colorTo,
}: {
  figure: Figure;
  color: string;
  colorTo: string;
}) {
  return (
    <div className="w-[180px] shrink-0 rounded-ios bg-ios-card p-4 shadow-ios">
      <div
        className="mb-3 flex h-11 w-11 items-center justify-center rounded-full text-[15px] font-bold text-white"
        style={{ background: `linear-gradient(135deg, ${color}, ${colorTo})` }}
      >
        {figure.name.slice(0, 1)}
      </div>
      <h4 className="text-[15px] font-semibold text-ios-text">{figure.name}</h4>
      <p className="text-[12px] font-medium text-ios-blue">{figure.role}</p>
      <p className="mt-1 text-[12px] leading-snug text-ios-text-2">
        {figure.note}
      </p>
    </div>
  );
}
