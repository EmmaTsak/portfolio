import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function SafeImage({ src, alt, className = '' }: SafeImageProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  if (failed) {
    return <div className={`image-fallback ${className}`} role="img" aria-label={`${alt} — preview unavailable`}><ImageOff aria-hidden="true" /><span>Preview unavailable</span></div>;
  }
  return (
    <div className={`image-shell ${loaded ? 'is-loaded' : ''} ${className}`}>
      <div className="image-skeleton" aria-hidden="true" />
      <img src={src} alt={alt} loading="lazy" onLoad={() => setLoaded(true)} onError={() => setFailed(true)} />
    </div>
  );
}
