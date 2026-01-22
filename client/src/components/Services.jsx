import { useState } from 'react';
import { serviceImages } from '../config/images';
import { CheckCircle2, RotateCcw, Zap, ShieldCheck } from 'lucide-react';

const Services = () => {
  const [flipped, setFlipped] = useState(
    Array(4).fill(false)
  );

  const services = [
    {
      title: 'RMU Cleaning',
      icon: <Zap className="w-5 h-5" />,
      description: 'Thorough cleaning of Ring Main Units using specialized industrial equipment.',
      details: ['Vacuum cleaning', 'Contact polishing', 'Insulator cleaning', 'Terminal maintenance']
    },
    {
      title: 'RMU Inspection',
      icon: <ShieldCheck className="w-5 h-5" />,
      description: 'Detailed visual and technical inspection of high-voltage RME components.',
      details: ['Thermal imaging', 'Resistance testing', 'Mechanical check', 'Safety verification']
    },
    {
      title: 'Preventive Maintenance',
      icon: <RotateCcw className="w-5 h-5" />,
      description: 'Scheduled maintenance protocols to prevent unexpected power failures.',
      details: ['Lubrication', 'Connection tightening', 'Component replacement', 'Performance monitoring']
    },
    {
      title: 'Safety Compliance',
      icon: <ShieldCheck className="w-5 h-5" />,
      description: 'Ensuring all activities strictly comply with GEB safety standards.',
      details: ['Safety protocols', 'PPE compliance', 'Work permits', 'Emergency plans']
    }
  ];

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <section id="services" className="py-24 px-4 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-green-600 font-black uppercase tracking-[0.2em] text-xs mb-3">Our Expertise</h4>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Comprehensive <span className="text-green-600">Solutions</span>
          </h2>
          <div className="w-20 h-1.5 bg-green-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Specialized RME maintenance services tailored for the Gujarat Electric Board and industrial power grids.
          </p>
        </div>

        {/* 3D Flip Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group h-[420px] [perspective:1000px] cursor-pointer"
              onClick={() => handleFlip(index)}
            >
              <div 
                className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] ${
                  flipped[index] ? '[transform:rotateY(180deg)]' : ''
                }`}
              >
                
                {/* --- FRONT SIDE --- */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div className="bg-white rounded-[2rem] h-full border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col overflow-hidden">
                    {/* Image Area */}
                    <div className="h-44 bg-slate-200 relative overflow-hidden">
                      <img
                        src={serviceImages[index]?.src}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.parentElement.innerHTML = `<div class="flex items-center justify-center h-full text-4xl bg-slate-100">${serviceImages[index]?.fallback || '⚡'}</div>`;
                        }}
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-2 rounded-xl text-green-600 shadow-sm">
                        {service.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2 text-green-600 font-bold text-xs uppercase tracking-widest mt-4">
                        View Checklist 
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* --- BACK SIDE --- */}
                <div className="absolute inset-0 h-full w-full rounded-[2rem] bg-slate-900 p-8 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-green-600 p-2 rounded-lg">
                        <CheckCircle2 size={20} />
                      </div>
                      <h3 className="text-lg font-bold italic">Standard Operating Procedure</h3>
                    </div>
                    
                    <ul className="space-y-4 flex-grow">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 group/item">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 group-hover/item:scale-150 transition-transform"></div>
                          <span className="text-slate-300 text-sm font-medium">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-xs font-black uppercase tracking-[0.2em] transition-colors mt-4">
                      Tap to Close
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;