import { BrandMark } from '@/components/atoms/brand-mark';

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Personal Photo Album トップへ">
        <BrandMark />
        <span>Personal Photo Album</span>
      </a>
      <nav aria-label="メインナビゲーション">
        <a href="#features">できること</a>
        <a href="#privacy">私たちの考え</a>
        <a className="nav-cta" href="#download">
          はじめる
        </a>
      </nav>
    </header>
  );
}
