// 「テーマで読む世界史」——文明を横断する編集視点のエッセイ。
// relatedCountryIds は countries.ts / histories の id と一致させる（内部リンク）。

export interface ThemeSection {
  heading: string;
  body: string;
  relatedCountryIds?: string[];
}

export interface Theme {
  id: string;
  title: string;
  icon: string;
  tagline: string;
  color: string;
  colorTo: string;
  intro: string;
  sections: ThemeSection[];
  relatedCountryIds: string[];
}

export const themes: Theme[] = [
  {
    id: 'religions',
    title: '宗教の伝播',
    icon: '☸️',
    tagline: '信仰はいかにして国境を越えたか',
    color: '#5E5CE6',
    colorTo: '#3634A3',
    intro:
      '世界宗教は、それを生んだ社会の枠を越えて広がるとき、世界史を動かす最大級の力となった。交易路・帝国・布教者・翻訳という回路を通じて、仏教・キリスト教・イスラームは大陸を横断し、各地の文化と融合しながら新たな文明圏を生み出していった。',
    sections: [
      {
        heading: '仏教——インドから東アジアへ',
        body: 'インドに生まれた仏教は、アショーカ王の保護で各地へ広がり、シルクロードを通じて中国へ、さらに朝鮮を経て日本へと伝わった。各地で土着の信仰と習合し、禅や浄土信仰など多様な形へと展開した。',
        relatedCountryIds: ['india', 'china', 'korea', 'japan'],
      },
      {
        heading: 'キリスト教——迫害から国教へ',
        body: 'ローマ帝国で迫害されたキリスト教は、4世紀に公認・国教化され、帝国の解体後もヨーロッパを精神的に統合した。東方ではビザンツの正教がスラヴ世界へ広がり、文字（キリル文字）と国家形成を促した。',
        relatedCountryIds: ['rome', 'france', 'uk'],
      },
      {
        heading: 'イスラーム——交易とともに',
        body: '7世紀にアラビアで興ったイスラームは、征服と交易によって西アジア・北アフリカ・中央アジアへ急速に広がった。サハラ交易はマリ帝国に、海の道は東南アジアにイスラームを運び、共通の法と学問の世界を築いた。',
        relatedCountryIds: ['persia', 'ottoman', 'mali'],
      },
    ],
    relatedCountryIds: [
      'india',
      'china',
      'korea',
      'japan',
      'rome',
      'persia',
      'ottoman',
      'mali',
    ],
  },
  {
    id: 'trade',
    title: '交易ネットワーク',
    icon: '🐪',
    tagline: 'シルクロードと海の道が結んだ世界',
    color: '#FF9F0A',
    colorTo: '#FF6B00',
    intro:
      '人・モノ・技術・思想は、交易路に乗って文明から文明へと流れた。砂漠を渡るキャラバン、海を越える船団は、絹・香辛料・銀・黄金だけでなく、宗教・科学・病原菌までも運び、遠く隔たった社会を一つの世界システムへと結びつけていった。',
    sections: [
      {
        heading: 'シルクロード——絹と思想の道',
        body: '漢の張騫の西域派遣に始まる東西交易路は、中国の絹を地中海へ運び、仏教やイスラーム、製紙法を東西に伝えた。モンゴル帝国の成立は全路を一つの支配下に置き、「タタールの平和」のもとで交流を最大化した。',
        relatedCountryIds: ['china', 'persia', 'mongol', 'rome'],
      },
      {
        heading: '海の道——香辛料とモンスーン',
        body: 'インド洋ではモンスーンを利用した交易が古代から栄え、香辛料・陶磁器が往来した。鄭和の大遠征はその頂点を示す。港市国家が各地に栄え、イスラームや文化を広域に伝えた。',
        relatedCountryIds: ['china', 'india', 'ottoman'],
      },
      {
        heading: 'サハラ交易——黄金と塩',
        body: '西アフリカの黄金とサハラの岩塩を交換する隊商交易は、ガーナ・マリ・ソンガイといった大帝国を富ませた。トンブクトゥは交易と学問の中心都市として栄えた。',
        relatedCountryIds: ['mali'],
      },
    ],
    relatedCountryIds: ['china', 'persia', 'mongol', 'india', 'ottoman', 'mali'],
  },
  {
    id: 'empires',
    title: '帝国の興亡',
    icon: '👑',
    tagline: 'なぜ巨大帝国は生まれ、そして滅ぶのか',
    color: '#FF6961',
    colorTo: '#D70015',
    intro:
      '多民族を一つの統治下に束ねる「帝国」は、世界史に繰り返し現れた。優れた行政・軍事・交通網が版図を拡大させる一方、過剰な拡大・財政の破綻・周縁の離反・異民族の移動が、やがて巨大な構造を内側から崩していく。興亡のリズムには共通の論理が見える。',
    sections: [
      {
        heading: '統合の技術',
        body: 'ローマの市民権と道路網、ペルシアの王の道と駅伝制、モンゴルの駅伝（ジャムチ）、中国の科挙と官僚制——帝国は多様な人々を統治する制度的工夫によって支えられた。',
        relatedCountryIds: ['rome', 'persia', 'mongol', 'china'],
      },
      {
        heading: '寛容と支配',
        body: 'アケメネス朝ペルシアやオスマン帝国は、被支配民の宗教・慣習を一定程度認める寛容策で広大な版図を維持した。統治の安定は、画一的な強制よりも多様性の管理にかかっていた。',
        relatedCountryIds: ['persia', 'ottoman'],
      },
      {
        heading: '衰亡の論理',
        body: '財政難、軍事費の膨張、後継者争い、周縁勢力の自立、そして気候変動や疫病。西ローマもオスマンも清も、複合的な要因が重なって解体へ向かった。',
        relatedCountryIds: ['rome', 'ottoman', 'china'],
      },
    ],
    relatedCountryIds: ['rome', 'persia', 'mongol', 'china', 'ottoman', 'inca'],
  },
  {
    id: 'writing',
    title: '文字と記録',
    icon: '📜',
    tagline: '人類はいかにして記憶を外部化したか',
    color: '#30D158',
    colorTo: '#248A3D',
    intro:
      '文字の発明は、口承では失われる知識・法・契約・物語を時空を越えて伝えることを可能にし、国家・官僚制・歴史叙述の前提となった。一方、文字を持たずに巨大帝国を運営した文明もあり、「記録」の形は一つではない。',
    sections: [
      {
        heading: '楔形文字とヒエログリフ',
        body: 'メソポタミアの楔形文字、エジプトのヒエログリフは、人類最古級の文字体系である。徴税・交易・法・神話の記録に用いられ、都市文明と不可分に発展した。',
        relatedCountryIds: ['mesopotamia', 'egypt'],
      },
      {
        heading: '漢字とアルファベット',
        body: '中国の漢字は東アジア文化圏の共通の書記体系となり、日本のかな、朝鮮のハングルを生む土壌となった。一方、地中海ではフェニキア由来のアルファベットが効率的な表音文字として広がった。',
        relatedCountryIds: ['china', 'japan', 'korea', 'greece', 'rome'],
      },
      {
        heading: '文字なき記録——キープ',
        body: 'インカ帝国は文字を持たなかったが、結縄「キープ」によって統計や記録を管理し、広大な版図を運営した。記憶の外部化は文字以外の形でも達成されうることを示す。',
        relatedCountryIds: ['inca'],
      },
    ],
    relatedCountryIds: [
      'mesopotamia',
      'egypt',
      'china',
      'japan',
      'korea',
      'greece',
      'inca',
    ],
  },
  {
    id: 'cities',
    title: '都市と国家の誕生',
    icon: '🏛️',
    tagline: '文明はなぜ大河のほとりに生まれたか',
    color: '#0A84FF',
    colorTo: '#0040DD',
    intro:
      '農耕による余剰生産は、人口の集中と分業、階層、そして都市を生んだ。大河の灌漑を管理する必要が組織的な権力を求め、都市は神殿・市場・城壁を備えた国家の核となった。文明（civilization）の語が「都市（civitas）」に由来するゆえんである。',
    sections: [
      {
        heading: '大河文明',
        body: 'ティグリス・ユーフラテス、ナイル、インダス、黄河——大河の氾濫がもたらす肥沃な土壌が、灌漑農業と都市の発展を支えた。治水と分配の管理が、最初の国家権力を生んだ。',
        relatedCountryIds: ['mesopotamia', 'egypt', 'india', 'china'],
      },
      {
        heading: 'ポリスと市民',
        body: '古代ギリシャでは、王ではなく市民が政治を担う都市国家（ポリス）が生まれ、民主政という統治の実験が行われた。都市は政治共同体そのものでもあった。',
        relatedCountryIds: ['greece', 'rome'],
      },
      {
        heading: '湖上の都市',
        body: 'アステカの都テノチティトランは、湖上に築かれた人口数十万の巨大都市だった。新大陸でも、独自の経路で高度な都市文明が発展していたことを物語る。',
        relatedCountryIds: ['aztec'],
      },
    ],
    relatedCountryIds: [
      'mesopotamia',
      'egypt',
      'india',
      'china',
      'greece',
      'aztec',
    ],
  },
];

export function getTheme(id: string): Theme | undefined {
  return themes.find((t) => t.id === id);
}
