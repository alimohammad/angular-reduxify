export interface ICartInfo {
  id: number;
  productId: number;
  quantity: number;
  pricePerItem: number;
}

export class CartInfo implements ICartInfo {
  id: number;
  productId: number;
  quantity: number;
  pricePerItem: number;
}
