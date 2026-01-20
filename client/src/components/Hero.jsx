import { heroImages } from '../config/images';

const Hero = () => {
  const handleWhatsAppClick = () => {
    const phone = '918875542210';
    const message = 'Hello Vani-Enterprise, I need information about RME maintenance services.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImages.background}
          alt="Electrical Maintenance Services"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = heroImages.fallback;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80"></div>
      </div>

      <div className="container-custom relative z-20 py-20">
        {/* Content remains the same */}
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 mb-6 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span className="text-primary font-semibold text-sm">GEB APPROVED CONTRACTOR</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Reliable <span className="text-primary">RME Maintenance</span> Services
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Specialized in cleaning, testing & preventive maintenance of Ring Main Units for Gujarat Electric Board.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleWhatsAppClick}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg"
            >
              <span>📱</span>
              Contact on WhatsApp
            </button>
            
            <a
              href="#services"
              className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;