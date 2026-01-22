// imp`ort { heroImages } from "../config/images";
import { heroImages } from "../config/images";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const phone = "918511872920";
    const message =
      "Hello Vani-Enterprise, I need information about RME maintenance services.";
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section
      id="home"
      className="
        relative overflow-hidden flex items-center
        min-h-[calc(100vh-80px)]
        pt-28 md:pt-32 lg:pt-36
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImages.background}
          alt="Electrical Maintenance Services"
          className="w-full h-full object-cover"
        />
        {/* FIX: Changed opacity to be much lower (e.g., /90, /50, /10) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-white/20"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl md:max-w-2xl lg:max-w-3xl animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-5 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-primary tracking-wide">
              GEB APPROVED CONTRACTOR
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 font-extrabold text-gray-900 leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Reliable{" "}
            <span className="relative text-primary">RME Maintenance</span>{" "}
            Services
          </h1>

          {/* Description */}
          <p className="mb-8 text-gray-600 max-w-2xl text-base sm:text-lg md:text-lg lg:text-xl">
            Specialized in cleaning, testing & preventive maintenance of Ring
            Main Units for Gujarat Electric Board.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center gap-2 bg-primary text-white font-semibold rounded-xl px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 text-base md:text-lg transition hover:bg-primary/90"
            >
              <span className="text-xl">📱</span>
              Contact on WhatsApp
            </button>

            <a
              href="#services"
              className="flex items-center justify-center border-2 border-primary text-primary font-semibold rounded-xl px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 text-base md:text-lg transition hover:bg-primary hover:text-white"
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
