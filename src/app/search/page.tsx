import type { Metadata } from 'next';
import IOSNavBar from '@/components/IOSNavBar';
import SearchClient from '@/components/SearchClient';

export const metadata: Metadata = {
  title: '検索 — 世界の歴史',
  description: '国・文明・人物・テーマ・用語を横断して検索します。',
};

export default function SearchPage() {
  return (
    <div className="min-h-screen pb-16">
      <IOSNavBar title="検索" backHref="/" />
      <main className="mx-auto max-w-3xl px-4 pt-2">
        <SearchClient />
      </main>
    </div>
  );
}
