import React from 'react';
import {
  Zap,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'RME Cleaning',
    'RME Inspection',
    'Preventive Maintenance',
    'Safety Compliance',
    'Emergency Repair',
    'Testing & Commissioning'
  ];

  return (
    <footer className="bg-primary-dark text-white overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-8 h-8 text-accent" />
              <div>
                <h3 className="text-2xl font-bold text-black">
                  Vani-Enterprise
                </h3>
                <p className="text-accent text-sm">
                  GEB Approved Contractor
                </p>
              </div>
            </div>

            <p className="text-gray-800 mb-6">
              Professional RME maintenance services for Gujarat Electric Board.
              Specialized in cleaning, inspection, testing, and preventive
              maintenance with a perfect safety record.
            </p>

            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-800 hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-accent rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-800 flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="font-medium">Phone Numbers</p>
                  <p className="text-gray-800">+91 85118 72920</p>
                  <p className="text-gray-800">+91 85118 72920</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="font-medium">Email Address</p>
                  <p className="text-gray-800">
                    info@vanienterprise.com
                  </p>
                  <p className="text-gray-800">
                    support@vanienterprise.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-800">
                    Gujarat Electric Board Area
                  </p>
                  <p className="text-gray-800">
                    Vadodara, Gujarat, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="font-medium">Working Hours</p>
                  <p className="text-gray-800">
                    Mon-Sat: 8:00 AM - 8:00 PM
                  </p>
                  <p className="text-gray-800 text-accent font-medium">
                    Emergency: 24/7 Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-800 text-center md:text-left">
            © {new Date().getFullYear()} Vani-Enterprise. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-800">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Safety Guidelines
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
