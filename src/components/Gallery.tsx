import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Camera } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: '/lovable-uploads/e130fda3-08de-46f3-b191-e997be6476c1.png',
      alt: 'Luxury car detail',
      category: 'Exterior'
    },
    {
      src: '/lovable-uploads/4efcf53f-d9c3-49ab-a97c-171af63cbe0b.png',
      alt: 'Interior detailing',
      category: 'Interior'
    },
    {
      src: '/lovable-uploads/b8aa2085-7b5b-4afa-91c4-3ba6bdbc6549.png',
      alt: 'Paint correction',
      category: 'Paint'
    },
    {
      src: '/lovable-uploads/ee5be719-a6a7-4b09-a760-953bbd247229.png',
      alt: 'Ceramic coating',
      category: 'Protection'
    },
    {
      src: '/lovable-uploads/5e95c32e-e7a2-4e02-b725-ec8d4324ff94.png',
      alt: 'Full detail',
      category: 'Complete'
    }
  ];

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-blue-400 mb-4">
            <Camera className="w-4 h-4 mr-1" />
            <span>Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Witness Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"> Craftsmanship</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Browse through our gallery of meticulously detailed vehicles and see the level of perfection we achieve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="absolute inset-0.5 bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl border border-blue-500/10 group-hover:border-blue-500/30 transition-colors duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-3 py-1 text-sm text-blue-400 inline-block mb-2">
                      {image.category}
                    </div>
                    <h3 className="text-white font-bold text-lg">{image.alt}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center">
          <div className="relative w-full max-w-6xl mx-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="w-full h-auto rounded-2xl"
              />
              <button
                onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            <div className="mt-4 text-center">
              <div className="bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-3 py-1 text-sm text-blue-400 inline-block mb-2">
                {images[selectedImage].category}
              </div>
              <h3 className="text-white font-bold text-xl">{images[selectedImage].alt}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
