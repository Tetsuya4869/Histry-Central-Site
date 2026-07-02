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
  {
    id: 'exploration',
    title: '大航海時代',
    icon: '⛵',
    tagline: '海が世界を一つにつないだ時代',
    color: '#0AA5C9',
    colorTo: '#0A6E8C',
    intro:
      '15〜17世紀、ヨーロッパの船乗りたちが大洋へ乗り出し、それまで隔てられていた大陸が初めて恒常的に結びついた。香辛料と黄金への欲望、そして信仰の拡大が原動力となり、人・作物・銀・病原菌が地球規模で移動する「世界の一体化」が始まった。',
    sections: [
      {
        heading: 'イベリア半島からの船出',
        body: 'ポルトガルがアフリカ西岸からインド航路を開き、スペインはコロンブスを西へ送って「新大陸」に到達した。トルデシリャス条約で両国は世界を二分し、最初の地球規模の帝国を築いた。',
        relatedCountryIds: ['spain'],
      },
      {
        heading: '新大陸とコロンブスの交換',
        body: '征服者（コンキスタドール）がアステカ・インカを滅ぼし、銀山と先住民労働力が世界経済に組み込まれた。トウモロコシ・ジャガイモが世界へ、馬・病原菌が新大陸へ渡る「コロンブスの交換」が起きた。',
        relatedCountryIds: ['spain', 'aztec', 'inca'],
      },
      {
        heading: 'アジアの海と香辛料',
        body: '東南アジアの香辛料を求めて、ヨーロッパ勢はインド洋・南シナ海の交易網に参入した。明の鄭和の大遠征はそれに先立つ壮挙であり、海の道は東西交流の大動脈であり続けた。',
        relatedCountryIds: ['southeast_asia', 'china', 'india', 'ottoman'],
      },
    ],
    relatedCountryIds: [
      'spain',
      'uk',
      'france',
      'aztec',
      'inca',
      'southeast_asia',
      'china',
    ],
  },
  {
    id: 'industrial',
    title: '産業革命',
    icon: '⚙️',
    tagline: '機械が世界を作り変えた',
    color: '#6E7681',
    colorTo: '#454C54',
    intro:
      '18世紀後半、イギリスに始まった機械化と工場制は、人類が初めて経験する持続的な経済成長をもたらした。蒸気機関と石炭が生産力を飛躍させ、都市・階級・国家のあり方を根底から変え、近代世界の物質的基盤を築いた。',
    sections: [
      {
        heading: 'イギリスから始まった',
        body: '豊富な石炭、海外市場、資本と労働力が揃ったイギリスで、綿工業と蒸気機関を軸に産業革命が始まった。「世界の工場」として圧倒的な経済力を握った。',
        relatedCountryIds: ['uk'],
      },
      {
        heading: '世界への波及',
        body: '工業化はドイツ・アメリカへ広がり、両国は19世紀末に新興工業国として台頭した。アジアでは日本が明治維新後にいち早く産業化を遂げ、非西洋圏の例外となった。',
        relatedCountryIds: ['germany', 'usa', 'france', 'japan'],
      },
      {
        heading: '光と影',
        body: '生産力の増大は労働者階級と都市問題、社会主義思想を生んだ。同時に、原料と市場を求める工業国の膨張は、後の帝国主義と植民地支配を加速させた。',
        relatedCountryIds: ['uk', 'india'],
      },
    ],
    relatedCountryIds: ['uk', 'germany', 'usa', 'japan', 'france', 'india'],
  },
  {
    id: 'imperialism',
    title: '帝国主義と脱植民地化',
    icon: '🌐',
    tagline: '世界の分割と、独立への長い道',
    color: '#C98A2E',
    colorTo: '#9A6418',
    intro:
      '工業化した列強は、19世紀後半に原料・市場・威信を求めてアジア・アフリカをほぼ残らず分割した。だが植民地支配は同時に、近代教育とナショナリズムを通じて、20世紀の独立運動という反作用を生み出した。',
    sections: [
      {
        heading: '世界の分割',
        body: 'イギリス・フランスを筆頭に、列強はアフリカを地図上で分割し、アジアの大半を植民地・勢力圏に組み込んだ。かつての大帝国スペインも新大陸の植民地を長く維持した。',
        relatedCountryIds: ['uk', 'france', 'spain'],
      },
      {
        heading: '抵抗と独立',
        body: 'インドのガンディーに代表される非暴力運動、東南アジアやアフリカの民族運動が独立を求めた。第二次大戦後、植民地は次々と主権国家として独立を達成した。',
        relatedCountryIds: ['india', 'southeast_asia', 'mali'],
      },
      {
        heading: '残された課題',
        body: '恣意的に引かれた国境、経済的従属、民族対立など、植民地支配の遺産は独立後も新興国を苦しめた。「南北問題」は現代世界の構造的課題であり続けている。',
        relatedCountryIds: ['india', 'mali', 'southeast_asia'],
      },
    ],
    relatedCountryIds: [
      'uk',
      'france',
      'spain',
      'india',
      'southeast_asia',
      'mali',
    ],
  },
  {
    id: 'worldwars',
    title: '二つの世界大戦',
    icon: '⚔️',
    tagline: '20世紀を引き裂いた総力戦',
    color: '#D7453A',
    colorTo: '#A01810',
    intro:
      '20世紀前半、ナショナリズム・帝国主義・同盟網のもつれが、史上初の「世界規模の総力戦」を二度引き起こした。国家の全資源を動員する戦争は数千万の命を奪い、世界の勢力図と価値観を一変させた。',
    sections: [
      {
        heading: '第一次世界大戦',
        body: 'バルカンの火種から始まった大戦は、塹壕戦と新兵器による未曾有の消耗戦となった。ドイツ帝国・オスマン帝国・ロシア帝国が崩壊し、ヨーロッパの没落とアメリカの台頭を決定づけた。',
        relatedCountryIds: ['germany', 'france', 'uk', 'ottoman', 'russia'],
      },
      {
        heading: '戦間期とファシズム',
        body: '世界恐慌のなか、ドイツではナチスが台頭し、日本も大陸侵攻を進めた。ヴェルサイユ体制の不安定さと全体主義の拡大が、次の大戦への道を開いた。',
        relatedCountryIds: ['germany', 'japan'],
      },
      {
        heading: '第二次世界大戦',
        body: 'ヨーロッパとアジア・太平洋で同時に戦われた大戦は、ホロコーストと原爆という悲劇を生んだ。連合国の勝利は植民地帝国の終焉と米ソ二極時代の幕開けをもたらした。',
        relatedCountryIds: ['germany', 'japan', 'usa', 'uk', 'russia', 'france'],
      },
    ],
    relatedCountryIds: [
      'germany',
      'france',
      'uk',
      'russia',
      'usa',
      'japan',
      'ottoman',
    ],
  },
  {
    id: 'coldwar',
    title: '冷戦',
    icon: '❄️',
    tagline: '核の影のもとの半世紀',
    color: '#4F6D9C',
    colorTo: '#32486E',
    intro:
      '第二次大戦後、アメリカとソ連という二つの超大国が、直接戦火を交えないまま世界を二分して対峙した。核兵器の恐怖、イデオロギーの対立、代理戦争が、約半世紀にわたり国際政治を規定した。',
    sections: [
      {
        heading: '二極化する世界',
        body: '資本主義の西側と社会主義の東側が、軍事同盟（NATO・ワルシャワ条約機構）と核軍拡で対峙した。直接戦争を避けつつ世界規模で影響圏を争った。',
        relatedCountryIds: ['usa', 'russia'],
      },
      {
        heading: '分断の最前線',
        body: 'ドイツはベルリンの壁で東西に分かたれ、朝鮮半島は戦争を経て南北に分断された。これらは冷戦の対立を地上に刻んだ象徴であった。',
        relatedCountryIds: ['germany', 'korea'],
      },
      {
        heading: '代理戦争と終焉',
        body: 'ベトナムなどアジアで熱戦が戦われる一方、中国は独自路線を歩んだ。1989年の東欧革命とソ連の崩壊で冷戦は終わり、世界は新たな秩序を模索することになった。',
        relatedCountryIds: ['southeast_asia', 'china', 'russia'],
      },
    ],
    relatedCountryIds: [
      'usa',
      'russia',
      'germany',
      'korea',
      'china',
      'southeast_asia',
    ],
  },
  {
    id: 'science',
    title: '科学革命とルネサンス',
    icon: '🔭',
    tagline: '知はいかにして受け継がれ、世界像を塗り替えたか',
    color: '#AF52DE',
    colorTo: '#7B2FA6',
    intro:
      '近代科学は突然生まれたのではない。ギリシアの哲学と数学はイスラーム世界で翻訳・発展され、ルネサンス期のヨーロッパへ還流した。活版印刷が知の流通を爆発的に速め、観測と実験に基づく「科学革命」が、天と地の秩序をめぐる世界像を根本から塗り替えた。',
    sections: [
      {
        heading: 'ギリシアの遺産とイスラームの継承',
        body: 'アリストテレスの哲学、ユークリッドの幾何学、プトレマイオスの天文学——ギリシアの知は、アッバース朝バグダードの「知恵の館」でアラビア語に翻訳され、代数学や医学として発展した。イブン・スィーナーらの学問は、やがてラテン語訳を通じてヨーロッパの大学へ流れ込んだ。',
        relatedCountryIds: ['greece', 'caliphate', 'persia'],
      },
      {
        heading: 'ルネサンス——古典の復興と印刷革命',
        body: 'イタリアの都市で古代ギリシア・ローマの文化を復興する運動が興り、レオナルド・ダ・ヴィンチらが芸術と観察を融合させた。グーテンベルクの活版印刷は書物を安価に大量複製し、新しい知と聖書を国境を越えて広め、宗教改革の追い風ともなった。',
        relatedCountryIds: ['rome', 'spain', 'germany'],
      },
      {
        heading: '科学革命——観測と実験の時代',
        body: 'コペルニクスの地動説をガリレイが観測で支え、ニュートンが万有引力の法則で天と地の運動を一つの数学で説明した。デカルトの合理論や王立協会などの学術団体が方法と制度を整え、科学は啓蒙思想と産業革命への道を開いた。',
        relatedCountryIds: ['uk', 'france', 'germany'],
      },
    ],
    relatedCountryIds: [
      'greece',
      'caliphate',
      'persia',
      'rome',
      'spain',
      'germany',
      'uk',
      'france',
    ],
  },
  {
    id: 'plague',
    title: '疫病の世界史',
    icon: '🦠',
    tagline: '目に見えぬ病原体が歴史を動かした',
    color: '#8E8E93',
    colorTo: '#5A5A5E',
    intro:
      '交易路と帝国が世界を結ぶほど、病原体もまた速く遠くへ運ばれた。黒死病は中世ヨーロッパの社会構造を揺るがし、天然痘は新大陸の帝国を内側から崩し、コレラやインフルエンザは近代国家に公衆衛生という新しい統治の課題を突きつけた。疫病は世界史の隠れた主役である。',
    sections: [
      {
        heading: '黒死病とユーラシア',
        body: 'モンゴル帝国が陸の交易路を一体化した14世紀、ペスト（黒死病）は中国から中央アジアを経て地中海・ヨーロッパへ達し、ヨーロッパでは人口の3分の1前後が失われたとされる。労働力の激減は農奴制の動揺と荘園制の解体を早め、中世社会の転換点となった。',
        relatedCountryIds: ['mongol', 'china', 'uk', 'france'],
      },
      {
        heading: 'コロンブスの交換と新大陸',
        body: '大航海時代、旧大陸から持ち込まれた天然痘や麻疹は、免疫を持たない先住民の間で猛威を振るった。アステカ・インカの征服は、少数のスペイン人の武力だけでなく、疫病による人口の激減によって決定づけられた面が大きい。',
        relatedCountryIds: ['spain', 'aztec', 'inca'],
      },
      {
        heading: '近代公衆衛生とパンデミック',
        body: '19世紀、コレラの流行は上下水道の整備や疫学の誕生を促し、ロンドンのスノウの調査は感染源の特定という手法を確立した。20世紀初頭のインフルエンザ（スペインかぜ）は世界で数千万人の命を奪い、感染症対策が国際協力の課題であることを示した。',
        relatedCountryIds: ['uk', 'usa', 'india'],
      },
    ],
    relatedCountryIds: [
      'mongol',
      'china',
      'uk',
      'france',
      'spain',
      'aztec',
      'inca',
      'usa',
      'india',
    ],
  },
];

export function getTheme(id: string): Theme | undefined {
  return themes.find((t) => t.id === id);
}
