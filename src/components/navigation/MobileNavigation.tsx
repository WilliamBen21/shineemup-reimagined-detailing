
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, MapPin } from 'lucide-react';
import { navItems, servicePages, areaPages } from './navigationConfig';

interface MobileNavigationProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  handleNavClick: (item: typeof navItems[0]) => void;
  handleBookNowClick: () => void;
}

const MobileNavigation = ({ isOpen, setIsOpen, handleNavClick, handleBookNowClick }: MobileNavigationProps) => {
  if (!isOpen) return null;

  return (
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
              <button
                onClick={() => handleNavClick(item)}
                className="block text-gray-300 hover:text-blue-400 px-4 py-3 text-base font-medium transition-colors duration-200 capitalize rounded-lg hover:bg-blue-500/10 w-full text-left"
              >
                {item.name}
              </button>
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
  );
};

export default MobileNavigation;
