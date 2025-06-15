
import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { GalleryImage } from '@/types/gallery';

interface GalleryModalProps {
  selectedImage: number | null;
  images: GalleryImage[];
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ 
  selectedImage, 
  images, 
  onClose, 
  onPrevious, 
  onNext 
}) => {
  if (selectedImage === null) return null;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center">
      <div className="relative w-full max-w-6xl mx-4">
        <button
          onClick={onClose}
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
            onClick={(e) => { e.stopPropagation(); onPrevious(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
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
  );
};

export default GalleryModal;
