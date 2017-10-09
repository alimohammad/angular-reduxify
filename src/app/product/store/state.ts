import { IProduct, Product } from './../model/product';

export interface IProductState {
  products: IProduct[];
  error: any;
  loading: boolean;
  uiState: IUiState;
}

export const PRODUCT_INITIAL_STATE: IProductState = {
  products: new Array<IProduct>(),
  error: {},
  loading: false,
  uiState: {
    selectedProduct: new Product()
  }
};

export interface IUiState {
  selectedProduct: IProduct;
}
