
import React from 'react';
import { GalleryImage } from '@/types/gallery';
import GalleryItem from './GalleryItem';

interface GalleryGridProps {
  images: GalleryImage[];
  allImages: GalleryImage[];
  onImageClick: (index: number) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images, allImages, onImageClick }) => {
  const handleImageClick = (image: GalleryImage) => {
    const imageIndex = allImages.findIndex(img => img.src === image.src);
    onImageClick(imageIndex);
  };

  return (
    <div className="hidden xl:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
      {images.slice(0, 8).map((image, index) => (
        <GalleryItem
          key={index}
          image={image}
          onClick={() => handleImageClick(image)}
          size="small"
        />
      ))}
    </div>
  );
};

export default GalleryGrid;
