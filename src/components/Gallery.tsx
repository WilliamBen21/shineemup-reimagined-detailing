
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Luxury Sedan Detail',
      category: 'Exterior'
    },
    {
      src: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Interior Restoration',
      category: 'Interior'
    },
    {
      src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Sports Car Ceramic Coating',
      category: 'Protection'
    },
    {
      src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Premium Detail Package',
      category: 'Full Service'
    },
    {
      src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Engine Bay Detailing',
      category: 'Specialty'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Leather Conditioning',
      category: 'Interior'
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
