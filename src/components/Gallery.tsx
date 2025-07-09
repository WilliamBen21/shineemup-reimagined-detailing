import React, { useState, useMemo } from 'react';
import { GalleryCategory } from '@/types/gallery';
import { galleryImages } from '@/data/galleryImages';
import { createVehicleComparisons } from '@/utils/vehicleMatching';
import BeforeAfterComparison from './BeforeAfterComparison';
import { Sparkles, ArrowLeftRight, ChevronLeft, ChevronRight } from 'lucide-react';
const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'comparisons' | 'individual'>('comparisons');
  const categories = [{
    id: 'all',
    label: 'All Work'
  }, {
    id: 'exterior',
    label: 'Exterior'
  }, {
    id: 'interior',
    label: 'Interior'
  }, {
    id: 'commercial',
    label: 'Commercial'
  }];
  const {
    comparisons,
    unpairedImages
  } = useMemo(() => {
    return createVehicleComparisons(galleryImages);
  }, []);
  const filteredComparisons = activeCategory === 'all' ? comparisons : comparisons.filter(comp => comp.category === activeCategory);
  const filteredUnpairedImages = activeCategory === 'all' ? unpairedImages : unpairedImages.filter(img => img.category === activeCategory);

  // Get all currently visible images for navigation
  const getAllVisibleImages = () => {
    if (viewMode === 'individual') {
      return activeCategory === 'all' ? galleryImages : galleryImages.filter(img => img.category === activeCategory);
    } else {
      const comparisonImages = filteredComparisons.flatMap(comp => [comp.before, comp.after]).filter(Boolean);
      return [...comparisonImages, ...filteredUnpairedImages];
    }
  };
  const visibleImages = getAllVisibleImages();
  const currentImageIndex = selectedImage ? visibleImages.findIndex(img => img?.src === selectedImage) : -1;
  const navigateImage = (direction: 'prev' | 'next') => {
    if (currentImageIndex === -1) return;
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentImageIndex === 0 ? visibleImages.length - 1 : currentImageIndex - 1;
    } else {
      newIndex = currentImageIndex === visibleImages.length - 1 ? 0 : currentImageIndex + 1;
    }
    setSelectedImage(visibleImages[newIndex]?.src || null);
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      navigateImage('prev');
    } else if (e.key === 'ArrowRight') {
      navigateImage('next');
    } else if (e.key === 'Escape') {
      setSelectedImage(null);
    }
  };
  return <section id="gallery" className="py-12 md:py-16 lg:py-20 bg-[#080808] relative overflow-hidden">
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
            Before & After
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"> Transformations</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base lg:text-lg px-4">
            See the incredible transformations we bring to every vehicle. Each comparison shows 
            our commitment to excellence and attention to detail.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-6 md:mb-8 px-4">
          <div className="flex gap-2 bg-black/40 backdrop-blur-xl rounded-2xl p-2 border border-blue-500/10">
            <button onClick={() => setViewMode('comparisons')} className={`px-3 py-2 md:px-4 md:py-2 rounded-xl font-medium transition-all duration-300 text-xs md:text-sm flex items-center gap-2 ${viewMode === 'comparisons' ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' : 'text-gray-400 hover:text-white hover:bg-blue-500/10'}`}>
              <ArrowLeftRight className="w-3 h-3 md:w-4 md:h-4" />
              Before & After
            </button>
            <button onClick={() => setViewMode('individual')} className={`px-3 py-2 md:px-4 md:py-2 rounded-xl font-medium transition-all duration-300 text-xs md:text-sm ${viewMode === 'individual' ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' : 'text-gray-400 hover:text-white hover:bg-blue-500/10'}`}>
              Individual
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-6 md:mb-8 px-4">
          <div className="flex flex-wrap justify-center gap-2 bg-black/40 backdrop-blur-xl rounded-2xl p-2 border border-blue-500/10 max-w-full">
            {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id as GalleryCategory)} className={`px-3 py-2 md:px-6 md:py-3 rounded-xl font-medium transition-all duration-300 text-xs md:text-sm whitespace-nowrap ${activeCategory === category.id ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' : 'text-gray-400 hover:text-white hover:bg-blue-500/10'}`}>
                {category.label}
              </button>)}
          </div>
        </div>

        {/* Before/After Comparisons */}
        {viewMode === 'comparisons' && <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 px-2 md:px-0 mb-8">
              {filteredComparisons.map(comparison => <BeforeAfterComparison key={comparison.vehicleId} comparison={comparison} onImageClick={setSelectedImage} />)}
            </div>

            {filteredComparisons.length === 0 && <div className="text-center py-8">
                <p className="text-gray-400 text-base md:text-lg">No before/after comparisons available in this category yet.</p>
              </div>}

            {/* Additional Individual Images */}
            {filteredUnpairedImages.length > 0 && <>
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Additional Work</h3>
                  <p className="text-gray-400 text-sm md:text-base">Individual showcase images</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 md:gap-4 px-2 md:px-0">
                  {filteredUnpairedImages.map(image => <div key={image.id} className="relative group cursor-pointer" onClick={() => setSelectedImage(image.src)}>
                      <div className="absolute inset-0.5 bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                      <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-blue-500/10 hover:border-blue-500/30 transition-colors duration-300">
                        <div className="aspect-[4/3] overflow-hidden">
                          
                        </div>
                        <div className="p-2 md:p-3">
                          {image.title && <h3 className="text-white font-semibold mb-1 text-sm md:text-base">{image.title}</h3>}
                          {image.description && <p className="text-gray-400 text-xs md:text-sm">{image.description}</p>}
                        </div>
                      </div>
                    </div>)}
                </div>
              </>}
          </>}

        {/* Individual Images View */}
        {viewMode === 'individual' && <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 md:gap-4 px-2 md:px-0">
            {(activeCategory === 'all' ? galleryImages : galleryImages.filter(img => img.category === activeCategory)).map(image => <div key={image.id} className="relative group cursor-pointer" onClick={() => setSelectedImage(image.src)}>
                <div className="absolute inset-0.5 bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-blue-500/10 hover:border-blue-500/30 transition-colors duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-2 md:p-3">
                    {image.title && <h3 className="text-white font-semibold mb-1 text-sm md:text-base">{image.title}</h3>}
                    {image.description && <p className="text-gray-400 text-xs md:text-sm">{image.description}</p>}
                  </div>
                </div>
              </div>)}
          </div>}

        {/* Enhanced Modal with Navigation */}
        {selectedImage && <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)} onKeyDown={handleKeyPress} tabIndex={0}>
            <div className="relative max-w-[95vw] max-h-[95vh] md:max-w-4xl md:max-h-full">
              <img src={selectedImage} alt="Gallery image" className="max-w-full max-h-full object-contain rounded-lg" />
              
              {/* Close Button */}
              <button onClick={() => setSelectedImage(null)} className="absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors text-lg md:text-xl">
                ×
              </button>

              {/* Navigation Arrows */}
              {visibleImages.length > 1 && <>
                  {/* Previous Button */}
                  <button onClick={e => {
              e.stopPropagation();
              navigateImage('prev');
            }} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors">
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                  </button>

                  {/* Next Button */}
                  <button onClick={e => {
              e.stopPropagation();
              navigateImage('next');
            }} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors">
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </>}

              {/* Image Counter */}
              {visibleImages.length > 1 && <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {visibleImages.length}
                </div>}
            </div>
          </div>}
      </div>
    </section>;
};
export default Gallery;