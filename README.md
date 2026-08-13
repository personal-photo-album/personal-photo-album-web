# Personal Photo Album Web

Personal Photo Album のコンセプトと主要機能を紹介する日本語の公式サイトです。写真が主役になる静かなデザインで、現在の開発状況も案内します。

## 公開 URL

https://personal-photo-album.github.io/personal-photo-album-web/

## 必要環境

- Node.js 24 以上
- npm 11 以上

## セットアップ

```bash
npm ci
npm run dev
```

開発サーバーは `http://localhost:3000` で起動します。

## コンテンツの追加

現在は1ページ構成で、本文は `src/app/page.tsx` にあります。記事機能を追加する場合は `content/posts/` に Markdown を置き、`title`、`date`、`tags`、`summary`、`draft` の frontmatter を付けます。

## 公開

`main` ブランチへのマージ後、GitHub Actions が検証・静的書き出し・GitHub Pages への配信を行います。

## 主なディレクトリ

| パス                 | 内容                                   |
| -------------------- | -------------------------------------- |
| `src/app/`           | App Router のページ、SEO、サイトマップ |
| `src/components/`    | Atomic Design に沿ったUI部品           |
| `src/config/`        | サイト全体の共通設定                   |
| `public/images/`     | 写真・画像素材                         |
| `.github/workflows/` | CI と GitHub Pages 配信                |
