import Image from 'next/image';

type PhotoCardProps = {
  className: string;
  position: string;
  alt: string;
  label?: string;
};

export function PhotoCard({ className, position, alt, label }: PhotoCardProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  return (
    <figure className={`photo-card ${className}`}>
      <Image
        src={`${basePath}/images/memory-contact-sheet.png`}
        alt={alt}
        width={1536}
        height={1024}
        sizes="(max-width: 700px) 60vw, 30vw"
        data-position={position}
      />
      {label ? <figcaption>{label}</figcaption> : null}
    </figure>
  );
}
