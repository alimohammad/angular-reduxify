import { CartConstants } from './constants';
import { ICartInfo } from './../model/cart-info';
import { Injectable } from '@angular/core';
import { FluxStandardAction } from 'flux-standard-action';
import { dispatch } from '@angular-redux/store';

type Payload = ICartInfo;
interface MetaData { cartState: {}; }
export type CartAction = FluxStandardAction<Payload, MetaData>;

@Injectable()
export class CartActions {
  @dispatch()
  addItemToCart = (payload: ICartInfo): CartAction => (
    {
      type: CartConstants.ADD_ITEM_TO_CART,
      payload,
      meta: null
    }
  )

  @dispatch()
  addItemToCartSucceeded = (): CartAction => ({
    type: CartConstants.ADD_ITEM_TO_CART,
    payload: null,
    meta: null
  })

  @dispatch()
  addItemToCartFailed = (error: any): CartAction => ({
    type: CartConstants.ADD_ITEM_TO_CART,
    payload: null,
    meta: null,
    error
  })
}
