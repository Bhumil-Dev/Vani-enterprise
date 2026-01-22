import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, ShieldCheck, Zap } from 'lucide-react';
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
    threshold: 0.1
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Professional WhatsApp Message Template
    const message = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/918511872920?text=${message}`, '_blank');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactItems = [
    {
      icon: Phone,
      title: 'Call Us',
      lines: ['+91 85118 72920', '+91 98765 43210'],
      color: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      lines: ['info@vanienterprise.com', 'vani.ent.vadodara@gmail.com'],
      color: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: MapPin,
      title: 'Head Office',
      lines: ['Gujarat Electric Board Area', 'Vadodara, Gujarat 390001'],
      color: 'bg-orange-50',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h4 className="flex items-center gap-2 text-green-600 font-bold uppercase tracking-widest text-sm mb-4">
            <Zap size={18} fill="currentColor" />
            Reliable Energy Solutions
          </h4>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Ready to secure your <span className="text-green-600">Electrical Infrastructure?</span>
          </h2>
          <p className="text-lg text-slate-600">
            Whether it's RMU maintenance or GEB compliance audits, our team is ready to serve across Gujarat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Info & Map */}
          <div className={`lg:col-span-5 space-y-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            <div className="grid grid-cols-1 gap-4">
              {contactItems.map((item, i) => (
                <div key={i} className="flex items-center gap-5 p-5 rounded-2xl border border-slate-100 hover:border-green-200 transition-colors bg-slate-50/50">
                  <div className={`${item.color} ${item.iconColor} p-4 rounded-xl`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">{item.title}</h5>
                    {item.lines.map((line, idx) => (
                      <p key={idx} className="text-sm text-slate-500">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Live Google Map Placeholder - Vadodara Area */}
            <div className="rounded-3xl overflow-hidden border-4 border-slate-50 shadow-xl h-72 relative group">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.68202052156!2d73.10304618353326!3d22.30715882670221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a30abf%3A0x683967b5bd438466!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl flex items-center gap-3">
                <MapPin className="text-green-600" size={20} />
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Serving All Gujarat Facilities</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className={`lg:col-span-7 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden text-white">
              {/* Decorative BG element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-600/10 rounded-full -mr-32 -mt-32 blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-green-600 p-3 rounded-2xl">
                    <MessageSquare size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Direct Inquiry</h3>
                    <p className="text-slate-400 text-sm italic">Response time: Usually within 2 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="group">
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 outline-none focus:border-green-500 transition-all text-white placeholder:text-slate-600"
                      placeholder="e.g. Rahul Sharma"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="group">
                      <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Email (Optional)</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 outline-none focus:border-green-500 transition-all text-white placeholder:text-slate-600"
                        placeholder="rahul@company.com"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 outline-none focus:border-green-500 transition-all text-white placeholder:text-slate-600"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Your Requirements</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 outline-none focus:border-green-500 transition-all text-white placeholder:text-slate-600 resize-none"
                      placeholder="Please describe the RME service or maintenance you need..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-5 px-8 rounded-2xl transition-all shadow-lg shadow-green-900/20 flex items-center justify-center gap-3 transform active:scale-95"
                  >
                    <Send size={20} />
                    Start WhatsApp Chat
                  </button>

                  <div className="flex items-center justify-center gap-6 pt-4 text-slate-500">
                    <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest">
                      <ShieldCheck size={14} className="text-green-600" /> Secure
                    </div>
                    <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest">
                      <Clock size={14} className="text-green-600" /> 24/7 Support
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;