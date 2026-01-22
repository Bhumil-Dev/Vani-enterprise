import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white shadow-lg overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-lg font-bold text-primary">
                Vani-Enterprise
              </h1>
              <p className="text-xs text-gray-600">
                GEB Approved Contractor
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden transition-all duration-300
            ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
            overflow-hidden
          `}
        >
          <div className="pb-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 px-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
