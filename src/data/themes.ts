// 「テーマで読む世界史」——文明を横断する編集視点のエッセイ。
// relatedCountryIds は countries.ts / histories の id と一致させる（内部リンク）。

import type { Reference } from './histories/types';

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
  references?: Reference[];
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
  {
    id: 'climate-environment',
    title: '気候と環境の世界史',
    icon: '🌿',
    tagline: '自然との関わりから、社会の選択を読み直す',
    color: '#32846B',
    colorTo: '#185443',
    intro:
      '川の氾濫、森林の利用、寒冷化、化石燃料。人々は自然環境に適応するだけでなく、農業や都市建設によって環境そのものを変えてきた。ただし、気候の変動だけで王朝の滅亡や戦争を説明することはできない。同じ災害でも、土地制度、備蓄、交易、政治への信頼によって被害は異なる。環境史は自然と社会の相互作用をたどり、人々にどのような選択肢があったのかを考える視点である。',
    sections: [
      {
        heading: '川を利用する社会——灌漑と共同作業',
        body: 'ナイル川の定期的な増水は耕地に肥沃な土をもたらし、メソポタミアでは水路の建設と維持が農業を支えた。灌漑は収穫を増やす一方、水の配分や労働の組織化を課題にした。乾燥地では排水条件によって塩類が土壌に蓄積する問題も起こる。水利施設と国家権力は密接に関わったが、灌漑が必ず専制国家を生むという単純な図式では、村落や都市ごとの多様な運営を捉えられない。',
        relatedCountryIds: ['egypt', 'mesopotamia', 'china'],
      },
      {
        heading: '森林・燃料・土地利用——成長の代価',
        body: '都市の建築、製鉄、船の建造には大量の木材が必要だった。森林の利用は耕地の拡大とも結びつき、地域によっては土壌流出や燃料不足を招いた。一方で、入会地の慣行や植林、伐採規制など、資源を維持する制度も作られた。江戸時代の日本でも森林管理が進んだが、利用や管理の実態には地域差があった。過去の社会を一律に自然と調和した存在とみなすことも、破壊だけで描くことも適切ではない。',
        relatedCountryIds: ['japan', 'uk', 'rome'],
      },
      {
        heading: '寒冷化と危機——気候は何を説明するか',
        body: 'おおむね中世末期から19世紀にかけて、北半球の一部では「小氷期」と呼ばれる寒冷な時期が見られた。17世紀には不作や飢饉が戦争・重税・疫病と重なり、明末の中国やヨーロッパで社会不安を深めた。ただし、寒冷化の時期と程度は地域によって異なり、気候から政治変動へ一直線の因果関係を置くことはできない。救済制度や穀物流通が危機を緩和した場合にも目を向ける必要がある。',
        relatedCountryIds: ['china', 'france', 'germany'],
      },
      {
        heading: '石炭と石油——エネルギーの転換',
        body: 'イギリスの産業化では石炭が重要な動力源となり、蒸気機関と工場生産が拡大した。20世紀には石油を使う自動車や航空機が移動と戦争を変えた。化石燃料は生産力を高める一方、鉱山労働の危険、大気汚染、採掘地での対立を伴った。大気中の温室効果ガスの蓄積も、この長い過程と結びつく。利益と負担が誰に配分されたかを問うことが、エネルギー史を理解する鍵となる。',
        relatedCountryIds: ['uk', 'usa', 'persia'],
      },
      {
        heading: '環境問題の国際化——共通の課題、異なる責任',
        body: '戦後の経済成長は生活を変えたが、水俣病などの公害も生んだ。住民運動や科学者の調査は規制と補償を求める力となった。1972年の国連人間環境会議、1992年の地球サミットを経て、環境問題は国際政治の主要課題になった。歴史的な排出量、貧困からの脱却、資源への依存は国ごとに異なる。国境を越える協力と、被害を受ける地域の意思をどう両立させるかという問いは続いている。',
        relatedCountryIds: ['japan', 'usa', 'india'],
      },
    ],
    relatedCountryIds: ['egypt', 'mesopotamia', 'china', 'japan', 'uk', 'france', 'germany', 'usa', 'persia', 'india'],
    references: [
      { title: 'Global Crisis: War, Climate Change and Catastrophe in the Seventeenth Century', author: 'Geoffrey Parker', publisher: 'Yale University Press' },
      { title: 'Something New Under the Sun: An Environmental History of the Twentieth-Century World', author: 'J. R. McNeill', publisher: 'W. W. Norton' },
    ],
  },
  {
    id: 'food-crops',
    title: '食べ物と作物の世界史',
    icon: '🌽',
    tagline: '食卓の向こうにある、交易・労働・支配の歴史',
    color: '#BF7930',
    colorTo: '#87501D',
    intro:
      'パン、米、ジャガイモ、砂糖、茶。身近な食べ物には、数千年にわたる栽培の工夫と、大陸を越えた移動の歴史が刻まれている。作物の伝播は食生活や人口を変えたが、その背後には征服、強制労働、土地の収奪もあった。何を誰が作り、誰が食べられたのか。食の世界史は、日々の暮らしを世界規模の経済や権力と結びつける。',
    sections: [
      {
        heading: '栽培化と定住——一つではなかった農業の起源',
        body: '西アジアのムギ、中国のアワ・キビやイネ、メソアメリカのトウモロコシ、アンデスのジャガイモなど、作物の栽培化は複数の地域で進んだ。農耕への移行は長い過程であり、狩猟・採集や牧畜も併存した。収穫物の貯蔵は人口集中や分業を支えた一方、食料の偏り、労働負担、富の格差を伴う場合もあった。農業を人類が一斉に登った単一の進歩段階として見ることはできない。',
        relatedCountryIds: ['mesopotamia', 'china', 'aztec', 'inca'],
      },
      {
        heading: '香辛料と海の交易——味覚が結ぶ遠隔地',
        body: 'コショウやクローブなどはインド洋の港を経由して運ばれ、アジア・アラブ・アフリカの商人が交易を担った。香辛料には料理、薬、贈答などの用途があり、高価な品は富や地位の表現ともなった。15世紀末以降のポルトガルの進出は、すでに存在した交易網に軍事力を持ち込んだ出来事でもある。食材の流通はヨーロッパ人の航海によって初めて始まったわけではない。',
        relatedCountryIds: ['india', 'southeast_asia', 'caliphate', 'portugal', 'swahili'],
      },
      {
        heading: 'コロンブスの交換——作物の移動と征服',
        body: '1492年以降、大西洋を越えて生物の移動が拡大した。アメリカ大陸原産のトウモロコシやジャガイモ、トウガラシは各地に定着し、旧大陸からはムギ、サトウキビ、家畜などが運ばれた。新作物は地域の農業や料理を変えたが、土地の収奪と疫病は先住民社会に甚大な損失を与えた。「交換」という語は対等な取引だけを意味せず、征服に伴う著しく不均衡な過程も含んでいる。',
        relatedCountryIds: ['spain', 'portugal', 'aztec', 'inca', 'china'],
      },
      {
        heading: '砂糖と茶——大量消費を支えた労働',
        body: '近世から近代にかけて、砂糖はヨーロッパで広く消費されるようになった。カリブ海やブラジルのサトウキビ農園を支えたのは、奴隷化され大西洋を渡らされたアフリカの人々の労働だった。茶やコーヒーの消費も、植民地経済や交易の拡大と結びついた。商品としての甘さや日常の楽しみと、生産現場の暴力は同じ歴史の中にある。消費地だけでなく、生産者の経験を含めて見る必要がある。',
        relatedCountryIds: ['uk', 'france', 'portugal', 'india', 'china'],
      },
      {
        heading: '飢饉と食料への権利——収穫量だけでは語れない',
        body: '19世紀のアイルランドではジャガイモの病害が大飢饉を引き起こし、死と大規模な移住をもたらした。植民地支配下のインドでも深刻な飢饉が発生した。病害や干ばつに加えて、貧困、土地所有、価格、政府の政策が被害を左右した。地域に食料があっても、買う手段や配給へのアクセスを失えば飢えは起こる。食料史は生産技術とともに、分配や救済の制度を問う歴史でもある。',
        relatedCountryIds: ['uk', 'india', 'usa'],
      },
    ],
    relatedCountryIds: ['mesopotamia', 'china', 'aztec', 'inca', 'india', 'southeast_asia', 'caliphate', 'portugal', 'swahili', 'spain', 'uk', 'france', 'usa'],
    references: [
      { title: 'The Columbian Exchange: Biological and Cultural Consequences of 1492', author: 'Alfred W. Crosby', publisher: 'Greenwood Press' },
      { title: 'Sweetness and Power: The Place of Sugar in Modern History', author: 'Sidney W. Mintz', publisher: 'Viking' },
    ],
  },
  {
    id: 'women-rights',
    title: '女性と権利の歴史',
    icon: '⚖️',
    tagline: '誰が歴史を語り、誰が政治に参加できたのか',
    color: '#A45185',
    colorTo: '#713358',
    intro:
      '国家や戦争を中心にした歴史では、女性たちの労働、知識、政治参加が見えにくくなることがある。だが、女性の境遇は時代・地域・身分によって異なり、一つの物語にはまとめられない。家族や職場での役割、財産への権利、教育、参政権をたどると、社会の仕組みそのものが見えてくる。権利の拡大も一直線に進んだのではなく、獲得と制限、排除と連帯を重ねてきた。',
    sections: [
      {
        heading: '史料に見える女性——王権から日常生活まで',
        body: 'ハトシェプストの統治、則天武后の即位、紫式部の文学は、女性が政治や文化に大きな足跡を残した例である。同時に、例外的な支配者や著名人だけでは、多くの人々の生活は分からない。契約文書、裁判記録、手紙、墓碑、考古資料を読むことで、商売、相続、育児、農業に携わった女性の姿も見えてくる。史料を残しやすい身分とそうでない身分の違いにも注意が必要である。',
        relatedCountryIds: ['egypt', 'china', 'japan'],
      },
      {
        heading: '革命の普遍性と限界——市民に含まれたのは誰か',
        body: 'フランス革命で自由と平等が掲げられた一方、女性には男性と同じ政治的権利が認められなかった。オランプ・ド・グージュは1791年に「女性および女性市民の権利宣言」を著し、この矛盾を問うた。メアリ・ウルストンクラフトも教育と理性を根拠に女性の権利を論じた。こうした主張は、革命や啓蒙の言葉を受け取りながら、その適用範囲を広げようとする試みだった。',
        relatedCountryIds: ['france', 'uk'],
      },
      {
        heading: '働くこと、学ぶこと——工場と家庭のあいだ',
        body: '産業化の時代、多くの女性が工場、家内労働、奉公、農業に従事した。賃金労働が増えても、家事やケアの負担がなくなったわけではない。日本の製糸・紡績業でも女性労働が大きな役割を果たした。女子教育や専門職への道が開かれる一方、階級や人種、植民地支配の有無によって機会は大きく異なった。「家庭の外に出たから解放された」という一つの基準だけでは捉えられない。',
        relatedCountryIds: ['uk', 'japan', 'usa'],
      },
      {
        heading: '参政権運動——異なる道筋と残された排除',
        body: '19世紀から20世紀にかけて、請願、集会、出版、時には直接行動を通じて女性参政権が求められた。イギリスでは1918年に一定条件の女性へ選挙権が認められ、1928年に男性と同条件となった。アメリカでは1920年の憲法修正第19条後も、黒人女性らが実際に投票するには差別的な制度との闘いが続いた。日本では1945年の法改正を経て、翌年の総選挙で女性が初めて投票した。',
        relatedCountryIds: ['uk', 'usa', 'japan'],
      },
      {
        heading: '国際的な権利と日常——制度を変えた後の課題',
        body: '1979年に国連で採択された女性差別撤廃条約は、政治、教育、雇用、家族など幅広い分野で差別の撤廃を求めた。各地の運動は植民地支配、人種差別、貧困への抵抗とも交差してきた。法的な平等が定められても、暴力、賃金格差、無償のケア労働の偏りは残りうる。誰の経験が「女性全体」の声として扱われるのかを問い続けることも、この歴史を読むうえで欠かせない。',
        relatedCountryIds: ['india', 'usa', 'japan', 'france'],
      },
    ],
    relatedCountryIds: ['egypt', 'china', 'japan', 'france', 'uk', 'usa', 'india'],
    references: [
      { title: 'Gender and the Politics of History', author: 'Joan Wallach Scott', publisher: 'Columbia University Press' },
      { title: 'European Feminisms, 1700–1950: A Political History', author: 'Karen Offen', publisher: 'Stanford University Press' },
    ],
  },
  {
    id: 'migration',
    title: '移動と移民の世界史',
    icon: '🧭',
    tagline: '国境を越える人々と、変わり続ける社会',
    color: '#487DA4',
    colorTo: '#2D516D',
    intro:
      '人の移動は世界史の例外ではなく、その基盤の一つである。交易や仕事、信仰、新たな暮らしを求めて旅立つ人がいる一方、奴隷化、戦争、迫害によって故郷を追われた人もいる。移動を自発的か強制的かの二つに完全に分けることは難しい。送り出す地域と受け入れる地域、移動する人と残る家族、そのすべての関係を見つめると、国家の枠だけでは捉えられない歴史が浮かび上がる。',
    sections: [
      {
        heading: '交易路の人々——商人とディアスポラ',
        body: 'シルクロードで活動したソグド商人、インド洋沿岸を結んだアラブ・ペルシア・インドの商人は、遠隔地に拠点や家族のつながりを築いた。言語、信仰、信用のネットワークは取引を支え、移住先の社会と結びつきながら新しい文化を生んだ。スワヒリ海岸の都市文化も、アフリカの社会を基盤に海を越える交流の中で育った。移住者を外から影響を運ぶだけの存在として扱わず、現地の人々との共同の歴史として見ることが大切である。',
        relatedCountryIds: ['china', 'persia', 'india', 'swahili'],
      },
      {
        heading: '強制移動——大西洋奴隷貿易が残したもの',
        body: '16世紀以降、多数のアフリカの人々が奴隷化され、大西洋を越えてアメリカ大陸へ運ばれた。航海と労働の過程で多くの命が失われ、家族や共同体が引き裂かれた。一方、奴隷化された人々は抵抗し、信仰、言語、音楽、生活の知識を組み直して新たな共同体を作った。その文化の創造力を語ることは、移動を強いた暴力や、その後も続いた人種的支配を軽く扱うこととは両立しない。',
        relatedCountryIds: ['portugal', 'spain', 'uk', 'france', 'usa'],
      },
      {
        heading: '19世紀の労働移動——大洋を渡る暮らし',
        body: '蒸気船や鉄道の発達は移動を容易にし、ヨーロッパからアメリカ大陸へ、中国やインドから東南アジアなどへ労働者が移動した。日本からハワイや南北アメリカへの移民も増えた。契約労働は賃金を得る機会をもたらした一方、債務や移動の制限によって強い拘束を伴う場合があった。送金、帰郷、家族の呼び寄せを通じて、移民は出身地との関係を保ち続けた。',
        relatedCountryIds: ['china', 'india', 'southeast_asia', 'japan', 'usa', 'poland'],
      },
      {
        heading: '国境を管理する国家——旅券と排除',
        body: '近代国家は国籍、旅券、入国審査を整え、移動する人々を分類するようになった。アメリカの1882年中国人排斥法は、人種化された排除の代表例である。第一次世界大戦も旅券管理の強化を促した。国境管理はすべての人に同じように作用したわけではなく、人種、国籍、職業、性別によって通過のしやすさは異なった。「自由な移動」が誰に認められたかは、制度の歴史として問う必要がある。',
        relatedCountryIds: ['usa', 'china', 'uk', 'france'],
      },
      {
        heading: '難民と分断——故郷を失う経験をどう支えるか',
        body: '世界大戦、迫害、国境の再編は多数の難民と避難民を生んだ。1947年のインド・パキスタン分離独立でも、宗教共同体間の暴力と大規模な移動が起きた。1951年の難民条約は保護の国際的な枠組みを定め、1967年の議定書が時間的・地理的制限を取り除く方向へ広げた。難民と移民は法的には異なる概念だが、一人の移動には安全と生活を求める複数の理由が重なりうる。',
        relatedCountryIds: ['india', 'germany', 'poland', 'russia'],
      },
    ],
    relatedCountryIds: ['china', 'persia', 'india', 'swahili', 'portugal', 'spain', 'uk', 'france', 'usa', 'southeast_asia', 'japan', 'poland', 'germany', 'russia'],
    references: [
      { title: 'Cultures in Contact: World Migrations in the Second Millennium', author: 'Dirk Hoerder', publisher: 'Duke University Press' },
      { title: 'Melancholy Order: Asian Migration and the Globalization of Borders', author: 'Adam M. McKeown', publisher: 'Columbia University Press' },
    ],
  },

];

export function getTheme(id: string): Theme | undefined {
  return themes.find((t) => t.id === id);
}
