import type { Metadata } from 'next';
import IOSNavBar from '@/components/IOSNavBar';
import GlossaryList from '@/components/GlossaryList';

export const metadata: Metadata = {
  title: '用語集 — 世界の歴史',
  description: '世界史を読むための基本概念を、政治・宗教・社会・文化の分野ごとに解説。',
};

export default function GlossaryPage() {
  return (
    <div className="min-h-screen pb-16">
      <IOSNavBar title="用語集" backHref="/" />
      <main className="mx-auto max-w-3xl px-4">
        <section className="ios-fade-up py-6">
          <h2 className="font-serif text-[28px] font-bold tracking-tight text-ios-text">
            用語集
          </h2>
          <p className="mt-1 text-[14px] leading-relaxed text-ios-text-2">
            世界史を読み解くための基本概念を、分野ごとに簡潔に解説します。
          </p>
        </section>

        <section className="ios-fade-up pb-4">
          <GlossaryList />
        </section>
      </main>
    </div>
  );
}
