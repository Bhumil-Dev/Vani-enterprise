import { useState } from 'react';

const ImageWithFallback = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  placeholderText,
  // Added a prop for custom aspect ratio if needed
  aspectRatio = 'aspect-auto' 
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // Fallback UI: Shown if image fails or src is missing
  if (hasError || !src) {
    return (
      <div 
        className={`bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 flex items-center justify-center overflow-hidden ${aspectRatio} ${className}`}
        style={{ width, height }}
      >
        <div className="text-center p-6 transform transition-all">
          <div className="text-4xl mb-3 drop-shadow-sm">🏭</div>
          <p className="text-slate-500 text-[11px] font-black uppercase tracking-widest leading-tight max-w-[150px] mx-auto">
            {placeholderText || alt || 'Asset Missing'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${className}`}>
      {/* Loading Pulse Overlay */}
      {isLoading && (
        <div 
          className="absolute inset-0 z-10 bg-slate-100 animate-pulse flex items-center justify-center"
        >
          <div className="w-8 h-8 border-2 border-green-600/20 border-t-green-600 rounded-full animate-spin" />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        className={`
          w-full h-full object-cover block
          transition-all duration-500 ease-out
          ${isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}
        `}
        onError={handleError}
        onLoad={handleLoad}
        width={width}
        height={height}
        loading="lazy"
      />
    </div>
  );
};

export default ImageWithFallback;