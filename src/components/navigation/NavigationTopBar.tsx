
import React from 'react';
import { Clock, MapPin } from 'lucide-react';

const NavigationTopBar = () => {
  return (
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
            <a href="https://www.facebook.com/seu.detailing/videos/shineem-up-detailing/488938167610476/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationTopBar;
