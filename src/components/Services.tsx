
import React from 'react';
import { Car, Droplets, Shield, Sparkles, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: 'paint correction',
      description: 'Lorem ipsum dolor sit amet consectetur. Nec lorem sagittis proin.'
    },
    {
      icon: Shield,
      title: 'ceramic coating',
      description: 'High-quality protective coating for your vehicle.'
    },
    {
      icon: Droplets,
      title: 'interior cleaning',
      description: 'Deep cleaning and restoration of your car interior.'
    },
    {
      icon: Sparkles,
      title: 'full detail',
      description: 'Complete detailing service inside and out.'
    },
    {
      icon: Car,
      title: 'exterior detailing',
      description: 'Professional exterior cleaning and protection.'
    },
    {
      icon: Shield,
      title: 'wax/polish',
      description: 'Premium wax and polish application.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            our services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-yellow-400/50 transition-all duration-300 group"
              >
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
