export interface ICartInfo {
  productId: number;
  quantity: number;
  pricePerItem: number;
}

export class CartInfo implements ICartInfo {
  productId: number;
  quantity: number;
  pricePerItem: number;
}
