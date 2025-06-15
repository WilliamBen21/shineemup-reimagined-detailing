
import React from 'react';
import type { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0.5 bg-gradient-to-b from-blue-500/20 to-transparent rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
      <div className="relative bg-black/40 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-blue-500/10 hover:border-blue-500/30 transition-colors duration-300 h-full">
        <div className="text-center sm:text-left">
          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 leading-tight">
            {service.name}
          </h4>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400 mb-4 sm:mb-6">
            {service.price}
          </div>
        </div>
        <ul className="space-y-2 sm:space-y-3" role="list">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start text-gray-400 text-sm sm:text-base">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0" aria-hidden="true" />
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
