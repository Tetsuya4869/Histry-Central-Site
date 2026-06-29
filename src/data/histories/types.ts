export interface HistoryEvent {
  year: number;
  text: string;
}

export interface Era {
  name: string;
  period: string;
  body: string;
  events?: HistoryEvent[];
}

export interface Figure {
  name: string;
  role: string;
  note: string;
}

export interface CountryHistory {
  id: string;
  intro: string;
  eras: Era[];
  figures?: Figure[];
}
