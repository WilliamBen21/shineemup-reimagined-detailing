
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      src: '/lovable-uploads/09b4a6c7-5c99-4cb9-b4e1-1c466ec59a26.png',
      title: 'Professional Owner',
      category: 'Team'
    },
    {
      src: '/lovable-uploads/e130fda3-08de-46f3-b191-e997be6476c1.png',
      title: 'Luxury Vehicle Detail',
      category: 'Exterior'
    },
    {
      src: '/lovable-uploads/ee5be719-a6a7-4b09-a760-953bbd247229.png',
      title: 'Sedan Restoration',
      category: 'Full Service'
    },
    {
      src: '/lovable-uploads/4efcf53f-d9c3-49ab-a97c-171af63cbe0b.png',
      title: 'SUV Exterior Shine',
      category: 'Exterior'
    },
    {
      src: '/lovable-uploads/6bf0b62b-1dca-460d-8276-801cb902c4e0.png',
      title: 'SUV Side Profile Detail',
      category: 'Exterior'
    },
    {
      src: '/lovable-uploads/b8aa2085-7b5b-4afa-91c4-3ba6bdbc6549.png',
      title: 'Wheel & Tire Detailing',
      category: 'Specialty'
    },
    {
      src: '/lovable-uploads/f65562fb-f595-4cc4-a520-dac2550736e4.png',
      title: 'Semi-Truck Interior',
      category: 'Interior'
    },
    {
      src: '/lovable-uploads/5e95c32e-e7a2-4e02-b725-ec8d4324ff94.png',
      title: 'Professional Semi-Truck Detail',
      category: 'Commercial'
    },
    {
      src: '/lovable-uploads/ba560691-aabc-4b6c-9da7-5e2ee3af9e6b.png',
      title: 'Commercial Vehicle Finish',
      category: 'Commercial'
    }
  ];

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setSelectedImage(galleryImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See the stunning transformations we've achieved for our clients. 
            Every project tells a story of excellence and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-500 hover:scale-105"
              onClick={() => openModal(image, index)}
            >
              <div className="aspect-w-16 aspect-h-12 bg-slate-800">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-amber-400 text-sm font-semibold mb-1">{image.category}</div>
                  <h3 className="text-white text-lg font-bold">{image.title}</h3>
                </div>
              </div>
              
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400/50 rounded-xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 transition-colors z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 transition-colors z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
              
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-amber-400 text-sm font-semibold">{selectedImage.category}</div>
                  <h3 className="text-white text-xl font-bold">{selectedImage.title}</h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
