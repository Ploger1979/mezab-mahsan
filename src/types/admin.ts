export type Role = 'super_admin' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  createdAt: string;
}

export interface Offer {
  id: string;
  productId: string;
  discountPercentage: number;
  newPrice: number;
  promoText: string;
  isActive: boolean;
  validUntil: string;
}

// Menu item extending product
export interface AdminMenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isAvailable: boolean;
  hasOffer?: boolean;
  offerDetails?: Offer;
  createdAt: string;
  updatedAt: string;
}
