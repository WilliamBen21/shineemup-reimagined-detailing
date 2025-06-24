
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'exterior' | 'interior' | 'commercial';
  title?: string;
  description?: string;
  vehicleId?: string;
  stage?: 'before' | 'after';
}

export interface VehicleComparison {
  vehicleId: string;
  vehicleName: string;
  category: 'exterior' | 'interior' | 'commercial';
  before?: GalleryImage;
  after?: GalleryImage;
}

export type GalleryCategory = 'all' | 'exterior' | 'interior' | 'commercial';
