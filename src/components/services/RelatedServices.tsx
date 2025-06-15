
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const RelatedServices = () => {
  const relatedItems = [
    {
      to: '/services/truck-detailing',
      title: 'Truck Detailing',
      description: 'Specialized detailing for trucks, semi-trucks, and commercial vehicles in Charlotte.'
    },
    {
      to: '/areas/south-charlotte',
      title: 'South Charlotte',
      description: 'Premium mobile detailing services in South Charlotte, Ballantyne, and Pineville.'
    },
    {
      to: '/guides/car-detailing-guide',
      title: 'Detailing Guide',
      description: 'Complete guide to car detailing, tips, and maintenance for Charlotte car owners.'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Related Services & Areas
          </h2>
          <p className="text-gray-400">
            Explore our other specialized services and service areas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedItems.map((item, index) => (
            <Link 
              key={index}
              to={item.to}
              className="group bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <div className="flex items-center text-blue-400 group-hover:translate-x-1 transition-transform duration-300">
                {item.to.includes('areas') ? 'View Area' : item.to.includes('guides') ? 'Read Guide' : 'Learn More'} 
                <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
