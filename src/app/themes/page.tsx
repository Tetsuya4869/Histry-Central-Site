import type { Metadata } from 'next';
import IOSNavBar from '@/components/IOSNavBar';
import ThemeCard from '@/components/ThemeCard';
import { themes } from '@/data/themes';

export const metadata: Metadata = {
  title: 'テーマで読む世界史 — 世界の歴史',
  description:
    '宗教の伝播、交易ネットワーク、帝国の興亡など、文明を横断する視点から世界史を読み解くエッセイ。',
};

export default function ThemesPage() {
  return (
    <div className="min-h-screen pb-16">
      <IOSNavBar title="テーマで読む世界史" backHref="/" />
      <main className="mx-auto max-w-3xl px-4">
        <section className="ios-fade-up py-6">
          <h2 className="font-serif text-[28px] font-bold tracking-tight text-ios-text">
            テーマで読む世界史
          </h2>
          <p className="mt-1 text-[14px] leading-relaxed text-ios-text-2">
            一国の歴史を越えて、文明を横断する大きな流れを読み解く。
            それぞれのテーマから、関係する国の詳細ページへもたどれます。
          </p>
        </section>

        <section className="ios-fade-up grid grid-cols-1 gap-3 sm:grid-cols-2">
          {themes.map((t) => (
            <ThemeCard key={t.id} theme={t} />
          ))}
        </section>
      </main>
    </div>
  );
}
