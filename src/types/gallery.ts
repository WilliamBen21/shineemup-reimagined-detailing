
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'exterior' | 'interior' | 'commercial';
  title?: string;
  description?: string;
}

export type GalleryCategory = 'all' | 'exterior' | 'interior' | 'commercial';
