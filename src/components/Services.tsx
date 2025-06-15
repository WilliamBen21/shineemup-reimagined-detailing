
import React from 'react';
import { Sparkles } from 'lucide-react';
import ServiceSection from './ServiceSection';
import { serviceCategories } from '@/data/services';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <header className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-400 mb-4">
            <Sparkles className="w-4 h-4 mr-1" aria-hidden="true" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Detailing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"> Packages</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose from our comprehensive range of detailing services. All prices may vary depending on vehicle condition.
          </p>
        </header>

        <main>
          {serviceCategories.map((category) => (
            <ServiceSection key={category.id} category={category} />
          ))}
        </main>

        {/* Disclaimer */}
        <footer className="mt-12 text-center text-gray-400">
          <p>* All prices will vary depending on the vehicle's condition</p>
        </footer>
      </div>
    </section>
  );
};

export default Services;
