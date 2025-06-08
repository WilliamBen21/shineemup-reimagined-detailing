
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Zap } from 'lucide-react';

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
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-slate-950/90 backdrop-blur-2xl border-b border-slate-800/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Modern logo */}
          <div className="flex-shrink-0 group">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <h1 className="text-2xl font-black bg-gradient-to-r from-white via-gray-100 to-amber-400 bg-clip-text text-transparent">
                SHINE'EM UP
              </h1>
            </div>
          </div>
          
          {/* Desktop navigation with modern styling */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-slate-300 hover:text-white px-4 py-2 text-sm font-semibold transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Modern contact info and CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center text-sm text-slate-400 hover:text-amber-400 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-medium">(555) 123-4567</span>
            </div>
            <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-black px-6 py-2 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25">
              BOOK NOW
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white transition-colors p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Modern mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-t border-slate-800/50">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-slate-300 hover:text-amber-400 px-4 py-3 text-base font-semibold transition-colors duration-200 rounded-xl hover:bg-slate-800/50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800">
              <div className="flex items-center text-slate-400 px-4 py-2">
                <Phone className="w-4 h-4 mr-3" />
                <span>(555) 123-4567</span>
              </div>
              <button className="w-full mt-4 bg-gradient-to-r from-amber-500 to-orange-600 text-black px-6 py-3 rounded-xl font-bold transition-all duration-300">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
