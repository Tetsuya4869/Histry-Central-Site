import { histories } from '@/data/histories';
import { countries, getCountry } from '@/data/countries';

export interface Person {
  slug: string;
  name: string;
  role: string;
  years?: string;
  note: string;
  countryId: string;
  countryName: string;
  flag: string;
  color: string;
  colorTo: string;
}

/** 全文明の主要人物を横断的に集約する。slug は countryId-index で一意。 */
export function getAllPeople(): Person[] {
  const people: Person[] = [];
  // countries の並び順を尊重して集約
  for (const c of countries) {
    const h = histories[c.id];
    if (!h?.figures) continue;
    h.figures.forEach((f, i) => {
      people.push({
        slug: `${c.id}-${i}`,
        name: f.name,
        role: f.role,
        years: f.years,
        note: f.note,
        countryId: c.id,
        countryName: c.name,
        flag: c.flag,
        color: c.color,
        colorTo: c.colorTo,
      });
    });
  }
  return people;
}

export function getPerson(slug: string): Person | undefined {
  return getAllPeople().find((p) => p.slug === slug);
}

/** 同じ文明の他の人物 */
export function getPeopleOfCountry(countryId: string): Person[] {
  return getAllPeople().filter((p) => p.countryId === countryId);
}

export { getCountry };
