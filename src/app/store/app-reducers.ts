import { combineReducers } from 'redux';
import { routerReducer } from '@angular-redux/router';
import { Action } from 'redux';

import { IAppState } from './';
import { productReducer } from './../product/store';
import { cartReducer } from './../cart/store';

export const rootReducer = combineReducers<IAppState>({
  product: productReducer,
  cart: cartReducer,
  // router: routerReducer
});
