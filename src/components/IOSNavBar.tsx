'use client';

import Link from 'next/link';

interface IOSNavBarProps {
  title: string;
  subtitle?: string;
  backHref?: string;
  backLabel?: string;
}

/** フロステッドガラスのiOS風ナビゲーションバー（スティッキー） */
export default function IOSNavBar({
  title,
  subtitle,
  backHref,
  backLabel = '世界の歴史',
}: IOSNavBarProps) {
  return (
    <header className="ios-glass sticky top-0 z-30 border-b border-[var(--ios-separator)]">
      <div className="mx-auto flex h-14 max-w-3xl items-center px-4">
        <div className="flex w-1/4 min-w-[88px] items-center">
          {backHref && (
            <Link
              href={backHref}
              className="ios-tap flex items-center gap-1 text-ios-blue"
            >
              <svg
                width="11"
                height="20"
                viewBox="0 0 11 20"
                fill="none"
                aria-hidden
              >
                <path
                  d="M10 1L1.5 10L10 19"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="truncate text-[17px]">{backLabel}</span>
            </Link>
          )}
        </div>
        <div className="flex flex-1 flex-col items-center text-center">
          <h1 className="truncate text-[17px] font-semibold text-ios-text">
            {title}
          </h1>
          {subtitle && (
            <p className="truncate text-[11px] text-ios-text-3">{subtitle}</p>
          )}
        </div>
        <div className="w-1/4 min-w-[88px]" />
      </div>
    </header>
  );
}
