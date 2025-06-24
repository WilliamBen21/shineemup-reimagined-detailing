
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
    imageIds: ['14', '15', '16', '17', '18']
  },
  {
    vehicleId: 'interior-vehicle-1',
    vehicleName: 'Vehicle Interior Detail',
    category: 'interior' as const,
    imageIds: ['19', '20', '21', '22', '23', '24', '25', '26']
  },
  {
    vehicleId: 'ford-interior',
    vehicleName: 'Ford Interior',
    category: 'interior' as const,
    imageIds: ['27', '28', '29', '30', '31']
  },
  {
    vehicleId: 'peterbilt-truck',
    vehicleName: 'Peterbilt Commercial Truck',
    category: 'commercial' as const,
    imageIds: ['32', '33', '34', '35', '36', '42', '43', '44', '45']
  },
  {
    vehicleId: 'mecklenburg-truck',
    vehicleName: 'Mecklenburg Transportation Truck',
    category: 'commercial' as const,
    imageIds: ['37', '38', '39', '40', '41', '46', '47', '48', '49', '50']
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
      // Try to identify before/after based on descriptions and titles
      const beforeImage = groupImages.find(img => 
        img.description?.toLowerCase().includes('before') || 
        img.title?.toLowerCase().includes('before') ||
        img.description?.toLowerCase().includes('needed') ||
        img.description?.toLowerCase().includes('transformation')
      ) || groupImages[0];
      
      const afterImage = groupImages.find(img => 
        img !== beforeImage && (
          img.description?.toLowerCase().includes('detailed') ||
          img.description?.toLowerCase().includes('cleaned') ||
          img.description?.toLowerCase().includes('finished') ||
          img.description?.toLowerCase().includes('complete')
        )
      ) || groupImages[groupImages.length - 1];
      
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
