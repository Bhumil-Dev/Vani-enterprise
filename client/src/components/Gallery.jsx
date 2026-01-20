import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { galleryImages } from '../config/images';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentImage = galleryImages[currentIndex];

  return (
    <section id="gallery" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Work Gallery</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional RME maintenance services in action
          </p>
        </div>

        {/* Gallery Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Image */}
          <div className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer" onClick={() => setModalOpen(true)}>
            <div className="aspect-video bg-gray-100">
              <img
                src={currentImage.src}
                alt={currentImage.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.parentElement.className = "aspect-video flex items-center justify-center bg-gray-800";
                  e.target.parentElement.innerHTML = `
                    <div class="text-center text-white p-8">
                      <div class="text-5xl mb-4">🏭</div>
                      <h3 class="text-2xl font-bold">${currentImage.title}</h3>
                      <p class="text-gray-300">${currentImage.description}</p>
                    </div>
                  `;
                }}
              />
            </div>
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              <h3 className="text-xl font-bold mb-1">{currentImage.title}</h3>
              <p className="text-gray-200">{currentImage.description}</p>
              <div className="mt-2">
                <span className="inline-block bg-accent text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  {currentImage.category}
                </span>
              </div>
            </div>

            {/* Navigation */}
            <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-6 justify-center overflow-x-auto pb-4">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setCurrentIndex(index)}
                className={`w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 ${
                  index === currentIndex ? 'ring-2 ring-accent' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.parentElement.className = `w-20 h-20 rounded-lg flex items-center justify-center ${
                      index === currentIndex ? 'bg-primary' : 'bg-gray-200'
                    }`;
                    e.target.parentElement.innerHTML = `<span class="text-xl">🏭</span>`;
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Fullscreen Modal */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setModalOpen(false)}>
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setModalOpen(false)} className="absolute -top-10 right-0 text-white">
                <X className="w-8 h-8" />
              </button>
              
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="aspect-video">
                  <img
                    src={currentImage.src}
                    alt={currentImage.title}
                    className="w-full h-full object-contain bg-gray-900"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.parentElement.className = "aspect-video flex items-center justify-center bg-gray-900";
                      e.target.parentElement.innerHTML = `
                        <div class="text-center text-white p-8">
                          <div class="text-6xl mb-6">🏭</div>
                          <h3 class="text-3xl font-bold">${currentImage.title}</h3>
                          <p class="text-gray-300">${currentImage.description}</p>
                        </div>
                      `;
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900">{currentImage.title}</h3>
                  <p className="text-gray-600 mt-2">{currentImage.description}</p>
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