import { useState, useEffect, useRef } from 'react';
import { ArrowRight, MessageCircle, Zap, Shield, Activity } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef(null);

  // --- CANVAS ANIMATION (Green Energy Grid) ---
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 60; i++) particles.push(new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Connection Line Color (Light Green)
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.15)'; 
      // Particle Color (Forest Green)
      ctx.fillStyle = 'rgba(21, 128, 61, 0.3)';

      particles.forEach((p, i) => {
        p.update();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 180) {
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const phone = "918511872920";
    const message = "Hello Vani-Enterprise, I need information about RME maintenance services.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      
      {/* 1. Dynamic Canvas Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* 2. Soft Green Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-green-200/40 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[0%] right-[0%] w-[35rem] h-[35rem] bg-lime-100/50 rounded-full blur-[100px]" />

      {/* 3. Content Area */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center md:text-left bg-white/40 backdrop-blur-sm p-6 md:p-12 rounded-[3rem] border border-white/60 shadow-xl shadow-green-900/5">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 bg-green-50 border border-green-200 px-5 py-2 rounded-full shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600"></span>
            </span>
            <span className="text-xs font-bold text-green-800 tracking-widest uppercase">
              GEB Approved Contractor
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
            Reliable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-500">
              RME Maintenance
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed mx-auto md:mx-0 font-medium">
            Precision cleaning and preventive testing for Ring Main Units. 
            We keep the Gujarat Electric Board infrastructure efficient, safe, and sustainable.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={handleWhatsAppClick}
              className="group flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl px-8 py-4 text-lg transition-all hover:scale-105 shadow-lg shadow-green-200"
            >
              <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Contact WhatsApp
            </button>

            <a
              href="#services"
              className="group flex items-center justify-center gap-2 bg-white border-2 border-green-100 text-green-700 font-bold rounded-2xl px-8 py-4 text-lg hover:bg-green-50 hover:border-green-200 transition-all"
            >
              View Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-green-100 pt-10">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-2xl text-green-700">
                <Shield size={24} />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-slate-900 leading-none">100%</p>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Safety Compliance</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-lime-100 rounded-2xl text-green-700">
                <Activity size={24} />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-slate-900 leading-none">GEB</p>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Certified Staff</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <div className="p-3 bg-emerald-100 rounded-2xl text-green-700">
                <Zap size={24} />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-slate-900 leading-none">Eco</p>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Friendly Process</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;