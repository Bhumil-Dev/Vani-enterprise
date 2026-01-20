import { useState } from 'react';

const ImageDisplay = ({ 
  src, 
  alt, 
  className = '', 
  fallback = null,
  onError = null,
  ...props 
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = (e) => {
    setHasError(true);
    if (onError) onError(e);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // If image has error and we have a fallback, show fallback
  if (hasError && fallback) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 ${className}`}>
        {typeof fallback === 'string' && fallback.startsWith('data:image') ? (
          <img 
            src={fallback} 
            alt={alt} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-center p-4">
            <span className="text-4xl mb-2 block">{fallback}</span>
            <span className="text-gray-600 text-sm">{alt}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
        {...props}
      />
    </div>
  );
};

export default ImageDisplay;