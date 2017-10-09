import { ICartState, CART_INITIAL_STATE } from './../cart/store';
import { IProductState, PRODUCT_INITIAL_STATE } from './../product/store/state';
export interface IAppState {
  product: IProductState;
  cart: ICartState;
}

export const INITIAL_STATE: IAppState = {
  product: PRODUCT_INITIAL_STATE,
  cart: CART_INITIAL_STATE
};
