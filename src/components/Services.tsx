
import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceSection from './ServiceSection';
import { serviceCategories } from '@/data/services';

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-[#080808] relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <header className="text-center mb-12 sm:mb-14 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm text-blue-400 mb-3 sm:mb-4">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1" aria-hidden="true" />
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight leading-tight">
            Detailing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"> Packages</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-4 sm:px-0">
            Choose from our comprehensive range of detailing services. All prices may vary depending on vehicle condition.
          </p>
        </header>

        {/* Featured Service Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 sm:mb-16">
          <Link 
            to="/services/mobile-detailing"
            className="group bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400/40 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Mobile Detailing</h3>
                <p className="text-gray-400 text-sm">Professional detailing at your location in Charlotte</p>
              </div>
              <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Link>
          
          <Link 
            to="/services/truck-detailing"
            className="group bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400/40 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Truck Detailing</h3>
                <p className="text-gray-400 text-sm">Specialized detailing for trucks and commercial vehicles</p>
              </div>
              <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Link>
        </div>

        <main className="space-y-12 sm:space-y-16 md:space-y-20">
          {serviceCategories.map((category) => (
            <ServiceSection key={category.id} category={category} />
          ))}
        </main>

        {/* Service Areas and Resources */}
        <div className="mt-12 sm:mt-16 md:mt-20 pt-8 border-t border-blue-500/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">Service Areas</h3>
              <p className="text-gray-400 mb-4">We proudly serve Charlotte and surrounding areas</p>
              <Link 
                to="/areas/south-charlotte"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                South Charlotte Detailing
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">Learning Center</h3>
              <p className="text-gray-400 mb-4">Expert tips and comprehensive guides</p>
              <Link 
                to="/guides/car-detailing-guide"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                Complete Car Detailing Guide
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <footer className="mt-8 sm:mt-10 md:mt-12 text-center text-gray-400">
          <p className="text-sm sm:text-base">* All prices will vary depending on the vehicle's condition</p>
        </footer>
      </div>
    </section>
  );
};

export default Services;
