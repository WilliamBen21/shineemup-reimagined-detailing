
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { navigateToBooking } from '@/utils/bookingNavigation';
import { navItems } from './navigation/navigationConfig';
import NavigationTopBar from './navigation/NavigationTopBar';
import DesktopNavigation from './navigation/DesktopNavigation';
import MobileNavigation from './navigation/MobileNavigation';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookNowClick = () => {
    navigateToBooking();
    setIsOpen(false);
  };

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.isRoute) {
      setIsOpen(false);
      return;
    }
    
    // For hash links, navigate to home first if not already there, then scroll
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll to section
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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
      <NavigationTopBar />

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-lg md:text-2xl font-black text-white tracking-tight">
              SHINE<span className="text-blue-500">'EM</span> UP
            </Link>
          </div>

          <DesktopNavigation
            servicesDropdownOpen={servicesDropdownOpen}
            areasDropdownOpen={areasDropdownOpen}
            setServicesDropdownOpen={setServicesDropdownOpen}
            setAreasDropdownOpen={setAreasDropdownOpen}
          />

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

      <MobileNavigation
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleNavClick={handleNavClick}
        handleBookNowClick={handleBookNowClick}
      />
    </nav>
  );
};

export default Navigation;
