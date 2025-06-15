
import React, { useState } from 'react';
import { GalleryCategory } from '@/types/gallery';
import { galleryImages } from '@/data/galleryImages';
import GalleryHeader from './GalleryHeader';
import GalleryCarousel from './GalleryCarousel';
import GalleryGrid from './GalleryGrid';
import GalleryModal from './GalleryModal';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
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
        <GalleryHeader 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <GalleryCarousel 
          images={filteredImages}
          allImages={galleryImages}
          onImageClick={setSelectedImage}
        />

        <GalleryGrid 
          images={filteredImages}
          allImages={galleryImages}
          onImageClick={setSelectedImage}
        />
      </div>

      <GalleryModal 
        selectedImage={selectedImage}
        images={galleryImages}
        onClose={() => setSelectedImage(null)}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </section>
  );
};

export default GallerySection;
