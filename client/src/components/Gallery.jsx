import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2, Camera } from 'lucide-react';
import { galleryImages } from '../config/images';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Auto-play logic with pause on hover
  useEffect(() => {
    if (!isHovered && !modalOpen) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, modalOpen, nextSlide]);

  const currentImage = galleryImages[currentIndex];

  // Placeholder for broken images
  const handleImageError = (e, item) => {
    e.target.onerror = null;
    e.target.parentElement.innerHTML = `
      <div class="flex flex-col items-center justify-center bg-slate-800 w-full h-full text-white p-8">
        <div class="text-4xl mb-4 opacity-50">⚡</div>
        <h3 class="text-lg font-bold">${item.title}</h3>
        <p class="text-xs text-slate-400">Image currently unavailable</p>
      </div>
    `;
  };

  return (
    <section id="gallery" className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest mb-4">
              <Camera className="w-3 h-3" />
              Project Showcase
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">
              Work <span className="text-green-600">Portfolio</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-md md:text-right">
            A glimpse into our high-voltage maintenance projects and RME installations across industrial sites in Gujarat.
          </p>
        </div>

        {/* Main Display Container */}
        <div 
          className="relative max-w-5xl mx-auto group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Stage */}
          <div
            className="relative aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl bg-slate-100 border-4 border-white cursor-zoom-in"
            onClick={() => setModalOpen(true)}
          >
            <img
              src={currentImage.src}
              alt={currentImage.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              onError={(e) => handleImageError(e, currentImage)}
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider mb-3 inline-block">
                  {currentImage.category}
                </span>
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">{currentImage.title}</h3>
                <p className="text-slate-200 text-sm md:text-lg max-w-2xl line-clamp-2">{currentImage.description}</p>
              </div>
            </div>

            {/* Expand Icon */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                <Maximize2 size={20} />
              </div>
            </div>
          </div>

          {/* Floating Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[-20px] md:left-[-30px]">
            <button
              onClick={prevSlide}
              className="bg-white shadow-xl p-4 rounded-full text-slate-900 hover:bg-green-600 hover:text-white transition-all transform hover:scale-110 active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-[-20px] md:right-[-30px]">
            <button
              onClick={nextSlide}
              className="bg-white shadow-xl p-4 rounded-full text-slate-900 hover:bg-green-600 hover:text-white transition-all transform hover:scale-110 active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-10 flex justify-center gap-4 px-4 overflow-x-auto pb-4 scrollbar-hide">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative flex-shrink-0 w-20 h-20 md:w-28 md:h-20 rounded-2xl overflow-hidden transition-all duration-300 ${
                index === currentIndex 
                  ? 'ring-4 ring-green-500 scale-110 z-10 shadow-lg' 
                  : 'opacity-40 hover:opacity-100 grayscale hover:grayscale-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Lightbox Modal */}
        {modalOpen && (
          <div className="fixed inset-0 bg-slate-950/95 z-[200] flex items-center justify-center p-4 md:p-10">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
            >
              <X size={40} />
            </button>
            
            <div className="w-full max-w-6xl h-full flex flex-col justify-center gap-6">
              <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={currentImage.src}
                  alt={currentImage.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-2">{currentImage.title}</h3>
                <p className="text-slate-400 text-lg">{currentImage.description}</p>
                <div className="mt-4 flex justify-center gap-2 text-sm text-slate-500">
                  <span>{currentIndex + 1}</span> / <span>{galleryImages.length}</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Gallery;