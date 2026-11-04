import type { Metadata } from 'next';
import IOSNavBar from '@/components/IOSNavBar';
import QuizClient from '@/components/QuizClient';

export const metadata: Metadata = {
  title: '世界史クイズ — 世界の歴史',
  description: '古代から近現代まで、解説付きの4択クイズで世界史をおさらい。5問ずつ学び、関連する文明やテーマ史を深く読めます。',
};

export default function QuizPage() {
  return (
    <div className="min-h-screen pb-16">
      <IOSNavBar title="世界史クイズ" backHref="/" />
      <main id="main-content" className="mx-auto max-w-3xl px-4 py-6">
        <QuizClient />
      </main>
    </div>
  );
}
