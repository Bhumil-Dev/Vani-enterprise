import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918511872920?text=Hi,%20I'm%20interested%20in%20your%20RME%20maintenance%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <div className="relative">
        {/* Pulsing ring effect */}
        <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20"></div>
        
        {/* Main button */}
        <div className="relative bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
          <MessageCircle className="w-6 h-6" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat on WhatsApp
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;