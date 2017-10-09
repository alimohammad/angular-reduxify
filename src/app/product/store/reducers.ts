import { IProductState, PRODUCT_INITIAL_STATE } from './state';
import { ProductsActions, ProductAction } from './actions';
import { ProductConstants } from './constants';
import { IProduct } from './../model/product';
import { Action } from 'redux';

export function productReducer(state: IProductState = PRODUCT_INITIAL_STATE, a: Action): IProductState {
  const action = a as ProductAction;
  switch (action.type) {
    case ProductConstants.GET_PRODUCTS_STARTED:
      return {
        ...state,
        loading: true
      };
    case ProductConstants.GET_PRODUCTS_SUCCEEDED:
      return {
        ...state,
        products: state.products = <IProduct[]>action.payload,
        loading: false
      };
    case ProductConstants.GET_PRODUCTS_FAILED:
      return {
        ...state,
        error: state.error = action.error
      };
    case ProductConstants.PRODUCT_SELECTED:
      return {
        ...state,
        // Very import point to be noted, updated hierarichal states.
        uiState: {
          ...state.uiState,
          selectedProduct: <IProduct>action.payload
        }
      };
    default:
      return state;
  }
}
