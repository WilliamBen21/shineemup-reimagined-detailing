
import React from 'react';
import { DollarSign, Clock, Car, Truck } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  price_cents: number;
  duration_minutes: number;
  features: string[];
}

interface ServiceSelectionProps {
  selectedCategory: 'car' | 'truck' | 'interior';
  setSelectedCategory: (category: 'car' | 'truck' | 'interior') => void;
  services: Record<string, Service[]>;
  selectedService: Service | null;
  setSelectedService: (service: Service) => void;
}

const ServiceSelection: React.FC<ServiceSelectionProps> = ({
  selectedCategory,
  setSelectedCategory,
  services,
  selectedService,
  setSelectedService
}) => {
  const formatPrice = (priceInCents: number) => {
    return `$${(priceInCents / 100).toFixed(0)}`;
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 text-center sm:text-left">
        Choose Your Service Package
      </h3>
      
      {/* Service Category Tabs */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center sm:justify-start">
        <button
          type="button"
          onClick={() => setSelectedCategory('car')}
          className={`flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm transition-all duration-200 ${
            selectedCategory === 'car'
              ? 'bg-blue-500 text-white'
              : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
          }`}
        >
          <Car className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          Car Services
        </button>
        <button
          type="button"
          onClick={() => setSelectedCategory('truck')}
          className={`flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm transition-all duration-200 ${
            selectedCategory === 'truck'
              ? 'bg-blue-500 text-white'
              : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
          }`}
        >
          <Truck className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          Truck Services
        </button>
        <button
          type="button"
          onClick={() => setSelectedCategory('interior')}
          className={`flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm transition-all duration-200 ${
            selectedCategory === 'interior'
              ? 'bg-blue-500 text-white'
              : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
          }`}
        >
          <Car className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          Interior Only
        </button>
      </div>

      {/* Service Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        {services[selectedCategory]?.map((service) => (
          <button
            key={service.id}
            type="button"
            onClick={() => setSelectedService(service)}
            className={`text-left p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl transition-all duration-200 border-2 ${
              selectedService?.id === service.id
                ? 'bg-blue-500 text-white border-blue-400'
                : 'bg-black/40 hover:bg-black/60 text-gray-300 border-gray-700 hover:border-blue-500/50'
            }`}
          >
            <div className="flex justify-between items-start mb-3 sm:mb-4">
              <h4 className="text-sm sm:text-base md:text-lg font-bold">{service.name}</h4>
              <div className="flex items-center text-lg sm:text-xl font-bold">
                <DollarSign className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{formatPrice(service.price_cents).replace('$', '')}</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm opacity-80 mb-2 sm:mb-3">{service.description}</p>
            <div className="flex items-center text-xs sm:text-sm mb-3 sm:mb-4">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              <span>{service.duration_minutes} minutes</span>
            </div>
            <div className="space-y-1 sm:space-y-2">
              {service.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-center text-xs sm:text-sm">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-current rounded-full mr-2"></span>
                  {feature}
                </div>
              ))}
              {service.features.length > 3 && (
                <div className="text-[10px] sm:text-xs opacity-60">
                  +{service.features.length - 3} more features
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelection;
