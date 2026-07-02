// 年表（ホーム）で使う各国のメタデータ。
// spans = 年表に並べる「存在した時代の帯」。BCは負数。
// 詳細ページの本文は src/data/histories/*.ts に分離。

export type Region =
  | '東アジア'
  | '東南アジア'
  | '南アジア'
  | 'ヨーロッパ'
  | '東欧・ロシア'
  | '地中海'
  | '中東'
  | '中央ユーラシア'
  | 'アフリカ'
  | 'メソアメリカ'
  | 'アンデス'
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
  '東南アジア',
  '南アジア',
  '地中海',
  'ヨーロッパ',
  '東欧・ロシア',
  '中東',
  '中央ユーラシア',
  'アフリカ',
  'メソアメリカ',
  'アンデス',
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
  {
    id: 'mesopotamia',
    name: 'メソポタミア',
    flag: '🏺',
    region: '中東',
    color: '#C99A5B',
    colorTo: '#8B5E2A',
    summary: '文明のゆりかご。文字・法・都市が初めて生まれた肥沃な三日月地帯。',
    spans: [
      { start: -3500, end: -2334, label: 'シュメール都市国家' },
      { start: -2334, end: -1595, label: 'アッカド・バビロン第1王朝' },
      { start: -911, end: -539, label: 'アッシリア・新バビロニア' },
    ],
  },
  {
    id: 'persia',
    name: 'ペルシア',
    flag: '🇮🇷',
    region: '中東',
    color: '#2EC4B6',
    colorTo: '#168C82',
    summary: 'アケメネスからイランへ。多民族を束ねた寛容な大帝国の系譜。',
    spans: [
      { start: -550, end: -330, label: 'アケメネス朝' },
      { start: -247, end: 224, label: 'パルティア' },
      { start: 224, end: 651, label: 'ササン朝' },
      { start: 1501, end: 1736, label: 'サファヴィー朝' },
      { start: 1925, end: 2050, label: '近代イラン' },
    ],
  },
  {
    id: 'mongol',
    name: 'モンゴル帝国',
    flag: '🇲🇳',
    region: '中央ユーラシア',
    color: '#6E7F94',
    colorTo: '#44546A',
    summary: 'ユーラシアを席巻した史上最大の陸上帝国。東西を一つに結んだ。',
    spans: [
      { start: 1206, end: 1294, label: '大モンゴル帝国' },
      { start: 1294, end: 1368, label: '諸ハン国・元' },
    ],
  },
  {
    id: 'korea',
    name: '朝鮮',
    flag: '🇰🇷',
    region: '東アジア',
    color: '#3EA8DE',
    colorTo: '#1F6FA0',
    summary: '中国と日本のあいだで独自の文化を磨いた半島の王朝史。',
    spans: [
      { start: -57, end: 668, label: '三国時代' },
      { start: 668, end: 935, label: '統一新羅' },
      { start: 918, end: 1392, label: '高麗' },
      { start: 1392, end: 1910, label: '朝鮮王朝' },
      { start: 1910, end: 2050, label: '近現代' },
    ],
  },
  {
    id: 'aztec',
    name: 'メソアメリカ',
    flag: '🦅',
    region: 'メソアメリカ',
    color: '#1FA98A',
    colorTo: '#147A63',
    summary: '中米に栄えた都市文明。マヤの暦とアステカの湖上都市。',
    spans: [
      { start: -1200, end: -400, label: 'オルメカ文明' },
      { start: 250, end: 900, label: 'マヤ（古典期）' },
      { start: 1345, end: 1521, label: 'アステカ帝国' },
    ],
  },
  {
    id: 'inca',
    name: 'インカ',
    flag: '🏔️',
    region: 'アンデス',
    color: '#CC7A3B',
    colorTo: '#A65322',
    summary: '文字なき大帝国。アンデスの空に道と石組みを張り巡らせた。',
    spans: [
      { start: -900, end: -200, label: 'チャビン文化' },
      { start: 100, end: 700, label: 'モチェ・ナスカ' },
      { start: 1438, end: 1533, label: 'インカ帝国' },
    ],
  },
  {
    id: 'mali',
    name: 'マリ帝国',
    flag: '🇲🇱',
    region: 'アフリカ',
    color: '#D4A017',
    colorTo: '#A87D0A',
    summary: '黄金と学問の西アフリカ。サハラ交易が育てた大帝国。',
    spans: [
      { start: 700, end: 1240, label: 'ガーナ王国' },
      { start: 1235, end: 1610, label: 'マリ帝国' },
      { start: 1464, end: 1591, label: 'ソンガイ帝国' },
    ],
  },
  {
    id: 'caliphate',
    name: 'イスラーム帝国',
    flag: '🕌',
    region: '中東',
    color: '#16A085',
    colorTo: '#0E7059',
    summary: 'アラビアから三大陸へ。コーランと学問が結んだ大帝国。',
    spans: [
      { start: 632, end: 661, label: '正統カリフ時代' },
      { start: 661, end: 750, label: 'ウマイヤ朝' },
      { start: 750, end: 1258, label: 'アッバース朝' },
    ],
  },
  {
    id: 'germany',
    name: 'ドイツ',
    flag: '🇩🇪',
    region: 'ヨーロッパ',
    color: '#566273',
    colorTo: '#39434F',
    summary: '神聖ローマ帝国から統一国家へ。哲学と科学、二つの大戦の震源。',
    spans: [
      { start: 962, end: 1806, label: '神聖ローマ帝国' },
      { start: 1701, end: 1871, label: 'プロイセンの台頭' },
      { start: 1871, end: 1918, label: 'ドイツ帝国' },
      { start: 1919, end: 1945, label: 'ヴァイマル〜ナチス' },
      { start: 1949, end: 2050, label: '分断と統一' },
    ],
  },
  {
    id: 'spain',
    name: 'スペイン',
    flag: '🇪🇸',
    region: 'ヨーロッパ',
    color: '#CC3B47',
    colorTo: '#9E2530',
    summary: 'レコンキスタと大航海。太陽の沈まぬ最初の世界帝国。',
    spans: [
      { start: 418, end: 711, label: '西ゴート王国' },
      { start: 711, end: 1492, label: 'アル＝アンダルス（イスラム期）' },
      { start: 1492, end: 1898, label: 'スペイン帝国' },
      { start: 1898, end: 2050, label: '近現代' },
    ],
  },
  {
    id: 'russia',
    name: 'ロシア',
    flag: '🇷🇺',
    region: '東欧・ロシア',
    color: '#5B6BB0',
    colorTo: '#374488',
    summary: 'キエフ・ルーシからソ連、そして連邦へ。ユーラシアの巨大国家。',
    spans: [
      { start: 882, end: 1240, label: 'キエフ・ルーシ' },
      { start: 1283, end: 1547, label: 'モスクワ大公国' },
      { start: 1547, end: 1917, label: 'ロシア帝国' },
      { start: 1922, end: 1991, label: 'ソビエト連邦' },
      { start: 1991, end: 2050, label: 'ロシア連邦' },
    ],
  },
  {
    id: 'southeast_asia',
    name: '東南アジア',
    flag: '🛕',
    region: '東南アジア',
    color: '#E08A2E',
    colorTo: '#B5611C',
    summary: 'アンコールと海の交易帝国。インドと中国が交わる十字路。',
    spans: [
      { start: 100, end: 550, label: '扶南・初期国家' },
      { start: 650, end: 1377, label: 'シュリーヴィジャヤ' },
      { start: 802, end: 1431, label: 'アンコール朝（クメール）' },
      { start: 1293, end: 1527, label: 'マジャパヒト王国' },
      { start: 1511, end: 2050, label: '植民地〜近現代' },
    ],
  },
];

export function getCountry(id: string): Country | undefined {
  return countries.find((c) => c.id === id);
}
