import { aboutImages } from '../config/images';
import { Shield, Award, Users, Clock, ArrowUpRight } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Licensed & Certified',
      description: 'GEB approved contractor',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Award,
      title: '10+ Years Experience',
      description: 'Proven industry track record',
      color: 'bg-lime-50 text-lime-600'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Trained & certified engineers',
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      icon: Clock,
      title: '24/7 Emergency',
      description: 'Round-the-clock support',
      color: 'bg-green-50 text-green-600'
    }
  ];

  return (
    <section id="about" className="relative bg-white py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Image Section with Interactive Frames */}
          <div className="relative group">
            {/* The "Frame" behind the image */}
            <div className="absolute -inset-4 border-2 border-dashed border-green-200 rounded-[2.5rem] transition-transform duration-700 group-hover:rotate-2" />
            
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl bg-white">
              <img
                src={aboutImages.engineer}
                alt="Electrical engineer inspecting RMU panel"
                className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = aboutImages.fallback;
                }}
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-8 -right-4 sm:right-0 lg:-right-8 animate-bounce-slow">
              <div className="bg-green-600 backdrop-blur-md p-6 rounded-3xl text-white shadow-2xl shadow-green-200 border border-green-500/30">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-2xl">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-black leading-none">10+</p>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-80">Years Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:pl-6">
            <div className="inline-flex items-center gap-2 mb-4 rounded-full bg-green-100 px-4 py-1.5 text-sm font-bold text-green-700 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
              Our Legacy
            </div>

            <h2 className="mb-6 text-4xl font-black text-slate-900 sm:text-5xl leading-tight">
              Leading the Way in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-500">
                Power Reliability
              </span>
            </h2>

            <p className="mb-6 text-lg text-slate-600 leading-relaxed">
              Vani-Enterprise is more than just a contractor; we are the silent guardians of the grid. As a 
              <strong className="text-green-700 font-bold"> GEB Approved Contractor</strong>, we specialize 
              in the critical lifecycle of Ring Main Units.
            </p>

            <p className="mb-10 text-slate-600 leading-relaxed">
              Our approach combines deep technical expertise with a commitment to 
              <span className="text-slate-900 font-semibold italic"> zero-downtime maintenance</span>, 
              ensuring that Gujarat's electrical infrastructure remains resilient.
            </p>

            {/* Feature Grid with Hover Interaction */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-slate-100 bg-slate-50/50 p-5 transition-all duration-300 hover:bg-white hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className={`rounded-xl p-3 transition-colors duration-300 ${feature.color} group-hover:bg-green-600 group-hover:text-white`}>
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-bold text-slate-900 flex items-center gap-1 group-hover:text-green-700 transition-colors">
                        {feature.title}
                        <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      </h4>
                      <p className="text-sm text-slate-500 font-medium">
                        {feature.description}
                      </p>
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