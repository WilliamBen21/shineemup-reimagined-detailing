
export interface GalleryImage {
  src: string;
  alt: string;
  category: 'Exterior' | 'Interior' | 'Commercial';
}

export type GalleryCategory = 'All' | 'Exterior' | 'Interior' | 'Commercial';
