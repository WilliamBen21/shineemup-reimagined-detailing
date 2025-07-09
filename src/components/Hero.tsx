
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    console.log('Hero component mounted');
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('Image failed to load:', e.currentTarget.src);
  };

  const handleBookNowClick = () => {
    // Scroll to booking section
    const bookingSection = document.querySelector('#booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]">
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/5e95c32e-e7a2-4e02-b725-ec8d4324ff94.png"
          alt="Professional semi-truck detailing"
          className="w-full h-full object-cover opacity-40"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/90"></div>
        {/* Premium Accent Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span>Premium Auto Detailing Services</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight">
                Elevate Your
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Vehicle's</span>
                <br />
                Presence
              </h1>
              
              <p className="text-xl text-gray-400 max-w-lg font-light leading-relaxed">
                Experience unparalleled detailing services that transform your vehicle into a masterpiece of automotive excellence.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <button 
                onClick={handleBookNowClick}
                className="group bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center shadow-lg shadow-blue-500/25"
              >
                BOOK NOW
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium">
                View Services →
              </a>
            </div>
          </div>

          {/* Right Content - Premium Porsche Showcase */}
          <div className="relative">
            <div className="relative group">
              <img
                src="/lovable-uploads/ee2cc08a-703e-44ed-ae1e-ccebcf179283.png?v=2"
                alt="White Porsche Cayman detailed side view - Premium detailing showcase"
                className="w-full h-80 object-contain rounded-2xl transition-transform duration-300 group-hover:scale-105 shadow-2xl"
                onError={handleImageError}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            {/* Premium Corner Accents */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-blue-500/30 rounded-tl-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-blue-500/30 rounded-br-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
