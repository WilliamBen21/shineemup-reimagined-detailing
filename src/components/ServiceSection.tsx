
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
    if (serviceCount === 4) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
    if (serviceCount === 3) return 'grid-cols-1 md:grid-cols-3';
    return 'grid-cols-1 md:grid-cols-2';
  };

  return (
    <section className="mb-20">
      <header className="flex items-center mb-8">
        <IconComponent className="w-6 h-6 text-blue-400 mr-2" aria-hidden="true" />
        <h3 className="text-2xl font-bold text-white">{category.title}</h3>
      </header>
      <div className={`grid ${getGridCols()} gap-8`}>
        {category.services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
