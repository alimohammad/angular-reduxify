import { ICartState, CART_INITIAL_STATE, CartAction, CartActions, CartConstants } from './';
import { Action } from 'redux';

export function cartReducer(state: ICartState = CART_INITIAL_STATE, a: Action): ICartState {
  const action = a as CartAction;
  switch (action.type) {
    case CartConstants.ADD_ITEM_TO_CART:
      return {
        ...state,
        loading: true,
        cartInfo: state.cartInfo.concat(action.payload)
      };
    case CartConstants.ADD_ITEM_TO_CART_SUCCEEDED:
      return {
        ...state,
        loading: false
      };
    case CartConstants.ADD_ITEM_TO_CART_FDAILED:
      return {
        ...state,
        error: state.error = action.error
      };
    default:
      return state;
  }
}
