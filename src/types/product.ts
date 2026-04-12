export type Category = 'المشويات' | 'الشاورما' | 'الأكلات الشعبية' | 'الحلويات';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  isAvailable: boolean;
}
