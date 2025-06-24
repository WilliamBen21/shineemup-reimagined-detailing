
import { GalleryImage, VehicleComparison } from '@/types/gallery';

// Define vehicle groups based on image analysis
const vehicleGroups = [
  {
    vehicleId: 'black-suv-1',
    vehicleName: 'Black Luxury SUV',
    category: 'exterior' as const,
    imageIds: ['9', '10', '11']
  },
  {
    vehicleId: 'dark-sedan-1',
    vehicleName: 'Dark Sedan',
    category: 'exterior' as const,
    imageIds: ['12', '13']
  },
  {
    vehicleId: 'red-ford-escape',
    vehicleName: 'Red Ford Escape',
    category: 'exterior' as const,
    imageIds: ['18', '17', '16', '15', '14']
  },
  {
    vehicleId: 'interior-vehicle-1',
    vehicleName: 'Vehicle Interior Detail',
    category: 'interior' as const,
    imageIds: ['19', '24', '21', '22', '23', '20', '25', '26']
  },
  {
    vehicleId: 'ford-interior',
    vehicleName: 'Ford Interior',
    category: 'interior' as const,
    imageIds: ['27', '30', '29', '28', '31']
  },
  {
    vehicleId: 'peterbilt-interior',
    vehicleName: 'Peterbilt Truck Interior',
    category: 'commercial' as const,
    imageIds: ['32', '33', '34', '35', '36', '42', '43', '44', '45']
  },
  {
    vehicleId: 'range-rover-black',
    vehicleName: 'Black Range Rover',
    category: 'exterior' as const,
    imageIds: ['53', '61', '62']
  },
  {
    vehicleId: 'porsche-white',
    vehicleName: 'White Porsche',
    category: 'exterior' as const,
    imageIds: ['56', '59', '60']
  },
  {
    vehicleId: 'jetta-white',
    vehicleName: 'White Volkswagen Jetta',
    category: 'exterior' as const,
    imageIds: ['57', '58']
  },
  {
    vehicleId: 'mecklenburg-truck',
    vehicleName: 'Mecklenburg Transportation Truck',
    category: 'commercial' as const,
    imageIds: ['51', '52']
  }
];

export const createVehicleComparisons = (images: GalleryImage[]): {
  comparisons: VehicleComparison[];
  unpairedImages: GalleryImage[];
} => {
  const comparisons: VehicleComparison[] = [];
  const usedImageIds = new Set<string>();
  
  vehicleGroups.forEach(group => {
    const groupImages = images.filter(img => group.imageIds.includes(img.id));
    
    if (groupImages.length >= 2) {
      let beforeImage, afterImage;
      
      // Special handling for interior vehicles to use the cleanest images as "after"
      if (group.vehicleId === 'interior-vehicle-1') {
        // Use image 19 as before (dirty/needs work) and image 24 as after (clean/detailed)
        beforeImage = groupImages.find(img => img.id === '19') || groupImages[0];
        afterImage = groupImages.find(img => img.id === '24') || groupImages[groupImages.length - 1];
      } else if (group.vehicleId === 'ford-interior') {
        // Use image 27 as before and image 30 as after (clean floor mats)
        beforeImage = groupImages.find(img => img.id === '27') || groupImages[0];
        afterImage = groupImages.find(img => img.id === '30') || groupImages[groupImages.length - 1];
      } else if (group.vehicleId === 'mecklenburg-truck') {
        // Use image 51 as before and image 52 as after
        beforeImage = groupImages.find(img => img.id === '51') || groupImages[0];
        afterImage = groupImages.find(img => img.id === '52') || groupImages[groupImages.length - 1];
      } else {
        // Regular logic for other vehicles
        beforeImage = groupImages.find(img => 
          img.description?.toLowerCase().includes('before') || 
          img.title?.toLowerCase().includes('before') ||
          img.description?.toLowerCase().includes('needed') ||
          img.description?.toLowerCase().includes('transformation')
        ) || groupImages[0];
        
        afterImage = groupImages.find(img => 
          img !== beforeImage && (
            img.description?.toLowerCase().includes('detailed') ||
            img.description?.toLowerCase().includes('cleaned') ||
            img.description?.toLowerCase().includes('finished') ||
            img.description?.toLowerCase().includes('complete')
          )
        ) || groupImages[groupImages.length - 1];
      }
      
      if (beforeImage && afterImage && beforeImage !== afterImage) {
        comparisons.push({
          vehicleId: group.vehicleId,
          vehicleName: group.vehicleName,
          category: group.category,
          before: { ...beforeImage, stage: 'before' },
          after: { ...afterImage, stage: 'after' }
        });
        
        usedImageIds.add(beforeImage.id);
        usedImageIds.add(afterImage.id);
      }
    }
  });
  
  const unpairedImages = images.filter(img => !usedImageIds.has(img.id));
  
  return { comparisons, unpairedImages };
};
