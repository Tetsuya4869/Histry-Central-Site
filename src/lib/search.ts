import { countries } from '@/data/countries';
import { themes } from '@/data/themes';
import { glossary } from '@/data/glossary';
import { histories } from '@/data/histories';
import { getAllPeople } from '@/lib/people';

export type SearchKind = '国・文明' | 'テーマ' | '人物' | '用語';

export interface SearchItem {
  kind: SearchKind;
  title: string;
  subtitle: string;
  href: string;
  icon: string;
  keywords: string;
}

/** 全コンテンツを横断する検索インデックスを構築する。 */
export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  for (const c of countries) {
    const h = histories[c.id];
    const eraNames = h?.eras.map((e) => e.name).join(' ') ?? '';
    items.push({
      kind: '国・文明',
      title: c.name,
      subtitle: c.summary,
      href: `/country/${c.id}`,
      icon: c.flag,
      keywords: `${c.name} ${c.summary} ${c.region} ${eraNames}`,
    });
  }

  for (const t of themes) {
    items.push({
      kind: 'テーマ',
      title: t.title,
      subtitle: t.tagline,
      href: `/themes/${t.id}`,
      icon: t.icon,
      keywords: `${t.title} ${t.tagline} ${t.intro}`,
    });
  }

  for (const p of getAllPeople()) {
    items.push({
      kind: '人物',
      title: p.name,
      subtitle: `${p.countryName}・${p.role}`,
      href: `/people/${p.slug}`,
      icon: p.flag,
      keywords: `${p.name} ${p.role} ${p.note} ${p.countryName}`,
    });
  }

  for (const g of glossary) {
    items.push({
      kind: '用語',
      title: g.term,
      subtitle: g.category,
      href: `/glossary#${g.term}`,
      icon: '📖',
      keywords: `${g.term} ${g.definition} ${g.category}`,
    });
  }

  return items;
}
