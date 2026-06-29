// 年表（ホーム）で使う各国のメタデータ。
// spans = 年表に並べる「存在した時代の帯」。BCは負数。
// 詳細ページの本文は src/data/histories/*.ts に分離。

export type Region =
  | '東アジア'
  | '南アジア'
  | 'ヨーロッパ'
  | '地中海'
  | '中東'
  | 'アメリカ';

export interface CountrySpan {
  start: number;
  end: number;
  label: string;
}

export interface Country {
  id: string;
  name: string;
  flag: string;
  region: Region;
  /** 帯の色（iOSシステムカラー系のグラデ始点） */
  color: string;
  colorTo: string;
  summary: string;
  spans: CountrySpan[];
}

export const REGIONS: Region[] = [
  '東アジア',
  '南アジア',
  '地中海',
  'ヨーロッパ',
  '中東',
  'アメリカ',
];

export const countries: Country[] = [
  {
    id: 'egypt',
    name: '古代エジプト',
    flag: '🇪🇬',
    region: '地中海',
    color: '#FFB340',
    colorTo: '#FF9500',
    summary: 'ナイルの賜物。ピラミッドとファラオの三千年王朝。',
    spans: [
      { start: -3100, end: -332, label: 'ファラオの王朝時代' },
      { start: -332, end: -30, label: 'プトレマイオス朝' },
    ],
  },
  {
    id: 'greece',
    name: '古代ギリシャ',
    flag: '🇬🇷',
    region: '地中海',
    color: '#64D2FF',
    colorTo: '#0A84FF',
    summary: '都市国家と民主政、哲学と神話の源流。',
    spans: [
      { start: -800, end: -323, label: 'ポリス〜古典期' },
      { start: -323, end: -146, label: 'ヘレニズム時代' },
    ],
  },
  {
    id: 'rome',
    name: '古代ローマ',
    flag: '🇮🇹',
    region: '地中海',
    color: '#FF6961',
    colorTo: '#D70015',
    summary: '都市国家から地中海帝国へ。法と道と建築の遺産。',
    spans: [
      { start: -753, end: -509, label: '王政' },
      { start: -509, end: -27, label: '共和政' },
      { start: -27, end: 476, label: '帝政（西）' },
      { start: 330, end: 1453, label: '東ローマ（ビザンツ）' },
    ],
  },
  {
    id: 'china',
    name: '中国',
    flag: '🇨🇳',
    region: '東アジア',
    color: '#FF453A',
    colorTo: '#BF1F14',
    summary: '黄河文明から続く王朝の興亡。統一と分裂の四千年。',
    spans: [
      { start: -1600, end: -256, label: '殷・周' },
      { start: -221, end: 220, label: '秦・漢' },
      { start: 581, end: 907, label: '隋・唐' },
      { start: 960, end: 1279, label: '宋' },
      { start: 1368, end: 1912, label: '明・清' },
      { start: 1912, end: 2050, label: '近現代' },
    ],
  },
  {
    id: 'india',
    name: 'インド',
    flag: '🇮🇳',
    region: '南アジア',
    color: '#FF9F0A',
    colorTo: '#FF6B00',
    summary: 'インダス文明から諸帝国、宗教の生まれた亜大陸。',
    spans: [
      { start: -2600, end: -1900, label: 'インダス文明' },
      { start: -322, end: -185, label: 'マウリヤ朝' },
      { start: 320, end: 550, label: 'グプタ朝' },
      { start: 1526, end: 1858, label: 'ムガル帝国' },
      { start: 1858, end: 2050, label: '英領〜独立' },
    ],
  },
  {
    id: 'japan',
    name: '日本',
    flag: '🇯🇵',
    region: '東アジア',
    color: '#FF375F',
    colorTo: '#E0004D',
    summary: '島国に育った独自の文化。武家政権から近代国家へ。',
    spans: [
      { start: -300, end: 250, label: '弥生' },
      { start: 250, end: 710, label: '古墳・飛鳥' },
      { start: 710, end: 1185, label: '奈良・平安' },
      { start: 1185, end: 1603, label: '鎌倉・室町・戦国' },
      { start: 1603, end: 1868, label: '江戸' },
      { start: 1868, end: 2050, label: '近現代' },
    ],
  },
  {
    id: 'ottoman',
    name: 'オスマン帝国',
    flag: '🇹🇷',
    region: '中東',
    color: '#30D158',
    colorTo: '#248A3D',
    summary: '三大陸にまたがるイスラーム帝国。トルコ共和国へ。',
    spans: [
      { start: 1299, end: 1922, label: 'オスマン帝国' },
      { start: 1923, end: 2050, label: 'トルコ共和国' },
    ],
  },
  {
    id: 'france',
    name: 'フランス',
    flag: '🇫🇷',
    region: 'ヨーロッパ',
    color: '#5E5CE6',
    colorTo: '#3634A3',
    summary: 'フランク王国から革命、共和国へ。文化と革命の国。',
    spans: [
      { start: 481, end: 843, label: 'フランク王国' },
      { start: 987, end: 1789, label: '王国（カペー〜ブルボン）' },
      { start: 1789, end: 1815, label: '革命・ナポレオン' },
      { start: 1815, end: 2050, label: '近現代共和国' },
    ],
  },
  {
    id: 'uk',
    name: 'イギリス',
    flag: '🇬🇧',
    region: 'ヨーロッパ',
    color: '#0A84FF',
    colorTo: '#0040DD',
    summary: '島国から大英帝国へ。議会政治と産業革命の発祥。',
    spans: [
      { start: 927, end: 1066, label: 'イングランド王国成立' },
      { start: 1066, end: 1485, label: 'ノルマン〜中世' },
      { start: 1485, end: 1707, label: 'テューダー・スチュアート' },
      { start: 1707, end: 1922, label: '大英帝国' },
      { start: 1922, end: 2050, label: '現代' },
    ],
  },
  {
    id: 'usa',
    name: 'アメリカ',
    flag: '🇺🇸',
    region: 'アメリカ',
    color: '#64D2FF',
    colorTo: '#0A84FF',
    summary: '13植民地から独立、超大国へ。近代民主主義の実験場。',
    spans: [
      { start: 1607, end: 1776, label: '植民地時代' },
      { start: 1776, end: 1865, label: '建国・南北戦争' },
      { start: 1865, end: 2050, label: '工業化〜超大国' },
    ],
  },
];

export function getCountry(id: string): Country | undefined {
  return countries.find((c) => c.id === id);
}
