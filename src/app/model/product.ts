export enum Category {
  BOOKS = 'Books',
  ELECTRONICS = 'Electronics',
  FURNITURE = 'Furniture',
}

export interface Product {
  id: string;
  category: Category;
  price: number;
  title: string;
  description: string;
  url: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export interface CartProduct extends Product {
  quantity: number;
}
