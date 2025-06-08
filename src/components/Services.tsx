import React from 'react';
import { Sparkles, Car, Truck } from 'lucide-react';

const Services = () => {
  const carServices = [
    {
      name: 'Hand Wash Package',
      price: '$40',
      features: [
        'Wash',
        'Rim Cleaning',
        'Tire Clean & Tire Shine',
        'Vacuum'
      ]
    },
    {
      name: 'Bronze Package',
      price: '$65',
      features: [
        'Wash',
        'Rim Cleaning',
        'Tire Clean & Tire Shine',
        'Vacuum',
        'Window Cleaning',
        'Interior Wipe Down',
        'Door/Trunk Jam Wipe Out',
        'Air Freshener'
      ]
    },
    {
      name: 'Silver Package',
      price: '$120',
      features: [
        'Wash',
        'Rim Cleaning',
        'Tire Clean & Tire Shine',
        'Window Cleaning',
        'Vacuum',
        'Interior Deep Clean',
        'Interior Protection',
        'Black Trim Protection',
        'Door/Trunk Jam Wipe Out',
        'Air Freshener'
      ]
    },
    {
      name: 'Gold Package',
      price: '$200',
      features: [
        'Wash',
        'Rim Cleaning',
        'Tire Clean & Tire Shine',
        'Window Cleaning',
        'Interior Deep Clean',
        'Interior Protection',
        'Seat & Carpet Shampoo',
        'Black Trim Protection',
        'Engine Bay Cleaning',
        'Door/Trunk Jam Wipe Out',
        'Air Freshener'
      ]
    }
  ];

  const semiTruckServices = [
    {
      name: 'Exterior Wash Only',
      price: '$65',
      features: ['Exterior Wash']
    },
    {
      name: 'Basic Detail',
      price: '$150',
      features: [
        'Truck Body',
        'Frame Cleaning',
        'Rim Cleaning',
        'Tire Cleaning & Tire Shine',
        'Interior Wipe Down',
        'Interior Floor Cleaning'
      ]
    },
    {
      name: 'Ultimate Detail',
      price: '$250',
      features: [
        'Truck Body',
        'Frame Cleaning',
        'Rim Cleaning',
        'Tire Cleaning & Tire Shine',
        'Interior Deep Cleaning',
        'Floor Cleaning',
        'Interior Protection',
        'Window Cleaning'
      ]
    }
  ];

  const interiorServices = [
    {
      name: 'Bronze Package',
      price: '$100',
      features: [
        'Interior Wipe Down',
        'Floor Cleaning',
        'Window Cleaning'
      ]
    },
    {
      name: 'Silver Package',
      price: '$150',
      features: [
        'Interior Deep Cleaning',
        'Interior Protection',
        'Floor Cleaning',
        'Window Cleaning'
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-400 mb-4">
            <Sparkles className="w-4 h-4 mr-1" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Detailing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"> Packages</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose from our comprehensive range of detailing services. All prices may vary depending on vehicle condition.
          </p>
        </div>

        {/* Car Detailing Packages */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <Car className="w-6 h-6 text-blue-400 mr-2" />
            <h3 className="text-2xl font-bold text-white">Car Detailing Packages</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {carServices.map((service, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0.5 bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/10 hover:border-blue-500/30 transition-colors duration-300">
                  <h4 className="text-xl font-bold text-white mb-2">{service.name}</h4>
                  <div className="text-2xl font-bold text-blue-400 mb-6">{service.price}</div>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Semi-Truck Detailing */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <Truck className="w-6 h-6 text-blue-400 mr-2" />
            <h3 className="text-2xl font-bold text-white">Semi-Truck Detailing</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {semiTruckServices.map((service, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0.5 bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/10 hover:border-blue-500/30 transition-colors duration-300">
                  <h4 className="text-xl font-bold text-white mb-2">{service.name}</h4>
                  <div className="text-2xl font-bold text-blue-400 mb-6">{service.price}</div>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interior Only Packages */}
        <div>
          <div className="flex items-center mb-8">
            <Car className="w-6 h-6 text-blue-400 mr-2" />
            <h3 className="text-2xl font-bold text-white">Interior Only Packages</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {interiorServices.map((service, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0.5 bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/10 hover:border-blue-500/30 transition-colors duration-300">
                  <h4 className="text-xl font-bold text-white mb-2">{service.name}</h4>
                  <div className="text-2xl font-bold text-blue-400 mb-6">{service.price}</div>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center text-gray-400">
          * All prices will vary depending on the vehicle's condition
        </div>
      </div>
    </section>
  );
};

export default Services;
