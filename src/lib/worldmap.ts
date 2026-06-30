// 世界地図データ（@svg-maps/world, CC BY 4.0）の型付きラッパー。
// クレジットは地図コンポーネントと編集方針ページに明記する。
import world from '@svg-maps/world';

export interface MapLocation {
  id: string;
  name: string;
  path: string;
}

export interface WorldMapData {
  label: string;
  viewBox: string;
  locations: MapLocation[];
}

export const worldMap = world as unknown as WorldMapData;
