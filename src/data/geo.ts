// 各文明の「中心地」を世界地図（viewBox 0 0 1010 666）上の座標で表す。
// iso = ハイライトする現代の国（@svg-maps/world の id）、x/y = ピンを置く座標。
// 歴史的版図そのものではなく、位置の目安として中心国を示す。

export interface CivGeo {
  iso: string;
  x: number;
  y: number;
}

export const MAP_VIEWBOX = '0 0 1010 666';

export const geo: Record<string, CivGeo> = {
  japan: { iso: 'jp', x: 853.1, y: 356.5 },
  china: { iso: 'cn', x: 767.3, y: 348.2 },
  rome: { iso: 'it', x: 510.1, y: 333.2 },
  egypt: { iso: 'eg', x: 561.3, y: 384.9 },
  greece: { iso: 'gr', x: 542.1, y: 346.6 },
  india: { iso: 'in', x: 707.1, y: 400.5 },
  ottoman: { iso: 'tr', x: 573.8, y: 344.4 },
  france: { iso: 'fr', x: 481.6, y: 316.1 },
  uk: { iso: 'gb', x: 465.9, y: 274.3 },
  usa: { iso: 'us', x: 143.6, y: 291 },
  mesopotamia: { iso: 'iq', x: 597.4, y: 364.2 },
  persia: { iso: 'ir', x: 625.5, y: 366.2 },
  mongol: { iso: 'mn', x: 766.3, y: 313.4 },
  korea: { iso: 'kr', x: 835.4, y: 355.3 },
  aztec: { iso: 'mx', x: 187.1, y: 394.1 },
  inca: { iso: 'pe', x: 264.4, y: 489 },
  mali: { iso: 'ml', x: 463.6, y: 412.7 },
};

export function getGeo(id: string): CivGeo | undefined {
  return geo[id];
}
