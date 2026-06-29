export interface HistoryEvent {
  year: number;
  text: string;
}

/** 時代を多面的に読み解くための観点別解説 */
export interface EraTheme {
  label: '政治' | '経済・社会' | '文化・宗教' | '対外関係' | string;
  text: string;
}

export interface Era {
  name: string;
  period: string;
  body: string;
  events?: HistoryEvent[];
  /** 政治・経済・文化・対外関係などの観点別解説 */
  themes?: EraTheme[];
  /** 史料（例：『史記』『ローマ建国史』『日本書紀』） */
  sources?: string[];
}

export interface Figure {
  name: string;
  role: string;
  note: string;
  /** 生没年・在位など（例：「BC100–BC44」「在位1558–1603」） */
  years?: string;
}

/** 参考文献（実在の定番書） */
export interface Reference {
  title: string;
  author?: string;
  publisher?: string;
}

export interface CountryHistory {
  id: string;
  intro: string;
  /** 学術的な総論（長め・ドロップキャップ表示） */
  overview?: string;
  eras: Era[];
  figures?: Figure[];
  /** 後世・現代世界への影響 */
  legacy?: string;
  /** 参考文献 */
  references?: Reference[];
}
