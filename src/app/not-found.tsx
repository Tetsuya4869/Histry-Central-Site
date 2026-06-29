import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="text-[56px]">🗺️</div>
      <h1 className="mt-4 text-[22px] font-bold text-ios-text">
        ページが見つかりません
      </h1>
      <p className="mt-2 text-[14px] text-ios-text-3">
        お探しの国・ページは存在しないようです。
      </p>
      <Link
        href="/"
        className="ios-tap mt-6 rounded-full bg-ios-blue px-6 py-2.5 text-[15px] font-semibold text-white"
      >
        年表にもどる
      </Link>
    </div>
  );
}
