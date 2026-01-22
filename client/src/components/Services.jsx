import { useState } from 'react';
import { serviceImages } from '../config/images';

const Services = () => {
  const [flipped, setFlipped] = useState(
    Array(serviceImages.length).fill(false)
  );

  const services = [
    {
      title: 'RME Cleaning',
      description:
        'Thorough cleaning of Ring Main Units using specialized equipment',
      details: [
        'Vacuum cleaning',
        'Contact polishing',
        'Insulator cleaning',
        'Terminal maintenance'
      ]
    },
    {
      title: 'RME Inspection',
      description:
        'Detailed visual and technical inspection of RME components',
      details: [
        'Thermal imaging',
        'Resistance testing',
        'Mechanical check',
        'Safety verification'
      ]
    },
    {
      title: 'Preventive Maintenance',
      description:
        'Scheduled maintenance to prevent unexpected failures',
      details: [
        'Lubrication',
        'Connection tightening',
        'Component replacement',
        'Performance monitoring'
      ]
    },
    {
      title: 'Safety Compliance',
      description:
        'Ensuring all activities comply with GEB safety standards',
      details: [
        'Safety protocols',
        'PPE compliance',
        'Work permits',
        'Emergency plans'
      ]
    }
  ];

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <section id="services" className="py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive RME maintenance solutions for Gujarat Electric Board
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-96 cursor-pointer overflow-hidden"
              onClick={() => handleFlip(index)}
            >
              {/* Front */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  flipped[index] ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <div className="bg-white rounded-xl h-full border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
                  {/* Image */}
                  <div className="h-48 bg-gray-100 overflow-hidden">
                    <img
                      src={serviceImages[index].src}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.parentElement.className =
                          'h-48 flex items-center justify-center bg-gray-100';
                        e.target.parentElement.innerHTML = `<div class="text-5xl">${serviceImages[index].fallback}</div>`;
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <button className="text-primary font-semibold mt-auto">
                      Click for details →
                    </button>
                  </div>
                </div>
              </div>

              {/* Back */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  flipped[index]
                    ? 'opacity-100'
                    : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="bg-primary text-white rounded-xl p-6 h-full shadow-xl flex flex-col">
                  <h3 className="text-xl font-bold mb-4">
                    {service.title} Details
                  </h3>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="text-accent font-semibold text-center">
                    Tap to flip back ↶
                  </button>
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
