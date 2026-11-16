import { useState } from 'react';
import { CarFront } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0B1F3A] via-[#132C4E] to-[#061326] p-6 text-center text-white ${className}`}
      >
        <CarFront className="h-10 w-10 text-[#D8B143]" aria-hidden="true" />
        <p className="mt-3 font-display text-sm font-semibold tracking-tight text-white">
          {fallbackTitle}
        </p>
        <p className="mt-1 text-xs text-slate-300">Kelechi Motors</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
