
import React from 'react';

interface Area {
  name: string;
  description: string;
}

interface AreasServedProps {
  areaName: string;
  description: string;
  areas: Area[];
}

const AreasServed = ({ areaName, description, areas }: AreasServedProps) => {
  return (
    <section className="py-16 bg-black/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {areaName} Communities We Serve
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <div key={area.name} className="bg-black/40 backdrop-blur-xl rounded-lg p-6 border border-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-2">{area.name}</h3>
              <p className="text-gray-400 text-sm">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasServed;
