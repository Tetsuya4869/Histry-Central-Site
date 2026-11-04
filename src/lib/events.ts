import { countries } from '@/data/countries';
import { histories } from '@/data/histories';

import type { WorldEvent } from './event-filters';

// 本文と探索ページで同じアンカーを使い、出来事そのものに移動する。
export function eventAnchor(eraIndex: number, eventIndex: number): string {
  return `event-${eraIndex}-${eventIndex}`;
}

export function getAllEvents(): WorldEvent[] {
  return countries.flatMap((country) =>
    (histories[country.id]?.eras ?? []).flatMap((era, eraIndex) =>
      (era.events ?? []).map((event, eventIndex) => ({
        ...event,
        id: `${country.id}-${eraIndex}-${eventIndex}`,
        countryId: country.id,
        countryName: country.name,
        flag: country.flag,
        region: country.region,
        eraName: era.name,
        href: `/country/${country.id}#${eventAnchor(eraIndex, eventIndex)}`,
      }))
    )
  ).sort((a, b) => a.year - b.year || a.id.localeCompare(b.id));
}

