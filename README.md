# 世界の歴史 — World History Timeline

年代と各国の歴史を **横スクロール年表（ガントチャート風）** で俯瞰し、国をタップすると
その国の **詳細な歴史ページ** に遷移する、iOS風UIの世界史サイトです。

- **横スクロール年表**：横軸=年代（紀元前〜現代）、各国の存在した時代を帯で表示
- **iOS風 UI/UX**：フロステッドガラスのナビバー、角丸カード、地域フィルタ、慣性スクロール、ライト/ダーク対応
- **詳細ページ**：時代ごとの縦タイムライン＋主要な出来事＋人物カード
- **出来事の探索**：609件の出来事を年代・地域・キーワードで絞り込み、本文の該当箇所へ移動
- **学習クイズ**：全30問、時代を選んで毎回5問。解説・関連する読み物・振り返り付き
- **テーマ史と用語集**：交易・環境・食・女性の権利・移民など16テーマと91用語
- **横断検索**：国・人物・テーマ・用語・出来事をまとめて検索
- **データ駆動**：`src/data/` に国を追加するだけで拡張可能

現在は26の国・文明、609件の出来事、159件の人物紹介を収録しています。
人物紹介の件数は文明ごとの掲載件数であり、複数文明に登場する同一人物を含みます。
ホームの収録数はデータから自動集計します。

## 技術スタック

- [Next.js](https://nextjs.org/)（App Router / TypeScript）— `output: 'export'` による静的サイト
- [Tailwind CSS](https://tailwindcss.com/) + iOSデザイントークン（CSS変数）
- GitHub Pages へ GitHub Actions で自動デプロイ

## ローカル開発

```bash
npm install
npm run dev      # http://localhost:3000
```

## 検証

```bash
npm test         # データの登録・内部リンク・出来事アンカー・年代フィルター・クイズの整合性
npm run build    # TypeScript検査を含む静的エクスポート
```

プルリクエストでは `.github/workflows/check.yml` が上記のチェックを実行します。
出来事の年代には概略・諸説を含み、探索画面の時代区分は地域ごとの時代区分を表すものではありません。
追加したテーマと文明のページ末尾には、理解を深めるための参考文献を記載しています。

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
    page.tsx                  # ホーム（年表・地図・おすすめの読み順）
    events/page.tsx           # 出来事の横断探索
    quiz/page.tsx             # 解説付き世界史クイズ
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
