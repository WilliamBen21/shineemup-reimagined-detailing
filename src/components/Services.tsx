
import React from 'react';
import { Car, Droplets, Shield, Sparkles, Clock, CheckCircle, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: 'Signature Detail',
      price: 'From $299',
      description: 'Complete transformation package for the discerning client.',
      features: ['Premium wash & protection', 'Interior restoration', 'Paint enhancement', 'Final inspection'],
      popular: true,
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Ceramic Shield',
      price: 'From $699',
      description: 'Advanced ceramic coating for ultimate protection and shine.',
      features: ['5-year protection', 'Hydrophobic coating', 'UV resistance', 'Easy maintenance'],
      popular: false,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Droplets,
      title: 'Paint Correction',
      price: 'From $449',
      description: 'Professional paint restoration and defect removal.',
      features: ['Swirl removal', 'Scratch repair', 'Paint enhancement', 'Protective sealant'],
      popular: false,
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Sparkles,
      title: 'Interior Luxury',
      price: 'From $199',
      description: 'Premium interior cleaning and conditioning service.',
      features: ['Deep steam clean', 'Leather treatment', 'Odor elimination', 'Protection application'],
      popular: false,
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/20 mb-6">
            <Zap className="w-4 h-4 text-amber-400 mr-2" />
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Professional
            <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
            Precision-crafted services designed to transform your vehicle into a masterpiece.
          </p>
        </div>

        {/* Modern service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-700 hover:transform hover:scale-105 ${
                  service.popular 
                    ? 'border-amber-400/50 shadow-2xl shadow-amber-400/10' 
                    : 'border-slate-700/30 hover:border-amber-400/30'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <div className="text-4xl font-black text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text">
                    {service.price}
                  </div>
                </div>

                <p className="text-slate-400 mb-8 text-center leading-relaxed font-light">
                  {service.description}
                </p>

                <ul className="space-y-4 mb-10">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 ${
                  service.popular
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black hover:from-amber-500 hover:to-orange-600 hover:shadow-xl hover:shadow-amber-400/25'
                    : 'border-2 border-slate-600 text-slate-300 hover:border-amber-400 hover:text-amber-400 hover:bg-amber-400/10'
                }`}>
                  SELECT SERVICE
                </button>
              </div>
            );
          })}
        </div>

        {/* Modern guarantee section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50">
            <Clock className="w-6 h-6 text-amber-400 mr-4" />
            <span className="text-slate-300 font-medium text-lg">Free pickup & delivery within 15 miles • 100% satisfaction guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
