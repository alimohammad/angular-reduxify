export interface IProduct {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export class Product implements IProduct  {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}
