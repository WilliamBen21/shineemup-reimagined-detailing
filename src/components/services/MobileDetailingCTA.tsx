
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MobileDetailingCTA = () => {
  const handleBookNowClick = () => {
    window.location.href = '/#booking';
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Professional Mobile Detailing?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Experience the convenience of professional car detailing at your location in Charlotte, NC. Book online or call us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleBookNowClick}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg"
            >
              Book Mobile Service
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <a href="tel:(704) 519-7228" className="btn-secondary">
              Call (704) 519-7228
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileDetailingCTA;
