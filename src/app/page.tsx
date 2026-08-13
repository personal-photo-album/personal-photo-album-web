import { ArrowIcon } from '@/components/atoms/arrow-icon';
import { PhotoCard } from '@/components/molecules/photo-card';
import { MemoryGallery } from '@/components/organisms/memory-gallery';
import { SiteFooter } from '@/components/organisms/site-footer';
import { SiteHeader } from '@/components/organisms/site-header';

const features = [
  {
    number: '01',
    title: 'すぐに見つかる',
    text: 'ファイル名や撮影日から検索。探していた一枚へ、迷わずたどり着けます。',
  },
  {
    number: '02',
    title: '心地よく整う',
    text: 'アルバム、タグ、お気に入り。自分に合った方法で、思い出をすっきり整理できます。',
  },
  {
    number: '03',
    title: 'そっと守られる',
    text: '写真は端末の中に。必要なときだけ、あなたが選んだ場所へバックアップします。',
  },
];

export default function Home() {
  return (
    <main id="top">
      <div className="hero-shell">
        <SiteHeader />
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Your memories, in your hands.</p>
            <h1 id="hero-title">
              思い出を、
              <br />
              あなたの手元に。
            </h1>
            <p className="lead">
              何気ない一日も、忘れたくない景色も。
              <br />
              写真を静かに整え、いつでも見返せる場所を。
            </p>
            <a className="primary-button" href="#features">
              どんなアプリ？ <ArrowIcon />
            </a>
          </div>
          <MemoryGallery />
        </section>
        <a className="scroll-note" href="#features">
          <span />
          SCROLL TO DISCOVER
        </a>
      </div>

      <section className="intro" id="features" aria-labelledby="intro-title">
        <p className="section-label">A quiet place for your photos</p>
        <h2 id="intro-title">
          写真の数だけ、
          <br />
          物語がある。
        </h2>
        <p>
          撮ることは増えたのに、見返す時間は少なくなった。Personal Photo Album
          は、大切な写真ともう一度出会うための、シンプルな居場所です。
        </p>
      </section>

      <section className="feature-section" aria-label="主な機能">
        <PhotoCard className="feature-image" position="0% 100%" alt="野に咲く白い花" />
        <div className="feature-list">
          {features.map(feature => (
            <article key={feature.number}>
              <span>{feature.number}</span>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="privacy" id="privacy" aria-labelledby="privacy-title">
        <PhotoCard className="privacy-photo" position="100% 100%" alt="山あいの湖を歩く旅人" />
        <div className="privacy-copy">
          <p className="section-label">Private by design</p>
          <h2 id="privacy-title">
            あなたの写真は、
            <br />
            あなたのもの。
          </h2>
          <p>
            クラウドへ勝手に送ることはありません。写真は端末の中で管理し、バックアップ先もタイミングも、あなた自身が選べます。
          </p>
          <div className="privacy-points">
            <span>端末内で管理</span>
            <span>選べるバックアップ</span>
            <span>広告トラッキングなし</span>
          </div>
        </div>
      </section>

      <section className="closing" id="download" aria-labelledby="closing-title">
        <p className="section-label">Available soon</p>
        <h2 id="closing-title">
          思い出との時間を、
          <br />
          もっと近くに。
        </h2>
        <p>Android 版を開発中。iOS 版も順次お届けします。</p>
        <span className="status-pill">● DEVELOPMENT IN PROGRESS</span>
      </section>
      <SiteFooter />
    </main>
  );
}
