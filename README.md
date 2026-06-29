# 世界の歴史 — World History Timeline

年代と各国の歴史を **横スクロール年表（ガントチャート風）** で俯瞰し、国をタップすると
その国の **詳細な歴史ページ** に遷移する、iOS風UIの世界史サイトです。

- **横スクロール年表**：横軸=年代（紀元前〜現代）、各国の存在した時代を帯で表示
- **iOS風 UI/UX**：フロステッドガラスのナビバー、角丸カード、地域フィルタ、慣性スクロール、ライト/ダーク対応
- **詳細ページ**：時代ごとの縦タイムライン＋主要な出来事＋人物カード
- **データ駆動**：`src/data/` に国を追加するだけで拡張可能

## 技術スタック

- [Next.js](https://nextjs.org/)（App Router / TypeScript）— `output: 'export'` による静的サイト
- [Tailwind CSS](https://tailwindcss.com/) + iOSデザイントークン（CSS変数）
- GitHub Pages へ GitHub Actions で自動デプロイ

## ローカル開発

```bash
npm install
npm run dev      # http://localhost:3000
```

## ビルド（静的エクスポート）

```bash
npm run build    # out/ に静的サイトを書き出し
```

## GitHub Pages へのデプロイ

`.github/workflows/deploy.yml` が push 時に自動でビルド・公開します。
初回のみ、リポジトリの **Settings → Pages → Build and deployment → Source** を
**「GitHub Actions」** に設定してください。

公開URL（プロジェクトページ）：
`https://tetsuya4869.github.io/Histry-Central-Site/`

> GitHub Pages のパスは大文字小文字を区別するため、`next.config.mjs` の `basePath` を
> リポジトリ名と完全一致する `/Histry-Central-Site` に設定しています。
> 別のパス・独自ドメインで公開する場合はここを調整してください。

## ディレクトリ構成

```
src/
  app/
    page.tsx                  # ホーム（横スクロール年表）
    country/[id]/page.tsx     # 各国の詳細歴史ページ
  components/                 # IOSNavBar / TimelineChart / EraSection など
  data/
    countries.ts              # 年表メタ（国・色・存在期間）
    histories/*.ts            # 各国の詳細データ（時代・出来事・人物）
  lib/
    timeline.ts               # 年→座標スケール・目盛り生成
```

## 国の追加方法

1. `src/data/countries.ts` の `countries` に1件追加（`spans` で年表の帯を定義）
2. `src/data/histories/<id>.ts` を作成し、`src/data/histories/index.ts` に登録

以上で年表・一覧・詳細ページに自動反映されます。
