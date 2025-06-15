
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Clock, MapPin } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'home', href: '/', isRoute: true },
    { name: 'services', href: '#services', isRoute: false },
    { name: 'gallery', href: '/gallery', isRoute: true },
    { name: 'about', href: '#about', isRoute: false },
    { name: 'reviews', href: '#reviews', isRoute: false },
    { name: 'contact', href: '#contact', isRoute: false },
  ];

  const handleBookNowClick = () => {
    if (location.pathname === '/') {
      // On home page, scroll to booking section
      const bookingSection = document.querySelector('#booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On other pages, navigate to home page first
      window.location.href = '/#booking';
    }
    // Close mobile menu if open
    setIsOpen(false);
  };

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.isRoute) {
      setIsOpen(false);
      return;
    }
    
    if (location.pathname !== '/') {
      // Navigate to home page with hash
      window.location.href = `/${item.href}`;
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-xl border-b border-blue-500/10'
          : 'bg-transparent'
      }`}
    >
      {/* Top Bar */}
      <div className="hidden lg:block border-b border-blue-500/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 text-sm">
            <div className="flex items-center space-x-6 text-gray-400">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-blue-500" />
                <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                <span>Charlotte, NC</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-lg md:text-2xl font-black text-white tracking-tight">
              SHINE<span className="text-blue-500">'EM</span> UP
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-300 hover:text-blue-400 px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-300 capitalize"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item)}
                    className="text-gray-300 hover:text-blue-400 px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-300 capitalize"
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Contact info and CTA */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <div className="flex items-center text-sm">
              <Phone className="w-4 h-4 mr-2 text-blue-500" />
              <span className="text-gray-300">(704) 519-7228</span>
            </div>
            <button 
              onClick={handleBookNowClick}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 xl:px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-500/25 flex items-center"
            >
              <Calendar className="w-4 h-4 mr-2" />
              BOOK NOW
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white transition-colors p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-blue-500/10">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-gray-300 hover:text-blue-400 px-4 py-3 text-base font-medium transition-colors duration-200 capitalize rounded-lg hover:bg-blue-500/10"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-blue-400 px-4 py-3 text-base font-medium transition-colors duration-200 capitalize rounded-lg hover:bg-blue-500/10"
                  onClick={() => handleNavClick(item)}
                >
                  {item.name}
                </a>
              )
            ))}
            <div className="pt-4 border-t border-blue-500/10 space-y-3">
              <div className="flex items-center text-gray-300 px-4 py-2">
                <Phone className="w-4 h-4 mr-3 text-blue-500" />
                <span className="text-sm">(704) 519-7228</span>
              </div>
              <div className="flex items-center text-gray-300 px-4 py-2">
                <MapPin className="w-4 h-4 mr-3 text-blue-500" />
                <span className="text-sm">Charlotte, NC</span>
              </div>
              <button 
                onClick={handleBookNowClick}
                className="w-full mt-4 bg-blue-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 flex items-center justify-center"
              >
                <Calendar className="w-4 h-4 mr-2" />
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
