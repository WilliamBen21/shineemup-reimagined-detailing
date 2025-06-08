
import React from 'react';
import { Car, Droplets, Shield, Sparkles, Truck, Star } from 'lucide-react';

const Services = () => {
  const carDetailingPackages = [
    {
      icon: Droplets,
      title: 'Hand Wash Package',
      duration: '1 hour',
      price: '$40',
      description: 'Essential hand wash service to keep your vehicle clean.'
    },
    {
      icon: Car,
      title: 'Bronze Package',
      duration: '2 hours',
      price: '$65',
      description: 'Basic detailing package with exterior wash and interior cleaning.'
    },
    {
      icon: Shield,
      title: 'Silver Package',
      duration: '3 hours',
      price: '$120',
      description: 'Comprehensive detailing with paint protection and premium care.'
    },
    {
      icon: Star,
      title: 'Gold Package',
      duration: '4-5 hours',
      price: '$200',
      description: 'Premium detailing service with full paint correction and protection.'
    }
  ];

  const semiTruckPackages = [
    {
      icon: Droplets,
      title: 'Exterior Wash Only',
      duration: '1 hour',
      price: '$65',
      description: 'Professional exterior cleaning for semi-trucks.'
    },
    {
      icon: Truck,
      title: 'Basic Detail',
      duration: '3 hours',
      price: '$150',
      description: 'Complete basic detailing service for commercial vehicles.'
    },
    {
      icon: Sparkles,
      title: 'Ultimate Detail',
      duration: '5-6 hours',
      price: '$250',
      description: 'Full premium detailing service for semi-trucks.'
    }
  ];

  const interiorPackages = [
    {
      icon: Shield,
      title: 'Interior Bronze Package',
      duration: '2 hours',
      price: '$100',
      description: 'Basic interior cleaning and conditioning service.'
    },
    {
      icon: Star,
      title: 'Interior Silver Package',
      duration: '3 hours',
      price: '$150',
      description: 'Premium interior detailing with deep cleaning and protection.'
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

        {/* Car Detailing Packages */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Car Detailing Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {carDetailingPackages.map((service, index) => {
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
                    <h4 className="text-xl font-bold text-white">{service.title}</h4>
                    <p className="text-slate-400 text-sm">{service.duration}</p>
                    <p className="text-2xl font-bold text-yellow-400">{service.price}</p>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Semi-Truck Detailing Packages */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Semi-Truck Detailing Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {semiTruckPackages.map((service, index) => {
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
                    <h4 className="text-xl font-bold text-white">{service.title}</h4>
                    <p className="text-slate-400 text-sm">{service.duration}</p>
                    <p className="text-2xl font-bold text-yellow-400">{service.price}</p>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interior Packages */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Interior Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {interiorPackages.map((service, index) => {
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
                    <h4 className="text-xl font-bold text-white">{service.title}</h4>
                    <p className="text-slate-400 text-sm">{service.duration}</p>
                    <p className="text-2xl font-bold text-yellow-400">{service.price}</p>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Custom Options Note */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 max-w-2xl mx-auto">
            <h4 className="text-lg font-bold text-white mb-2">Custom Options</h4>
            <p className="text-slate-400">
              <strong>Note:</strong> All prices will vary depending on the vehicle's condition. Final pricing will be confirmed during consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
