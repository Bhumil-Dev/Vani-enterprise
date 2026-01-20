import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would connect to a backend
    window.open(`https://wa.me/918511872920?text=Hi,%20my%20name%20is%20${formData.name}.%20${formData.message}`, '_blank');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 85118 72920', '+91 85118 72920'],
      action: 'tel:+918511872920'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@vanienterprise.com', 'support@vanienterprise.com'],
      action: 'mailto:info@vanienterprise.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Gujarat Electric Board Area', 'Vadodara, Gujarat, India'],
      action: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon-Sat: 8:00 AM - 8:00 PM', 'Emergency: 24/7 Available'],
      action: null
    }
  ];

  return (
    <section id="contact" ref={ref} className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch for professional RME maintenance services
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className={`
              space-y-8 transition-all duration-500
              ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
            `}>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
                <p className="text-gray-600 mb-8">
                  Contact Vani-Enterprise for all your RME maintenance needs. 
                  We serve all Gujarat Electric Board facilities across the state.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.title}
                    className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm mb-1">{detail}</p>
                        ))}
                        {info.action && (
                          <a
                            href={info.action}
                            className="inline-block mt-2 text-primary hover:text-primary-dark text-sm font-medium"
                          >
                            Click to {info.title === 'Phone' ? 'Call' : info.title === 'Email' ? 'Email' : 'View'}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-6 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Emergency Support</h4>
                    <p className="opacity-90">24/7 available for urgent maintenance</p>
                  </div>
                </div>
                <a
                  href="tel:+918511872920"
                  className="inline-flex items-center gap-2 bg-accent text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-accent-dark transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Emergency: +91 85118 72920
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`
              transition-all duration-500 delay-300
              ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
            `}>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-primary">Send Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="+91 85118 72920"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Describe your RME maintenance requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send via WhatsApp
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting, you agree to our terms. We will contact you on WhatsApp.
                  </p>
                </form>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h4 className="font-bold text-primary">Service Area</h4>
                </div>
                <div className="h-48 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-2" />
                    <p className="text-gray-600">Serving all Gujarat Electric Board facilities</p>
                    <p className="text-sm text-gray-500 mt-1">Across Gujarat State</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;