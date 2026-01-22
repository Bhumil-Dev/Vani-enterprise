import { aboutImages } from '../config/images';
import { Shield, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Licensed & Certified',
      description: 'GEB approved contractor'
    },
    {
      icon: Award,
      title: '10+ Years Experience',
      description: 'Proven industry track record'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Trained & certified engineers'
    },
    {
      icon: Clock,
      title: '24/7 Emergency',
      description: 'Round-the-clock support'
    }
  ];

  return (
    <section id="about" className="bg-gray-50 py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image Section */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={aboutImages.engineer}
                alt="Electrical engineer inspecting RMU panel"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = aboutImages.fallback;
                }}
              />
            </div>

            {/* Experience Badge */}
            <div
              className="
                absolute
                -bottom-6 right-4 sm:right-6
                lg:-right-6
                rounded-2xl bg-primary px-6 py-4
                text-white shadow-xl
              "
            >
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6" />
                <span className="font-bold text-lg">
                  10+ Years Experience
                </span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              About Company
            </span>

            <h2 className="mb-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About <span className="text-primary">Vani-Enterprise</span>
            </h2>

            <p className="mb-4 text-gray-700 leading-relaxed">
              Vani-Enterprise is a licensed and trusted electrical maintenance
              company specializing in RME (Ring Main Unit) services for Gujarat
              Electric Board facilities.
            </p>

            <p className="mb-10 text-gray-700 leading-relaxed">
              With over a decade of hands-on experience, we ensure safe,
              reliable, and uninterrupted power distribution through
              professional cleaning, testing, and preventive maintenance.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex gap-4">
                    <div className="rounded-xl bg-primary/10 p-3 text-primary transition group-hover:bg-primary group-hover:text-white">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-gray-900">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600">
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
