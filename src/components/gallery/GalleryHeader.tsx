
import React from 'react';
import { Camera } from 'lucide-react';
import { GalleryCategory } from '@/types/gallery';

interface GalleryHeaderProps {
  selectedCategory: GalleryCategory;
  onCategoryChange: (category: GalleryCategory) => void;
}

const GalleryHeader: React.FC<GalleryHeaderProps> = ({ selectedCategory, onCategoryChange }) => {
  const categories: GalleryCategory[] = ['All', 'Exterior', 'Interior', 'Commercial'];

  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-400 mb-4">
        <Camera className="w-4 h-4 mr-1" />
        <span>Our Portfolio</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
        Witness Our
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"> Craftsmanship</span>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
        Browse through our gallery of meticulously detailed vehicles and see the level of perfection we achieve.
      </p>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border border-blue-500/20'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GalleryHeader;
