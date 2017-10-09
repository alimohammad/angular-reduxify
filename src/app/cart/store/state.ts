import { ICartInfo } from './../model/cart-info';

export interface ICartState {
  cartInfo: ICartInfo[];
  error: any;
  loading: boolean;
}

export const CART_INITIAL_STATE: ICartState = {
  cartInfo: new Array<ICartInfo>(),
  error: {},
  loading: false
};
