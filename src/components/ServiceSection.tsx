
import React from 'react';
import { Car, Truck } from 'lucide-react';
import ServiceCard from './ServiceCard';
import type { ServiceCategory } from '@/data/services';

interface ServiceSectionProps {
  category: ServiceCategory;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ category }) => {
  const IconComponent = category.icon === 'Truck' ? Truck : Car;
  
  const getGridCols = () => {
    const serviceCount = category.services.length;
    if (serviceCount === 4) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
    if (serviceCount === 3) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    return 'grid-cols-1 sm:grid-cols-2';
  };

  return (
    <section className="mb-16 sm:mb-18 md:mb-20">
      <header className="flex items-center justify-center sm:justify-start mb-6 sm:mb-8 px-4 sm:px-0">
        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mr-2 flex-shrink-0" aria-hidden="true" />
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center sm:text-left">
          {category.title}
        </h3>
      </header>
      <div className={`grid ${getGridCols()} gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0`}>
        {category.services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
