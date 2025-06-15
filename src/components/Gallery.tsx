import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Camera } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

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
      category: 'Exterior'
    },
    {
      src: '/lovable-uploads/ee5be719-a6a7-4b09-a760-953bbd247229.png',
      alt: 'Ceramic coating',
      category: 'Exterior'
    },
    {
      src: '/lovable-uploads/5e95c32e-e7a2-4e02-b725-ec8d4324ff94.png',
      alt: 'Full detail',
      category: 'Exterior'
    },
    {
      src: '/lovable-uploads/0346f3fe-84de-40ac-8573-acddd1ec916b.png',
      alt: 'Volvo exterior detail',
      category: 'Exterior'
    },
    {
      src: '/lovable-uploads/1f19271d-1f55-4f46-9ba8-b675c53841e4.png',
      alt: 'Volvo side profile',
      category: 'Exterior'
    },
    {
      src: '/lovable-uploads/2b7b9845-d3cd-4d5c-964b-98c17ae253a2.png',
      alt: 'Dashboard detail',
      category: 'Interior'
    },
    {
      src: '/lovable-uploads/f85f1739-addf-43ef-9f4e-18d55c118d41.png',
      alt: 'Steering wheel and gauges',
      category: 'Interior'
    },
    {
      src: '/lovable-uploads/c6d372db-06df-4b6c-8e05-881eb1513e44.png',
      alt: 'Floor mat detail',
      category: 'Interior'
    },
    {
      src: '/lovable-uploads/5516f763-e196-4cc9-9c36-442fdad9eaa8.png',
      alt: 'Interior seat detail',
      category: 'Interior'
    },
    {
      src: '/lovable-uploads/9c3ca17c-2c0a-4059-8912-d23e31b4a4d5.png',
      alt: 'Floor carpet cleaning',
      category: 'Interior'
    },
    {
      src: '/lovable-uploads/2c57e98f-4de4-46e8-9331-0152c63b4a7f.png',
      alt: 'Commercial truck detail',
      category: 'Commercial'
    },
    {
      src: '/lovable-uploads/a589a599-a1b2-4415-b7eb-f841bea144c0.png',
      alt: 'Mobile detailing service',
      category: 'Commercial'
    },
    {
      src: '/lovable-uploads/24e586c9-8c0f-4a31-887f-57fe98c5200b.png',
      alt: 'Center console deep clean',
      category: 'Interior'
    },
    {
      src: '/lovable-uploads/acfa41b8-939c-4676-b821-9a27301c676d.png',
      alt: 'Front floor mat cleaning',
      category: 'Interior'
    },
    {
      src: '/lovable-uploads/2cc2ed89-d7ae-4707-97a4-c1b46c0e923e.png',
      alt: 'Driver floor mat restoration',
      category: 'Interior'
    },
    {
      src: '/lovable-uploads/93cb3224-8bd4-466a-820a-7606e3d549b6.png',
      alt: 'Leather seat conditioning',
      category: 'Interior'
    },
    {
      src: '/lovable-uploads/5387fcc3-d8e0-4b67-a695-a09c6a1d45cb.png',
      alt: 'Clean floor carpet result',
      category: 'Interior'
    },
    {
      src: '/lovable-uploads/99210d3b-0610-4306-b2a2-1efefd17ee2d.png',
      alt: 'Rear seat deep clean',
      category: 'Interior'
    },
    {
      src: '/lovable-uploads/960875c7-d68b-4a25-b500-34687b54adc8.png',
      alt: 'Ford interior dashboard',
      category: 'Interior'
    },
    {
      src: '/lovable-uploads/3f43ecec-d54a-45d8-8d26-0d6eb93a3969.png',
      alt: 'Ford center console detail',
      category: 'Interior'
    },
    {
      src: '/lovable-uploads/db0c07ae-afbf-4b1c-ba36-7f1f1416da74.png',
      alt: 'Ford Escape rear seat interior',
      category: 'Interior'
    },
    {
      src: '/lovable-uploads/77f0ed61-b6da-4df9-8b8b-89bcabb0e8b8.png',
      alt: 'Ford Escape exterior side view',
      category: 'Exterior'
    },
    {
      src: '/lovable-uploads/122ff893-c161-4016-a8e4-81a8af76f68d.png',
      alt: 'Ford Escape rear quarter panel',
      category: 'Exterior'
    },
    {
      src: '/lovable-uploads/93335753-337e-4b43-8175-7ca59be12cf1.png',
      alt: 'Ford Escape front interior detail',
      category: 'Interior'
    },
    {
      src: '/lovable-uploads/c28f09d7-0451-4fb8-b720-7355d6c1b98c.png',
      alt: 'Ford wheel and tire detail',
      category: 'Exterior'
    },
    {
      src: '/lovable-uploads/76c9fd11-ac49-4d6c-8ce6-a06715cc288a.png',
      alt: 'Ford Escape night exterior detail',
      category: 'Exterior'
    },
    {
      src: '/lovable-uploads/7c46d89e-1cf7-4dd2-87be-10e488b6578c.png',
      alt: 'Ford Escape night side profile',
      category: 'Exterior'
    },
    {
      src: '/lovable-uploads/b702f76e-85e6-456d-9a76-774723e57066.png',
      alt: 'Ford floor mat WeatherTech detail',
      category: 'Interior'
    },
    {
      src: '/lovable-uploads/f9c6eeef-dfb2-4ebd-989e-eee1a8406215.png',
      alt: 'Ford Escape mobile detail setup',
      category: 'Commercial'
    }
  ];

  const categories = ['All', 'Exterior', 'Interior', 'Commercial'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(image => image.category === selectedCategory);

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
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
            Browse through our gallery of meticulously detailed vehicles and see the level of perfection we achieve.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border border-blue-500/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {filteredImages.map((image, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedImage(images.indexOf(image))}
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-black/50 hover:bg-black/70 text-white border-blue-500/20" />
          <CarouselNext className="bg-black/50 hover:bg-black/70 text-white border-blue-500/20" />
        </Carousel>

        {/* Grid View for larger screens as backup */}
        <div className="hidden xl:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {filteredImages.slice(0, 8).map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(images.indexOf(image))}
            >
              <div className="absolute inset-0.5 bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl border border-blue-500/10 group-hover:border-blue-500/30 transition-colors duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-2 py-1 text-xs text-blue-400 inline-block mb-1">
                      {image.category}
                    </div>
                    <h3 className="text-white font-bold text-sm">{image.alt}</h3>
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
