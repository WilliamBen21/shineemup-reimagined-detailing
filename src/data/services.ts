
export interface ServiceFeature {
  name: string;
  included: boolean;
}

export interface Service {
  name: string;
  price: string;
  features: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'car',
    title: 'Car Detailing Packages',
    icon: 'Car',
    services: [
      {
        name: 'Hand Wash Package',
        price: '$40',
        features: [
          'Wash',
          'Rim Cleaning',
          'Tire Clean & Tire Shine',
          'Vacuum'
        ]
      },
      {
        name: 'Bronze Package',
        price: '$65',
        features: [
          'Wash',
          'Rim Cleaning',
          'Tire Clean & Tire Shine',
          'Vacuum',
          'Window Cleaning',
          'Interior Wipe Down',
          'Door/Trunk Jam Wipe Out',
          'Air Freshener'
        ]
      },
      {
        name: 'Silver Package',
        price: '$120',
        features: [
          'Wash',
          'Rim Cleaning',
          'Tire Clean & Tire Shine',
          'Window Cleaning',
          'Vacuum',
          'Interior Deep Clean',
          'Interior Protection',
          'Black Trim Protection',
          'Door/Trunk Jam Wipe Out',
          'Air Freshener'
        ]
      },
      {
        name: 'Gold Package',
        price: '$200',
        features: [
          'Wash',
          'Rim Cleaning',
          'Tire Clean & Tire Shine',
          'Window Cleaning',
          'Interior Deep Clean',
          'Interior Protection',
          'Seat & Carpet Shampoo',
          'Black Trim Protection',
          'Engine Bay Cleaning',
          'Door/Trunk Jam Wipe Out',
          'Air Freshener'
        ]
      }
    ]
  },
  {
    id: 'truck',
    title: 'Semi-Truck Detailing',
    icon: 'Truck',
    services: [
      {
        name: 'Exterior Wash Only',
        price: '$65',
        features: ['Exterior Wash']
      },
      {
        name: 'Basic Detail',
        price: '$150',
        features: [
          'Truck Body',
          'Frame Cleaning',
          'Rim Cleaning',
          'Tire Cleaning & Tire Shine',
          'Interior Wipe Down',
          'Interior Floor Cleaning'
        ]
      },
      {
        name: 'Ultimate Detail',
        price: '$250',
        features: [
          'Truck Body',
          'Frame Cleaning',
          'Rim Cleaning',
          'Tire Cleaning & Tire Shine',
          'Interior Deep Cleaning',
          'Floor Cleaning',
          'Interior Protection',
          'Window Cleaning'
        ]
      }
    ]
  },
  {
    id: 'interior',
    title: 'Interior Only Packages',
    icon: 'Car',
    services: [
      {
        name: 'Bronze Package',
        price: '$100',
        features: [
          'Interior Wipe Down',
          'Floor Cleaning',
          'Window Cleaning'
        ]
      },
      {
        name: 'Silver Package',
        price: '$150',
        features: [
          'Interior Deep Cleaning',
          'Interior Protection',
          'Floor Cleaning',
          'Window Cleaning'
        ]
      }
    ]
  }
];
