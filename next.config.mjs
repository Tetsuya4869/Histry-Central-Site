/** @type {import('next').NextConfig} */

// GitHub Pages のプロジェクトページとして公開するため basePath を設定。
// 別の場所（独自ドメイン等）に公開する場合は BASE_PATH を空文字にすればよい。
// GitHub Pages のパスは大文字小文字を区別するため、リポジトリ名と完全一致させる
// （公開URL: https://tetsuya4869.github.io/Histry-Central-Site/）。
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/Histry-Central-Site' : '';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
