
import React from 'react';
import { Link } from 'react-router-dom';
import { servicePages, areaPages } from './navigationConfig';

interface NavigationDropdownProps {
  type: 'services' | 'areas';
  isOpen: boolean;
}

const NavigationDropdown = ({ type, isOpen }: NavigationDropdownProps) => {
  const items = type === 'services' ? servicePages : areaPages;

  return (
    <div className={`absolute top-full left-0 mt-1 w-48 bg-black/95 backdrop-blur-xl border border-blue-500/20 rounded-lg shadow-lg transition-all duration-200 ${
      isOpen 
        ? 'opacity-100 visible transform translate-y-0' 
        : 'opacity-0 invisible transform -translate-y-2'
    }`}>
      <div className="py-2">
        {items.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-colors"
          >
            {item.name}
          </Link>
        ))}
        {type === 'services' && (
          <Link
            to="/guides/car-detailing-guide"
            className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-colors border-t border-blue-500/20 mt-2 pt-2"
          >
            Detailing Guide
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavigationDropdown;
