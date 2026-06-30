'use client';

import { useMemo, useState } from 'react';
import SegmentedControl from './SegmentedControl';
import {
  glossary,
  GLOSSARY_CATEGORIES,
  type GlossaryCategory,
} from '@/data/glossary';

/** 用語集：カテゴリで絞り込めるリスト */
export default function GlossaryList() {
  const [cat, setCat] = useState<string>('all');

  const options = [
    { value: 'all', label: 'すべて' },
    ...GLOSSARY_CATEGORIES.map((c) => ({ value: c, label: c })),
  ];

  const grouped = useMemo(() => {
    const cats: GlossaryCategory[] =
      cat === 'all' ? GLOSSARY_CATEGORIES : [cat as GlossaryCategory];
    return cats
      .map((c) => ({
        category: c,
        terms: glossary.filter((t) => t.category === c),
      }))
      .filter((g) => g.terms.length > 0);
  }, [cat]);

  return (
    <div className="space-y-4">
      <SegmentedControl options={options} value={cat} onChange={setCat} />

      {grouped.map((group) => (
        <div key={group.category}>
          <h3 className="px-1 pb-2 text-[12px] font-semibold uppercase tracking-wide text-ios-text-3">
            {group.category}
          </h3>
          <dl className="overflow-hidden rounded-ios bg-ios-card shadow-ios">
            {group.terms.map((t, i) => (
              <div
                key={t.term}
                id={t.term}
                className={`scroll-mt-24 ${
                  i > 0 ? 'border-t border-[var(--ios-separator)] p-4' : 'p-4'
                }`}
              >
                <dt className="font-serif text-[15px] font-bold text-ios-text">
                  {t.term}
                </dt>
                <dd className="mt-1 text-[13px] leading-relaxed text-ios-text-2">
                  {t.definition}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}
