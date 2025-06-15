
import React from 'react';
import { Clock, Shield, Star } from 'lucide-react';

const MobileDetailingBenefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Convenient & Time-Saving',
      description: 'We come to your home, office, or any location in Charlotte. Save time while we detail your car at your convenience.'
    },
    {
      icon: Shield,
      title: 'Professional Equipment',
      description: 'Fully equipped mobile units with professional-grade tools, eco-friendly products, and water recovery systems.'
    },
    {
      icon: Star,
      title: 'Charlotte Local Expert',
      description: 'Eric knows Charlotte\'s climate and conditions. Specialized care for NC heat, pollen, and seasonal challenges.'
    }
  ];

  return (
    <section className="py-16 bg-black/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Mobile Detailing in Charlotte?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Skip the hassle of driving to a detail shop. We bring professional car detailing directly to your location in Charlotte, NC.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
              <benefit.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileDetailingBenefits;
