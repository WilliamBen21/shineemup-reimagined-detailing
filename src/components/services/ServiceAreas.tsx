
import React from 'react';

const ServiceAreas = () => {
  const areas = [
    'Charlotte', 'Ballantyne', 'Myers Park', 'South Park',
    'Dilworth', 'NoDa', 'South End', 'Uptown Charlotte',
    'Matthews', 'Mint Hill', 'Pineville', 'Huntersville'
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mobile Detailing Service Areas
          </h2>
          <p className="text-gray-400">
            We proudly serve Charlotte and surrounding areas with professional mobile detailing
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {areas.map((area) => (
            <div key={area} className="bg-black/40 backdrop-blur-xl rounded-lg p-4 border border-blue-500/20">
              <p className="text-white font-medium">{area}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
