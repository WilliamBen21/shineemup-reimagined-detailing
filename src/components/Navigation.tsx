
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'home', href: '#home' },
    { name: 'services', href: '#services' },
    { name: 'about', href: '#about' },
    { name: 'booking', href: '#booking' },
    { name: 'contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-black text-white">
              SHINE<span className="text-yellow-400">'EM</span> UP
            </h1>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-yellow-400 px-3 py-2 text-sm font-semibold transition-colors duration-300 capitalize"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact info and CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center text-sm text-slate-400">
              <Phone className="w-4 h-4 mr-2" />
              <span>(555) 123-4567</span>
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-full font-bold text-sm transition-all duration-300">
              GET QUOTE
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-slate-300 hover:text-yellow-400 px-4 py-3 text-base font-semibold transition-colors duration-200 capitalize"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-700">
              <div className="flex items-center text-slate-400 px-4 py-2">
                <Phone className="w-4 h-4 mr-3" />
                <span>(555) 123-4567</span>
              </div>
              <button className="w-full mt-4 bg-yellow-400 text-black px-6 py-3 rounded-full font-bold transition-all duration-300">
                GET QUOTE
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
