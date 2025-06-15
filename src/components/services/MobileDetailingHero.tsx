
import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MobileDetailingHero = () => {
  const handleBookNowClick = () => {
    window.location.href = '/#booking';
  };

  return (
    <section className="py-16 md:py-24 bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-400 mb-6">
              <MapPin className="w-4 h-4" />
              <span>Mobile Detailing Charlotte NC</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              Professional
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Mobile Detailing
              </span>
              <br />
              in Charlotte
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Premium mobile car detailing services that come to you. We serve Charlotte, Ballantyne, Myers Park, South Park, and surrounding areas with professional-grade equipment and expert care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={handleBookNowClick}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                Book Mobile Detailing
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <a href="tel:(704) 519-7228" className="btn-secondary flex items-center justify-center">
                Call (704) 519-7228
              </a>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="/lovable-uploads/937b9d22-8abb-48af-9aeb-344878e1a00a.png"
              alt="Mobile car detailing service in Charlotte NC - Professional white vehicle detailing"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileDetailingHero;
