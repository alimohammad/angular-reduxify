import { ProductConstants } from './constants';
import { IProduct } from './../model/product';
import { Injectable } from '@angular/core';
import { FluxStandardAction } from 'flux-standard-action';
import { dispatch } from '@angular-redux/store';

type Payload = IProduct | IProduct[];
interface MetaData { productType: {}; }
export type ProductAction = FluxStandardAction<Payload, MetaData>;

@Injectable()
export class ProductActions {
  @dispatch()
  getProductList = (): ProductAction => ({
    type: ProductConstants.GET_PRODUCTS,
    payload: null,
    meta: null
  })

  @dispatch()
  getProductStart = (): ProductAction => ({
    type: ProductConstants.GET_PRODUCTS_STARTED,
    payload: null,
    meta: null
  })

  @dispatch()
  getProductListSucceeded = (payload: IProduct[]): ProductAction => ({
    type: ProductConstants.GET_PRODUCTS_SUCCEEDED,
    payload,
    meta: null
  })

  @dispatch()
  getProductListFailed = (error: any): ProductAction => ({
    type: ProductConstants.GET_PRODUCTS_FAILED,
    payload: null,
    meta: null,
    error
  })

  @dispatch()
  productSelected = (payload: any): ProductAction => ({
    type: ProductConstants.PRODUCT_SELECTED,
    payload,
    meta: null
  })
}
