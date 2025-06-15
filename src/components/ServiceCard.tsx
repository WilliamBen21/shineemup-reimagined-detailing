
import React from 'react';
import type { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0.5 bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
      <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/10 hover:border-blue-500/30 transition-colors duration-300">
        <h4 className="text-xl font-bold text-white mb-2">{service.name}</h4>
        <div className="text-2xl font-bold text-blue-400 mb-6">{service.price}</div>
        <ul className="space-y-3" role="list">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-400">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 shrink-0" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
