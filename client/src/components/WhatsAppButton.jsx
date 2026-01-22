import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918511872920?text=Hi, I'm interested in your RME maintenance services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] group flex items-center"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip Label - Slides out on hover */}
      <div className="mr-3 bg-slate-900 text-white px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-widest shadow-xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none hidden md:block">
        WhatsApp Chat
        {/* Tiny arrow */}
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
      </div>

      <div className="relative">
        {/* Double Pulsing Rings */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse opacity-10"></div>
        
        {/* Main Button Icon */}
        <div className="relative bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(37,211,102,0.5)] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12 flex items-center justify-center">
          <MessageCircle size={28} fill="currentColor" className="text-white" />
          
          {/* Status Indicator (Online Green Dot) */}
          <div className="absolute top-0 right-0 w-4 h-4 bg-white rounded-full flex items-center justify-center translate-x-1 -translate-y-1">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;