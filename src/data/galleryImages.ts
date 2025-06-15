
import { GalleryImage } from '@/types/gallery';
import { exteriorImages } from './gallery/exteriorImages';
import { interiorImages } from './gallery/interiorImages';
import { commercialImages } from './gallery/commercialImages';

export const galleryImages: GalleryImage[] = [
  ...exteriorImages,
  ...interiorImages,
  ...commercialImages
];
