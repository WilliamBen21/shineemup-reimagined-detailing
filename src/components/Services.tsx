
import React from 'react';
import { Car, Droplets, Shield, Sparkles, Clock, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: 'Full Detail Package',
      price: 'From $299',
      description: 'Complete interior and exterior detailing for the ultimate transformation.',
      features: ['Exterior wash & wax', 'Interior deep clean', 'Tire shine', 'Window cleaning'],
      popular: true
    },
    {
      icon: Droplets,
      title: 'Ceramic Coating',
      price: 'From $599',
      description: 'Advanced protection with professional-grade ceramic coating technology.',
      features: ['5-year protection', 'Hydrophobic finish', 'UV resistance', 'Easy maintenance'],
      popular: false
    },
    {
      icon: Shield,
      title: 'Paint Protection',
      price: 'From $449',
      description: 'Premium paint protection film to preserve your vehicles finish.',
      features: ['Self-healing film', 'Crystal clear', 'Stone chip protection', '10-year warranty'],
      popular: false
    },
    {
      icon: Sparkles,
      title: 'Interior Detailing',
      price: 'From $179',
      description: 'Deep cleaning and conditioning for a like-new interior experience.',
      features: ['Steam cleaning', 'Leather conditioning', 'Odor elimination', 'Stain removal'],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Premium</span> Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose from our comprehensive range of professional detailing services, 
            each designed to exceed your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`relative group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl ${
                  service.popular 
                    ? 'border-amber-400/50 shadow-amber-400/20' 
                    : 'border-slate-700/50 hover:border-amber-400/30'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <div className="text-3xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    {service.price}
                  </div>
                </div>

                <p className="text-gray-400 mb-6 text-center leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  service.popular
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black hover:from-amber-500 hover:to-orange-600 hover:shadow-lg hover:shadow-amber-400/25'
                    : 'border-2 border-gray-600 text-gray-300 hover:border-amber-400 hover:text-amber-400 hover:bg-amber-400/10'
                }`}>
                  SELECT PACKAGE
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50">
            <Clock className="w-5 h-5 text-amber-400 mr-3" />
            <span className="text-gray-300">All services include free pickup and delivery within 10 miles</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
