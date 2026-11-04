'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { REGIONS } from '@/data/countries';
import { EVENT_PERIODS, filterEvents, type WorldEvent } from '@/lib/event-filters';
import { formatYear } from '@/lib/timeline';

const PAGE_SIZE = 40;

export default function EventExplorer({ events }: { events: WorldEvent[] }) {
  const [query, setQuery] = useState('');
  const [period, setPeriod] = useState('all');
  const [region, setRegion] = useState('all');
  const [descending, setDescending] = useState(false);
  const [limit, setLimit] = useState(PAGE_SIZE);
  const filtered = useMemo(() => {
    const result = filterEvents(events, { query, period, region });
    return descending ? result.reverse() : result;
  }, [events, query, period, region, descending]);
  const active = query !== '' || period !== 'all' || region !== 'all' || descending;
  function reset() {
    setQuery(''); setPeriod('all'); setRegion('all'); setDescending(false); setLimit(PAGE_SIZE);
  }

  return (
    <div>
      <div className="rounded-ios-lg bg-ios-card p-4 shadow-ios">
        <label htmlFor="event-query" className="mb-2 block text-[13px] font-semibold">出来事・国・年代を検索</label>
        <input id="event-query" type="search" value={query}
          onChange={(e) => { setQuery(e.target.value); setLimit(PAGE_SIZE); }}
          placeholder="例：独立、仏教、BC550"
          className="min-h-11 w-full rounded-xl border border-[var(--ios-separator)] bg-ios-card-2 px-3 text-[16px]" />
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label className="text-[13px] font-semibold">年代
            <select value={period} onChange={(e) => { setPeriod(e.target.value); setLimit(PAGE_SIZE); }}
              className="mt-1 block min-h-11 w-full rounded-xl border border-[var(--ios-separator)] bg-ios-card-2 px-3 text-[14px] font-normal">
              {EVENT_PERIODS.map((p) => <option key={p.id} value={p.id}>{p.label}</option>)}
            </select>
          </label>
          <label className="text-[13px] font-semibold">地域
            <select value={region} onChange={(e) => { setRegion(e.target.value); setLimit(PAGE_SIZE); }}
              className="mt-1 block min-h-11 w-full rounded-xl border border-[var(--ios-separator)] bg-ios-card-2 px-3 text-[14px] font-normal">
              <option value="all">すべての地域</option>
              {REGIONS.map((r) => <option key={r}>{r}</option>)}
            </select>
          </label>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <label className="flex min-h-11 items-center gap-2 text-[13px] text-ios-text-2">
            <input type="checkbox" checked={descending} onChange={(e) => { setDescending(e.target.checked); setLimit(PAGE_SIZE); }} className="h-4 w-4 accent-[#0A84FF]" />
            新しい順に表示
          </label>
          {active && <button type="button" onClick={reset} className="min-h-11 px-2 text-[13px] font-semibold text-ios-blue">条件をリセット</button>}
        </div>
      </div>
      <p role="status" className="px-1 py-4 text-[13px] text-ios-text-2">{filtered.length}件の出来事{filtered.length > limit ? ` · ${limit}件を表示中` : ''}</p>
      {filtered.length === 0 ? (
        <div className="rounded-ios bg-ios-card p-8 text-center">
          <p className="font-serif text-lg font-bold">出来事が見つかりませんでした</p>
          <p className="mt-2 text-sm text-ios-text-2">キーワードを短くするか、年代・地域の条件を広げてみてください。</p>
          <button type="button" onClick={reset} className="mt-4 min-h-11 rounded-full bg-ios-blue px-5 text-sm font-semibold text-white">すべての出来事に戻る</button>
        </div>
      ) : (
        <ol className="space-y-3">
          {filtered.slice(0, limit).map((event) => (
            <li key={event.id}>
              <Link href={event.href} className="ios-tap group flex gap-3 rounded-ios bg-ios-card p-4 shadow-ios sm:gap-5">
                <span className="w-[72px] shrink-0 pt-0.5 font-serif text-[17px] font-bold tabular-nums text-ios-blue">{formatYear(event.year)}<span className="block text-[10px] font-normal text-ios-text-3">年</span></span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[14px] font-semibold leading-relaxed group-hover:text-ios-blue">{event.text}</span>
                  <span className="mt-2 block text-[12px] text-ios-text-2">{event.flag} {event.countryName} · {event.eraName}</span>
                </span>
                <span aria-hidden="true" className="self-center text-ios-text-3">›</span>
              </Link>
            </li>
          ))}
        </ol>
      )}
      {filtered.length > limit && <button type="button" onClick={() => setLimit((current) => current + PAGE_SIZE)} className="mt-5 min-h-12 w-full rounded-ios bg-ios-card py-3 text-sm font-semibold text-ios-blue shadow-ios">さらに{Math.min(PAGE_SIZE, filtered.length - limit)}件を表示</button>}
    </div>
  );
}
