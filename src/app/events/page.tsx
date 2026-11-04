import type { Metadata } from 'next';
import IOSNavBar from '@/components/IOSNavBar';
import EventExplorer from '@/components/EventExplorer';
import { getAllEvents } from '@/lib/events';

export const metadata: Metadata = {
  title: '出来事をたどる — 世界の歴史',
  description: '古代から現代まで、世界の出来事を年代・地域・キーワードで横断。各国の歴史を同じ時間軸で読み比べます。',
};

export default function EventsPage() {
  const events = getAllEvents();
  return (
    <div className="min-h-screen pb-16">
      <IOSNavBar title="出来事をたどる" backHref="/" />
      <main id="main-content" className="mx-auto max-w-3xl px-4 py-6">
        <p className="text-[12px] font-semibold tracking-widest text-ios-blue">WORLD HISTORY EXPLORER</p>
        <h2 className="mt-2 font-serif text-[30px] font-bold">同じころ、世界では。</h2>
        <p className="mb-6 mt-2 text-[14px] leading-relaxed text-ios-text-2">
          {events.length}件の出来事をひとつの時間軸に。時代と地域を組み合わせて、国を越えたつながりを探そう。
          年代は概略を含み、時代の区切りは探索用の目安です。
        </p>
        <EventExplorer events={events} />
      </main>
    </div>
  );
}
