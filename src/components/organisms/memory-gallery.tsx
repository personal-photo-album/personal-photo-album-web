import { PhotoCard } from '@/components/molecules/photo-card';

export function MemoryGallery() {
  return (
    <div className="memory-gallery" aria-label="大切な思い出の写真例">
      <PhotoCard
        className="photo-main"
        position="0% 0%"
        alt="夕暮れの静かな海辺"
        label="2026. 08. 02"
      />
      <PhotoCard className="photo-top" position="100% 0%" alt="雨上がりの街並み" />
      <PhotoCard className="photo-bottom" position="50% 100%" alt="窓辺の朝食" />
      <div className="photo-count" aria-label="アルバム内の写真は128枚">
        <strong>128</strong>
        <span>memories</span>
      </div>
    </div>
  );
}
