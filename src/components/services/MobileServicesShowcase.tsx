
import React from 'react';

const MobileServicesShowcase = () => {
  const services = [
    {
      image: '/lovable-uploads/e130fda3-08de-46f3-b191-e997be6476c1.png',
      title: 'Mobile Exterior Detailing',
      description: 'Hand wash, clay bar, wax/sealant application, wheel cleaning, tire shine - all at your location.'
    },
    {
      image: '/lovable-uploads/4efcf53f-d9c3-49ab-a97c-171af63cbe0b.png',
      title: 'Mobile Interior Detailing',
      description: 'Vacuum, steam cleaning, leather conditioning, dashboard protection, and odor elimination.'
    },
    {
      image: '/lovable-uploads/b8aa2085-7b5b-4afa-91c4-3ba6bdbc6549.png',
      title: 'Mobile Paint Correction',
      description: 'Swirl mark removal, scratch repair, and paint restoration performed at your convenience.'
    }
  ];

  return (
    <section className="py-16 bg-black/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mobile Detailing Services
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileServicesShowcase;
