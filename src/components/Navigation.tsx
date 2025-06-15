
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Clock, MapPin, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);
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
    { name: 'services', href: '#services', isRoute: false, hasDropdown: true },
    { name: 'areas', href: '#areas', isRoute: false, hasDropdown: true },
    { name: 'gallery', href: '/gallery', isRoute: true },
    { name: 'about', href: '/about', isRoute: true },
    { name: 'reviews', href: '#reviews', isRoute: false },
    { name: 'contact', href: '#contact', isRoute: false },
  ];

  const servicePages = [
    { name: 'Mobile Detailing', href: '/services/mobile-detailing' },
    { name: 'Truck Detailing', href: '/services/truck-detailing' },
  ];

  const areaPages = [
    { name: 'South Charlotte', href: '/areas/south-charlotte' },
    { name: 'North Charlotte', href: '/areas/north-charlotte' },
    { name: 'East Charlotte', href: '/areas/east-charlotte' },
    { name: 'Matthews', href: '/areas/matthews' },
    { name: 'Concord', href: '/areas/concord' },
  ];

  const handleBookNowClick = () => {
    if (location.pathname === '/') {
      const bookingSection = document.querySelector('#booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#booking';
    }
    setIsOpen(false);
  };

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.isRoute) {
      setIsOpen(false);
      return;
    }
    
    if (location.pathname !== '/') {
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
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => {
                        if (item.name === 'services') setServicesDropdownOpen(true);
                        if (item.name === 'areas') setAreasDropdownOpen(true);
                      }}
                      onMouseLeave={() => {
                        if (item.name === 'services') setServicesDropdownOpen(false);
                        if (item.name === 'areas') setAreasDropdownOpen(false);
                      }}
                    >
                      <button className="text-gray-300 hover:text-blue-400 px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-300 capitalize flex items-center">
                        {item.name}
                        <ChevronDown className="ml-1 w-4 h-4" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div className={`absolute top-full left-0 mt-1 w-48 bg-black/95 backdrop-blur-xl border border-blue-500/20 rounded-lg shadow-lg transition-all duration-200 ${
                        (item.name === 'services' && servicesDropdownOpen) || 
                        (item.name === 'areas' && areasDropdownOpen) 
                          ? 'opacity-100 visible transform translate-y-0' 
                          : 'opacity-0 invisible transform -translate-y-2'
                      }`}>
                        <div className="py-2">
                          {item.name === 'services' && servicePages.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                          {item.name === 'areas' && areaPages.map((area) => (
                            <Link
                              key={area.name}
                              to={area.href}
                              className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-colors"
                            >
                              {area.name}
                            </Link>
                          ))}
                          {item.name === 'services' && (
                            <Link
                              to="/guides/car-detailing-guide"
                              className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-colors border-t border-blue-500/20 mt-2 pt-2"
                            >
                              Detailing Guide
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : item.isRoute ? (
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-blue-400 px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-300 capitalize"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => handleNavClick(item)}
                      className="text-gray-300 hover:text-blue-400 px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-300 capitalize"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact info and CTA */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <a
              href="tel:+17045197228"
              className="flex items-center text-sm whitespace-nowrap"
            >
              <Phone className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
              <span className="text-gray-300 hover:text-blue-400 transition-colors">(704) 519-7228</span>
            </a>
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
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div className="space-y-1">
                    <div className="text-gray-300 px-4 py-3 text-base font-medium capitalize">
                      {item.name}
                    </div>
                    <div className="pl-6 space-y-1">
                      {item.name === 'services' && servicePages.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block text-gray-400 hover:text-blue-400 px-4 py-2 text-sm transition-colors duration-200 rounded-lg hover:bg-blue-500/10"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                      {item.name === 'areas' && areaPages.map((area) => (
                        <Link
                          key={area.name}
                          to={area.href}
                          className="block text-gray-400 hover:text-blue-400 px-4 py-2 text-sm transition-colors duration-200 rounded-lg hover:bg-blue-500/10"
                          onClick={() => setIsOpen(false)}
                        >
                          {area.name}
                        </Link>
                      ))}
                      {item.name === 'services' && (
                        <Link
                          to="/guides/car-detailing-guide"
                          className="block text-gray-400 hover:text-blue-400 px-4 py-2 text-sm transition-colors duration-200 rounded-lg hover:bg-blue-500/10"
                          onClick={() => setIsOpen(false)}
                        >
                          Detailing Guide
                        </Link>
                      )}
                    </div>
                  </div>
                ) : item.isRoute ? (
                  <Link
                    to={item.href}
                    className="block text-gray-300 hover:text-blue-400 px-4 py-3 text-base font-medium transition-colors duration-200 capitalize rounded-lg hover:bg-blue-500/10"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="block text-gray-300 hover:text-blue-400 px-4 py-3 text-base font-medium transition-colors duration-200 capitalize rounded-lg hover:bg-blue-500/10"
                    onClick={() => handleNavClick(item)}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-blue-500/10 space-y-3">
              <a
                href="tel:+17045197228"
                className="flex items-center text-gray-300 hover:text-blue-400 px-4 py-2 transition-colors"
              >
                <Phone className="w-4 h-4 mr-3 text-blue-500" />
                <span className="text-sm">(704) 519-7228</span>
              </a>
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
