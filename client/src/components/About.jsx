import { aboutImages } from '../config/images';
import { Shield, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const features = [
    { icon: <Shield className="w-6 h-6" />, title: 'Licensed & Certified', description: 'GEB approved contractor' },
    { icon: <Award className="w-6 h-6" />, title: '10+ Years Experience', description: 'Proven track record' },
    { icon: <Users className="w-6 h-6" />, title: 'Expert Team', description: 'Certified engineers' },
    { icon: <Clock className="w-6 h-6" />, title: '24/7 Emergency', description: 'Round-the-clock service' },
  ];

  return (
    <section id="about" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src={aboutImages.engineer}
                alt="Electrical engineer inspecting RMU panel"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = aboutImages.fallback;
                }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span className="font-bold">10+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-primary">Vani-Enterprise</span>
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700">
                Vani-Enterprise is a trusted and licensed electrical maintenance company 
                specializing in RME (Ring Main Unit) maintenance services for Gujarat Electric Board.
              </p>
              <p className="text-gray-700">
                With over 10 years of hands-on experience, we ensure reliable power distribution 
                through professional cleaning, testing, and preventive maintenance.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;