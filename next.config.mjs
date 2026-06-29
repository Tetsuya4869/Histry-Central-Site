/** @type {import('next').NextConfig} */

// GitHub Pages のプロジェクトページとして公開するため basePath を設定。
// 別の場所（独自ドメイン等）に公開する場合は BASE_PATH を空文字にすればよい。
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/histry-central-site' : '';

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
