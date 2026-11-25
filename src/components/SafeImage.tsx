import { useEffect, useRef, useState } from 'react';
import { Leaf } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export function SafeImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = '',
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    setHasError(false);
    setLoaded(false);
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#EBF0E6] via-[#F8F5EC] to-[#E2E7DC] text-[#244B3B] p-6 text-center ${containerClassName}`}
      >
        <div className="w-12 h-12 rounded-full border border-[#244B3B]/20 flex items-center justify-center bg-[#FFFEFA]">
          <Leaf className="w-6 h-6 text-[#244B3B]" aria-hidden="true" />
        </div>
        <p className="text-sm font-medium text-[#244B3B] max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onLoad={() => setLoaded(true)}
      onError={() => setHasError(true)}
      className={`${className} transition-opacity duration-500 ease-out ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
    />
  );
}
