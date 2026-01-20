import { useState } from 'react';

const ImageWithFallback = ({ 
  src, 
  fallbackSrc, 
  alt, 
  className, 
  width, 
  height,
  placeholderText 
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setHasError(true);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (hasError || !src) {
    return (
      <div 
        className={`bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <div className="text-center p-4">
          <div className="text-4xl mb-2">🏭</div>
          <p className="text-gray-600 text-sm">{placeholderText || alt}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className={`absolute inset-0 bg-gray-100 animate-pulse ${className}`} />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
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