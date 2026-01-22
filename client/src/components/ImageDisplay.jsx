import { useState } from 'react';
import { ImageOff, Loader2 } from 'lucide-react';

const ImageDisplay = ({ 
  src, 
  alt, 
  className = '', 
  aspectRatio = 'aspect-video', // Added for consistency
  objectFit = 'object-cover',
  fallbackIcon = <ImageOff className="w-8 h-8 opacity-20" />,
  ...props 
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${className} bg-slate-100`}>
      {/* Loading Shimmer Effect */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-100">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skeleton-shimmer" />
          <Loader2 className="w-6 h-6 text-green-600 animate-spin opacity-20" />
        </div>
      )}

      {/* Error State */}
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 border border-slate-100 p-4">
          {fallbackIcon}
          <p className="mt-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">
            {alt || 'Image Unavailable'}
          </p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`
            w-full h-full ${objectFit} 
            transition-all duration-700 ease-in-out
            ${isLoading ? 'scale-110 blur-lg opacity-0' : 'scale-100 blur-0 opacity-100'}
          `}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          loading="lazy"
          {...props}
        />
      )}

      {/* CSS for the shimmer effect */}
      <style jsx>{`
        .skeleton-shimmer {
          transform: translateX(-100%);
          animation: shimmer 2s infinite;
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default ImageDisplay;