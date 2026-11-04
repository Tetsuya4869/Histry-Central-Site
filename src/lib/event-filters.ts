import type { Region } from '@/data/countries';

export interface WorldEvent {
  id: string;
  year: number;
  text: string;
  countryId: string;
  countryName: string;
  flag: string;
  region: Region;
  eraName: string;
  href: string;
}

export const EVENT_PERIODS = [
  { id: 'all', label: '全時代', start: -Infinity, end: Infinity },
  { id: 'ancient', label: '古代 · 〜499年', start: -Infinity, end: 499 },
  { id: 'medieval', label: '500〜1499年', start: 500, end: 1499 },
  { id: 'early-modern', label: '1500〜1799年', start: 1500, end: 1799 },
  { id: 'modern', label: '1800〜1945年', start: 1800, end: 1945 },
  { id: 'contemporary', label: '1946年〜', start: 1946, end: Infinity },
] as const;

export function filterEvents(
  events: WorldEvent[],
  { query = '', period = 'all', region = 'all' }: { query?: string; period?: string; region?: string }
): WorldEvent[] {
  const range = EVENT_PERIODS.find((p) => p.id === period) ?? EVENT_PERIODS[0];
  const terms = query.trim().toLocaleLowerCase('ja').split(/\s+/).filter(Boolean);
  return events.filter((event) => {
    const haystack = `${event.text} ${event.countryName} ${event.eraName} ${event.year < 0 ? `BC${-event.year} 紀元前${-event.year}` : event.year}`.toLocaleLowerCase('ja');
    return event.year >= range.start && event.year <= range.end &&
      (region === 'all' || event.region === region) &&
      terms.every((term) => haystack.includes(term));
  });
}
