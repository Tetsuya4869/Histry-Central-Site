export const QUIZ_CATEGORIES = ['古代', '中世・近世', '近現代'] as const;
export type QuizCategory = (typeof QUIZ_CATEGORIES)[number];

export interface QuizQuestion {
  id: string;
  category: QuizCategory;
  question: string;
  choices: [string, string, string, string];
  answer: number;
  explanation: string;
  reading: { href: string; label: string };
}

/** 問題文の年代・用語は各文明ページとあわせて学べる範囲に限定する。 */
export const quizQuestions: QuizQuestion[] = [
  {
    id: 'cuneiform', category: '古代',
    question: 'メソポタミアで粘土板に刻まれ、会計や行政にも使われた文字は？',
    choices: ['楔形文字', 'ハングル', 'キリル文字', 'ラテン文字'], answer: 0,
    explanation: '楔形文字は紀元前4千年紀末のメソポタミアで成立しました。物資の記録をはじめ、法律・文学などにも使われました。',
    reading: { href: '/country/mesopotamia', label: 'メソポタミアの歴史' },
  },
  {
    id: 'nile', category: '古代', question: '古代エジプトの農業と交通を支えた川は？',
    choices: ['インダス川', 'ナイル川', '黄河', 'チグリス川'], answer: 1,
    explanation: 'ナイル川の増水は流域に肥沃な土を運び、農業を支えました。川の水運は南北に長い領域を結ぶ役割も担いました。',
    reading: { href: '/country/egypt', label: '古代エジプトの歴史' },
  },
  {
    id: 'athens', category: '古代', question: '古代アテネの民主政について正しい説明は？',
    choices: ['すべての住民に参政権があった', '王が議会の全議員を任命した', '市民男性が参加したが、女性や奴隷などは除かれた', '身分にかかわらず全員が選挙で代表を選んだ'], answer: 2,
    explanation: '民会には市民男性が参加しましたが、女性・奴隷・在留外国人は政治参加から排除されました。現代の普通選挙とは範囲も仕組みも異なります。',
    reading: { href: '/country/greece', label: '古代ギリシャの歴史' },
  },
  {
    id: 'qin', category: '古代', question: '紀元前221年に中国を統一し、皇帝の称号を用いたのは？',
    choices: ['漢の武帝', '唐の太宗', '明の洪武帝', '秦の始皇帝'], answer: 3,
    explanation: '秦の始皇帝は戦国諸国を征服して統一し、郡県制や文字・度量衡の統一を進めました。秦は短命でも、その統治制度は後代に影響しました。',
    reading: { href: '/country/china', label: '中国の歴史' },
  },
  {
    id: 'ashoka', category: '古代', question: 'カリンガ征服後、ダルマによる統治を掲げ、仏教を保護した王は？',
    choices: ['アショーカ王', 'アクバル', 'チャンドラグプタ2世', 'スレイマン1世'], answer: 0,
    explanation: 'マウリヤ朝のアショーカ王は、カリンガ征服の惨禍への悔いを碑文に記し、ダルマを掲げました。その政策には宗教間の寛容も含まれます。',
    reading: { href: '/country/india', label: 'インドの歴史' },
  },
  {
    id: 'roman-republic', category: '古代', question: '古代ローマの共和政期に、毎年原則2人が選ばれた最高政務官は？',
    choices: ['ファラオ', '執政官（コンスル）', 'カリフ', '将軍（ショーグン）'], answer: 1,
    explanation: '執政官は軍事・行政を担い、複数制と短い任期によって権力の集中を抑える仕組みでした。ただし、共和政末期には内乱が続きました。',
    reading: { href: '/country/rome', label: '古代ローマの歴史' },
  },
  {
    id: 'persian-road', category: '古代', question: 'アケメネス朝ペルシアが広い領域の連絡を支えるために整備したものは？',
    choices: ['蒸気鉄道', '大西洋海底電線', '王の道と駅伝制度', 'パナマ運河'], answer: 2,
    explanation: '道路と駅伝による連絡網は、各地の総督を介した帝国統治を支えました。ダレイオス1世の統治改革とあわせて理解すると、帝国運営の工夫が見えてきます。',
    reading: { href: '/country/persia', label: 'ペルシアの歴史' },
  },
  {
    id: 'silk-road', category: '古代', question: '古代の東西交流路「シルクロード」について最も適切なのは？',
    choices: ['一本の舗装道路だけを指す', '絹だけを運び、思想は伝えなかった', 'ローマ皇帝が中国まで直接支配した', '複数の交易路と中継地を結ぶネットワークだった'], answer: 3,
    explanation: 'シルクロードは後世の呼び名で、複数の陸路を結ぶ交易網を指します。品物とともに宗教や技術も、さまざまな仲介者を通じて伝わりました。',
    reading: { href: '/themes/trade', label: '交易ネットワーク' },
  },
  {
    id: 'japan-rice', category: '古代', question: '日本列島の弥生時代を考えるうえで、重要な変化は？',
    choices: ['水田稲作の広がり', '蒸気機関の普及', 'キリスト教の公認', '議院内閣制の成立'], answer: 0,
    explanation: '水田稲作は大陸から伝わり、地域ごとに時期や形を変えながら広がりました。生産や集落の変化は、社会の階層化とも関わりました。',
    reading: { href: '/country/japan', label: '日本の歴史' },
  },
  {
    id: 'maya', category: '古代', question: 'マヤ文明で発達したものの組み合わせは？',
    choices: ['火薬と蒸気船', '文字と暦', '活版印刷と望遠鏡', '鉄道と電信'], answer: 1,
    explanation: 'マヤの諸都市では、文字による王朝記録や精密な暦・天文知識が発達しました。単一の統一帝国ではなく、多くの都市国家が競合しました。',
    reading: { href: '/country/aztec', label: 'メソアメリカの歴史' },
  },
  {
    id: 'hijra', category: '中世・近世', question: '622年、ムハンマドらがメッカからメディナへ移住した出来事を何という？',
    choices: ['レコンキスタ', 'ルネサンス', 'ヒジュラ', '宗教改革'], answer: 2,
    explanation: 'ヒジュラはイスラーム共同体形成の転機となりました。イスラーム暦はこの年を紀元としますが、太陰暦なので西暦と年の長さが異なります。',
    reading: { href: '/country/caliphate', label: 'イスラーム帝国の歴史' },
  },
  {
    id: 'baghdad', category: '中世・近世', question: 'アッバース朝の都として栄え、翻訳や学問の中心となった都市は？',
    choices: ['テノチティトラン', '平安京', 'クスコ', 'バグダード'], answer: 3,
    explanation: '762年に建設されたバグダードは、政治と交易、学問の中心地として発展しました。ギリシャ語などの文献の翻訳・研究も進みました。',
    reading: { href: '/country/caliphate', label: 'イスラーム帝国の歴史' },
  },
  {
    id: 'magna-carta', category: '中世・近世', question: '1215年、イングランド王ジョンに承認させた文書は？',
    choices: ['マグナ・カルタ', '人権宣言', '独立宣言', 'ヴェルサイユ条約'], answer: 0,
    explanation: 'マグナ・カルタは貴族らの権利を確認し、王権に一定の制約を設けました。当初からすべての人の平等を定めた文書ではありません。',
    reading: { href: '/country/uk', label: 'イギリスの歴史' },
  },
  {
    id: 'mongol', category: '中世・近世', question: '1206年にモンゴルの諸部族を統合して大ハンとなった人物は？',
    choices: ['フビライ', 'チンギス・ハン', 'ティムール', 'バーブル'], answer: 1,
    explanation: 'テムジンは1206年にチンギス・ハンとなりました。後継者たちの征服で帝国はさらに拡大し、ユーラシアの交流と支配のあり方を変えました。',
    reading: { href: '/country/mongol', label: 'モンゴル帝国の歴史' },
  },
  {
    id: 'mansa-musa', category: '中世・近世', question: '1324年にメッカ巡礼を行い、マリ帝国の富を広く知らしめた皇帝は？',
    choices: ['アショーカ王', 'スンジャタ・ケイタ', 'マンサ・ムーサ', 'モンテスマ2世'], answer: 2,
    explanation: 'マンサ・ムーサの巡礼は、サハラ交易で栄えたマリの存在を広く伝えました。帝国内のトンブクトゥなどでは、交易とイスラーム学問が発達しました。',
    reading: { href: '/country/mali', label: 'マリ帝国の歴史' },
  },
  {
    id: 'hangul', category: '中世・近世', question: '15世紀、朝鮮で訓民正音（ハングル）の創製を主導した王は？',
    choices: ['李成桂', '光武帝', '高宗', '世宗'], answer: 3,
    explanation: '世宗のもとで1443年に創製され、1446年に公布されました。朝鮮語を表記する文字として考案され、読み書きのあり方に長く影響しました。',
    reading: { href: '/country/korea', label: '朝鮮の歴史' },
  },
  {
    id: 'constantinople', category: '中世・近世', question: '1453年、コンスタンティノープルを征服した勢力は？',
    choices: ['オスマン帝国', 'アケメネス朝', 'マウリヤ朝', 'マリ帝国'], answer: 0,
    explanation: 'メフメト2世率いるオスマン軍が征服し、東ローマ帝国は終わりました。この都市はその後、オスマン帝国の首都として発展しました。',
    reading: { href: '/country/ottoman', label: 'オスマン帝国の歴史' },
  },
  {
    id: 'printing', category: '中世・近世', question: '15世紀半ばのヨーロッパで、グーテンベルクが発展させた技術は？',
    choices: ['製紙法の最初の発明', '金属活字を用いた印刷', '電信', '写真術'], answer: 1,
    explanation: '金属活字と印刷機による書物の大量生産は、知識の流通を変えました。印刷や活字には、ヨーロッパに先立つ東アジアの歴史もあります。',
    reading: { href: '/themes/writing', label: '文字と記録のテーマ史' },
  },
  {
    id: 'columbian', category: '中世・近世', question: 'コロンブス以後の大西洋交流で、アメリカ大陸から他地域へ広がった作物は？',
    choices: ['コムギ', 'イネ', 'ジャガイモ', 'オオムギ'], answer: 2,
    explanation: 'アンデス原産のジャガイモや、トウモロコシなどが各地へ伝わりました。この交流は食生活を変えた一方、疫病や征服は先住民社会に甚大な被害を与えました。',
    reading: { href: '/themes/exploration', label: '大航海時代のテーマ史' },
  },
  {
    id: 'inca-records', category: '中世・近世', question: 'インカで数量などの記録に用いられた、結び目をつけた紐は？',
    choices: ['パピルス', '羊皮紙', '甲骨', 'キープ'], answer: 3,
    explanation: 'キープは紐の色や結び目で情報を記録する仕組みです。広い帝国の行政を支えましたが、解読や非数値情報の扱いには研究上の課題も残っています。',
    reading: { href: '/country/inca', label: 'インカの歴史' },
  },
  {
    id: 'industrial', category: '近現代', question: '18世紀後半から産業革命が最初に本格化した国は？',
    choices: ['イギリス', '日本', 'オスマン帝国', 'ロシア'], answer: 0,
    explanation: 'イギリスでは綿工業や蒸気機関の利用が進みました。石炭・資本・労働力に加え、植民地や大西洋貿易との関係も背景にありました。',
    reading: { href: '/themes/industrial', label: '産業革命のテーマ史' },
  },
  {
    id: 'american-independence', category: '近現代', question: 'アメリカの13植民地が独立宣言を採択した年は？',
    choices: ['1688年', '1776年', '1789年', '1865年'], answer: 1,
    explanation: '1776年7月4日に独立宣言が採択されました。イギリスが独立を承認したのは1783年のパリ条約で、宣言と戦争の終結は別の時点です。',
    reading: { href: '/country/usa', label: 'アメリカの歴史' },
  },
  {
    id: 'french-revolution', category: '近現代', question: '1789年のフランス革命期に採択された文書は？',
    choices: ['マグナ・カルタ', 'ポツダム宣言', '人間および市民の権利の宣言（人権宣言）', '国際連合憲章'], answer: 2,
    explanation: '人権宣言は自由や法の下の平等、国民主権などを掲げました。ただし、女性や植民地の住民への適用には大きな制限と矛盾がありました。',
    reading: { href: '/country/france', label: 'フランスの歴史' },
  },
  {
    id: 'meiji', category: '近現代', question: '日本の明治維新に続く改革で、1871年に行われたものは？',
    choices: ['大政奉還', '鎌倉幕府の成立', '参勤交代の制度化', '廃藩置県'], answer: 3,
    explanation: '廃藩置県は藩を廃して府県を置き、中央政府による統治を進めた改革です。大政奉還は1867年で、明治政府成立より前の出来事です。',
    reading: { href: '/country/japan', label: '日本の歴史' },
  },
  {
    id: 'german-unification', category: '近現代', question: '1871年に成立したドイツ帝国の統一を主導した国は？',
    choices: ['プロイセン', 'スペイン', 'フランス', 'オスマン帝国'], answer: 0,
    explanation: 'プロイセンはビスマルクの外交と複数の戦争を通じて統一を主導しました。オーストリアを含まない小ドイツ主義による統一でした。',
    reading: { href: '/country/germany', label: 'ドイツの歴史' },
  },
  {
    id: 'russian-revolution', category: '近現代', question: '1917年のロシア革命の結果として起きたことは？',
    choices: ['ピョートル1世の即位', '帝政の崩壊と、その後のボリシェヴィキによる政権掌握', 'キエフ・ルーシの成立', 'ソ連の解体'], answer: 1,
    explanation: '二月革命で帝政が崩れ、十月革命でボリシェヴィキが権力を握りました。その後の内戦を経て、ソビエト連邦が成立したのは1922年です。',
    reading: { href: '/country/russia', label: 'ロシアの歴史' },
  },
  {
    id: 'versailles', category: '近現代', question: '第一次世界大戦後、1919年にドイツと連合国が結んだ条約は？',
    choices: ['ウェストファリア条約', '日米和親条約', 'ヴェルサイユ条約', '南京条約'], answer: 2,
    explanation: 'ヴェルサイユ条約はドイツの領土・軍備・賠償などを定めました。他の敗戦国とは別の条約が結ばれ、欧州と中東の秩序も再編されました。',
    reading: { href: '/themes/worldwars', label: '世界大戦のテーマ史' },
  },
  {
    id: 'india-independence', category: '近現代', question: '1947年、英領インドの独立時に起きたことは？',
    choices: ['ムガル帝国が再興した', 'すべての地域が一つの共和国になった', 'ポルトガルが全土を統治した', 'インドとパキスタンに分離独立した'], answer: 3,
    explanation: '分離独立では大規模な人口移動と暴力が起こりました。当時のパキスタンは東西に分かれ、東パキスタンは1971年にバングラデシュとなりました。',
    reading: { href: '/country/india', label: 'インドの歴史' },
  },
  {
    id: 'un', category: '近現代', question: '第二次世界大戦末期の1945年に設立された国際機関は？',
    choices: ['国際連合', '国際連盟', '欧州連合', '世界貿易機関'], answer: 0,
    explanation: '国際連合は1945年10月24日に発足しました。第一次世界大戦後に成立した国際連盟とは別の機関で、集団安全保障を目指しました。',
    reading: { href: '/themes/worldwars', label: '世界大戦のテーマ史' },
  },
  {
    id: 'coldwar', category: '近現代', question: '冷戦を説明する言葉として最も適切なのは？',
    choices: ['世界のあらゆる地域で戦争がなかった時代', '米ソを中心とする対立が、軍事・政治・経済などに及んだ時代', '中世ヨーロッパの宗教戦争', 'イギリスとフランスだけの植民地競争'], answer: 1,
    explanation: '米ソの直接全面戦争は回避されましたが、朝鮮戦争やベトナム戦争など多くの武力紛争が起きました。非同盟諸国も独自の立場で行動しました。',
    reading: { href: '/themes/coldwar', label: '冷戦のテーマ史' },
  },
];
