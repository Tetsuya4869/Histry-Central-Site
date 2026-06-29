// 年表（横スクロール）の年→X座標スケール変換と目盛り生成。
// 年は西暦。紀元前は負数（例: -753 = 紀元前753年）。年「0」は存在しないが
// 連続スケールとして扱って問題ない（表示上は便宜的）。

export const TIMELINE_START = -3500; // 紀元前3500年ごろ（メソポタミア/エジプト文明の黎明）
export const TIMELINE_END = 2050; // 現代の少し先まで

// 1年あたりのピクセル幅。スケールは「最近ほど密」にせず線形で俯瞰しやすく。
export const PX_PER_YEAR = 0.42;

export const TIMELINE_WIDTH = (TIMELINE_END - TIMELINE_START) * PX_PER_YEAR;

/** 年→年表内のX座標(px) */
export function yearToX(year: number): number {
  const clamped = Math.max(TIMELINE_START, Math.min(TIMELINE_END, year));
  return (clamped - TIMELINE_START) * PX_PER_YEAR;
}

/** 期間→バーの left / width(px) */
export function spanToRect(start: number, end: number): { left: number; width: number } {
  const left = yearToX(start);
  const right = yearToX(end);
  return { left, width: Math.max(6, right - left) };
}

/** 年を日本語ラベルに（例: -753 → "BC753", 1600 → "1600"） */
export function formatYear(year: number): string {
  if (year < 0) return `BC${Math.abs(year)}`;
  if (year === 0) return '0';
  return `${year}`;
}

export interface Tick {
  year: number;
  x: number;
  label: string;
  major: boolean;
}

/** 年代目盛りを生成（500年ごとに主目盛り、節目を強調） */
export function generateTicks(): Tick[] {
  const ticks: Tick[] = [];
  const step = 500;
  // 起点を 500 の倍数に丸める
  const first = Math.ceil(TIMELINE_START / step) * step;
  for (let y = first; y <= TIMELINE_END; y += step) {
    ticks.push({
      year: y,
      x: yearToX(y),
      label: formatYear(y),
      major: true,
    });
  }
  // 西暦0(紀元)を強調目盛りとして追加
  ticks.push({ year: 0, x: yearToX(0), label: '紀元', major: true });
  return ticks.sort((a, b) => a.x - b.x);
}
