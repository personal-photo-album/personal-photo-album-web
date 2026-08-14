import { BrandMark } from '@/components/atoms/brand-mark';

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-brand">
        <BrandMark />
        <span>Personal Photo Album</span>
      </div>
      <p>あなたの思い出は、あなたのもの。</p>
      <small>© 2026 Personal Photo Album</small>
    </footer>
  );
}
