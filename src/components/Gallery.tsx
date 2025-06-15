
import React, { useState } from 'react';
import { GalleryCategory } from '@/types/gallery';
import { galleryImages } from '@/data/galleryImages';
import { Sparkles } from 'lucide-react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'exterior', label: 'Exterior' },
    { id: 'interior', label: 'Interior' },
    { id: 'commercial', label: 'Commercial' }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-12 md:py-16 lg:py-20 bg-[#080808] relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-blue-400 mb-3 md:mb-4">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-1" />
            <span>Our Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 md:mb-4 tracking-tight px-4">
            Gallery of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"> Excellence</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base lg:text-lg px-4">
            See the transformation we bring to every vehicle. From luxury cars to commercial trucks, 
            every detail matters.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-6 md:mb-8 px-4">
          <div className="flex flex-wrap justify-center gap-2 bg-black/40 backdrop-blur-xl rounded-2xl p-2 border border-blue-500/10 max-w-full">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as GalleryCategory)}
                className={`px-3 py-2 md:px-6 md:py-3 rounded-xl font-medium transition-all duration-300 text-xs md:text-sm whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : 'text-gray-400 hover:text-white hover:bg-blue-500/10'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 md:gap-4 px-2 md:px-0">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="absolute inset-0.5 bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-blue-500/10 hover:border-blue-500/30 transition-colors duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-2 md:p-3">
                  {image.title && (
                    <h3 className="text-white font-semibold mb-1 text-sm md:text-base">{image.title}</h3>
                  )}
                  {image.description && (
                    <p className="text-gray-400 text-xs md:text-sm">{image.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full-size image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-[95vw] max-h-[95vh] md:max-w-4xl md:max-h-full">
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors text-lg md:text-xl"
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* No images message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-400 text-base md:text-lg">No images available in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
