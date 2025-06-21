
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { navItems } from './navigationConfig';
import NavigationDropdown from './NavigationDropdown';

interface DesktopNavigationProps {
  servicesDropdownOpen: boolean;
  areasDropdownOpen: boolean;
  setServicesDropdownOpen: (open: boolean) => void;
  setAreasDropdownOpen: (open: boolean) => void;
}

const DesktopNavigation = ({
  servicesDropdownOpen,
  areasDropdownOpen,
  setServicesDropdownOpen,
  setAreasDropdownOpen,
}: DesktopNavigationProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.isRoute) {
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
  };

  return (
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
                
                <NavigationDropdown
                  type={item.name as 'services' | 'areas'}
                  isOpen={
                    (item.name === 'services' && servicesDropdownOpen) || 
                    (item.name === 'areas' && areasDropdownOpen)
                  }
                />
              </div>
            ) : item.isRoute ? (
              <Link
                to={item.href}
                className="text-gray-300 hover:text-blue-400 px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-300 capitalize"
              >
                {item.name}
              </Link>
            ) : (
              <button
                onClick={() => handleNavClick(item)}
                className="text-gray-300 hover:text-blue-400 px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-300 capitalize"
              >
                {item.name}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopNavigation;
