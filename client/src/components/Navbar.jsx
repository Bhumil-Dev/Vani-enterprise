import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b
        ${scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md border-gray-200 py-0' 
          : 'bg-white border-transparent py-2'
        }`}
    >
      <div className="container mx-auto px-4">
        {/* Main Bar */}
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Group */}
          <a href="#" className="flex items-center gap-2 group cursor-pointer">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-125 transition-transform duration-300" />
              <Zap className="w-8 h-8 text-primary relative z-10 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary tracking-tight group-hover:text-primary/80 transition-colors">
                Vani-Enterprise
              </h1>
              <p className="text-xs text-gray-600 font-medium tracking-wide">
                GEB Approved Contractor
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-primary font-medium transition-colors group/link py-2"
              >
                {item.name}
                {/* Animated Underline */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Button with Rotate Animation */}
          <button
            className="md:hidden text-gray-700 hover:text-primary transition-colors focus:outline-none p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute inset-0 transition-all duration-300 transform ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}>
                <Menu size={24} />
              </span>
              <span className={`absolute inset-0 transition-all duration-300 transform ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}>
                <X size={24} />
              </span>
            </div>
          </button>
        </div>

        {/* Mobile Menu (Smooth Grid Transition) */}
        <div
          className={`md:hidden grid transition-all duration-500 ease-in-out ${
            isOpen ? 'grid-rows-[1fr] opacity-100 border-t border-gray-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="py-4 space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  // Staggered animation delay based on index
                  style={{ transitionDelay: `${index * 50}ms` }}
                  className={`
                    block py-3 px-4 rounded-lg font-medium
                    transform transition-all duration-300
                    ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}
                    hover:bg-primary/5 hover:text-primary hover:pl-6 text-gray-700
                  `}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;