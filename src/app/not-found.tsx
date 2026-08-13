import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="closing">
      <p className="section-label">404</p>
      <h1>ページが見つかりません</h1>
      <p>
        <Link href="/">トップへ戻る</Link>
      </p>
    </main>
  );
}
