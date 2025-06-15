
import React from 'react';
import { GalleryImage } from '@/types/gallery';

interface GalleryItemProps {
  image: GalleryImage;
  onClick: () => void;
  size?: 'small' | 'large';
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, onClick, size = 'large' }) => {
  const heightClass = size === 'small' ? 'h-48' : 'h-64';

  return (
    <div className="relative group cursor-pointer" onClick={onClick}>
      <div className="absolute inset-0.5 bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative overflow-hidden rounded-2xl border border-blue-500/10 group-hover:border-blue-500/30 transition-colors duration-300">
        <img
          src={image.src}
          alt={image.alt}
          className={`w-full ${heightClass} object-cover transform group-hover:scale-110 transition-transform duration-500`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className={`absolute bottom-0 left-0 right-0 ${size === 'small' ? 'p-4' : 'p-6'}`}>
            <div className={`bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full ${size === 'small' ? 'px-2 py-1 text-xs' : 'px-3 py-1 text-sm'} text-blue-400 inline-block mb-2`}>
              {image.category}
            </div>
            <h3 className={`text-white font-bold ${size === 'small' ? 'text-sm' : 'text-lg'}`}>
              {image.alt}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
