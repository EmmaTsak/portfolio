import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function SafeImage({
  src,
  alt,
  className = '',
}: SafeImageProps) {
  const { t } = useTranslation();

  const [failed, setFailed] =
    useState(false);

  const [loaded, setLoaded] =
    useState(false);

  if (failed) {
    return (
      <div
        className={`image-fallback ${className}`}
        role="img"
        aria-label={t(
          'shared.image.previewUnavailableLabel',
          {
            alt,
          }
        )}
      >
        <ImageOff aria-hidden="true" />

        <span>
          {t(
            'shared.image.previewUnavailable'
          )}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`image-shell ${
        loaded ? 'is-loaded' : ''
      } ${className}`}
    >
      <div
        className="image-skeleton"
        aria-hidden="true"
      />

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
      />
    </div>
  );
}