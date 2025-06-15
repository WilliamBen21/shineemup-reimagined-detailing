
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { GalleryImage } from '@/types/gallery';
import GalleryItem from './GalleryItem';

interface GalleryCarouselProps {
  images: GalleryImage[];
  allImages: GalleryImage[];
  onImageClick: (index: number) => void;
}

const GalleryCarousel: React.FC<GalleryCarouselProps> = ({ images, allImages, onImageClick }) => {
  const handleImageClick = (image: GalleryImage) => {
    const imageIndex = allImages.findIndex(img => img.src === image.src);
    onImageClick(imageIndex);
  };

  return (
    <Carousel className="w-full max-w-6xl mx-auto">
      <CarouselContent className="-ml-2 md:-ml-4">
        {images.map((image, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <GalleryItem
              image={image}
              onClick={() => handleImageClick(image)}
              size="large"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-black/50 hover:bg-black/70 text-white border-blue-500/20" />
      <CarouselNext className="bg-black/50 hover:bg-black/70 text-white border-blue-500/20" />
    </Carousel>
  );
};

export default GalleryCarousel;
