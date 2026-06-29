// basePath を考慮した内部リンク・アセットパスのヘルパ。
// next/link は basePath を自動付与するため通常は不要だが、
// 画像や手書きの href など basePath が付かない箇所で使う。
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function withBase(path: string): string {
  if (!path.startsWith('/')) path = `/${path}`;
  return `${BASE_PATH}${path}`;
}
