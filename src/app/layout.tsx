import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '世界の歴史 — World History',
  description:
    '年表・地図・出来事・人物・テーマ史でつながる世界の歴史。解説付きクイズと用語集で、古代から現代まで楽しく学べます。',
};

export const viewport: Viewport = {
  themeColor: '#f2f2f7',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="font-sans antialiased">
        <a className="skip-link" href="#main-content">本文へスキップ</a>
        {children}
      </body>
    </html>
  );
}
