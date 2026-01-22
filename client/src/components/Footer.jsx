import React from 'react';
import {
  Zap,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'RMU Cleaning',
    'RMU Inspection',
    'Preventive Maintenance',
    'Safety Compliance',
    'Emergency Repair',
    'Testing & Commissioning'
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Company Identity */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-green-600 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white tracking-tight uppercase">
                  Vani<span className="text-green-500">Enterprise</span>
                </h3>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-green-500 uppercase tracking-[0.15em]">
                  <ShieldCheck size={12} />
                  GEB Approved Contractor
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-400">
              Leading the way in high-voltage RME maintenance. We provide the Gujarat Electric Board with precision cleaning, testing, and safety-first technical solutions.
            </p>

            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 group"
                >
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Navigation */}
          <div>
            <h4 className="text-white font-bold mb-8 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-1 gap-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-green-500 transition-colors flex items-center gap-2 text-sm group"
                  >
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Specialized Services */}
          <div>
            <h4 className="text-white font-bold mb-8 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              Expertise
            </h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service} className="text-sm text-slate-400 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-700 rounded-full" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Official Contact */}
          <div>
            <h4 className="text-white font-bold mb-8 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              Contact Hub
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-white/5 rounded-xl text-green-500">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter mb-1">Direct Line</p>
                  <p className="text-sm text-white font-medium">+91 85118 72920</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-white/5 rounded-xl text-green-500">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter mb-1">Email Support</p>
                  <p className="text-sm text-white font-medium">info@vanienterprise.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-white/5 rounded-xl text-green-500">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter mb-1">Emergency Service</p>
                  <p className="text-sm text-green-500 font-bold">24/7 Rapid Response</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-slate-500 font-medium">
            © {currentYear} VANI ENTERPRISE. ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {['Safety Policy', 'Terms', 'Compliance'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="text-[10px] text-slate-600">
            Approved Contractor: <span className="text-slate-400">Class-A License</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;