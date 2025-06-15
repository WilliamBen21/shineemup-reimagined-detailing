
import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StickyContactBar: React.FC = () => {
  const handleBookNowClick = () => {
    const bookingSection = document.querySelector('#booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-blue-500 to-blue-600 border-t border-blue-400/20 shadow-lg backdrop-blur-sm animate-slide-in-up">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <p className="text-white font-medium text-sm">
                Ready to transform your vehicle?
              </p>
              <p className="text-blue-100 text-xs">
                Professional detailing services available now
              </p>
            </div>
            <div className="sm:hidden">
              <p className="text-white font-medium text-sm">
                Transform your vehicle today
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href="tel:+17045197228"
              className="hidden md:flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">Call Now</span>
            </a>
            
            <a
              href="mailto:info@shineemup.com"
              className="hidden sm:flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Email</span>
            </a>

            <Button
              onClick={handleBookNowClick}
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-4 py-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyContactBar;
