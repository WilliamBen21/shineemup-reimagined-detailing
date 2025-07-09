
import React from 'react';
import { VehicleComparison } from '@/types/gallery';
import { ArrowRight } from 'lucide-react';

interface BeforeAfterComparisonProps {
  comparison: VehicleComparison;
  onImageClick: (src: string) => void;
}

const BeforeAfterComparison: React.FC<BeforeAfterComparisonProps> = ({ 
  comparison, 
  onImageClick 
}) => {
  if (!comparison.before || !comparison.after) return null;

  return (
    <div className="relative group cursor-pointer bg-black/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-blue-500/10 hover:border-blue-500/30 transition-colors duration-300">
      <div className="absolute inset-0.5 bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
      
      <div className="relative">
        {/* Header */}
        <div className="p-3 md:p-4 border-b border-blue-500/10">
          <h3 className="text-white font-semibold text-sm md:text-base mb-1">
            {comparison.vehicleName}
          </h3>
          <div className="flex items-center text-xs text-blue-400">
            <span className="px-2 py-1 bg-blue-500/10 rounded-full">
              {comparison.category}
            </span>
          </div>
        </div>

        {/* Before/After Images */}
        <div className="grid grid-cols-2 gap-0">
          {/* After Image */}
          <div className="relative">
            <div className="absolute top-2 left-2 z-10 px-2 py-1 bg-green-500/80 text-white text-xs rounded-full">
              Before
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={comparison.after.src}
                alt={comparison.after.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onClick={() => onImageClick(comparison.after!.src)}
              />
            </div>
          </div>

          {/* Before Image */}
          <div className="relative border-l border-blue-500/10">
            <div className="absolute top-2 left-2 z-10 px-2 py-1 bg-red-500/80 text-white text-xs rounded-full">
              After
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={comparison.before.src}
                alt={comparison.before.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onClick={() => onImageClick(comparison.before!.src)}
              />
            </div>
          </div>
        </div>

        {/* Arrow Indicator */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
        </div>

        {/* Description */}
        <div className="p-3 md:p-4">
          <p className="text-gray-400 text-xs md:text-sm">
            Professional detailing transformation showcasing our attention to detail
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterComparison;
