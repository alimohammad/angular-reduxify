import { IProduct } from './../model/product';
import { ProductConstants } from './constants';
import { IAppState } from './../../store/app-state';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Epic, ActionsObservable, createEpicMiddleware } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import { ProductActions, ProductAction } from './';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';

@Injectable()
export class ProductEpics {
  constructor(private http: HttpClient, private productionActions: ProductActions) { }

  public createProductEpic() {
    return createEpicMiddleware(this.fetchProductEpic());
  }

  private fetchProductEpic(): Epic<ProductAction, IAppState> {
    return (action$, store) => action$
      .ofType(ProductConstants.GET_PRODUCTS)
      .switchMap(() => this.http.get<IProduct[]>('http://localhost:3000/products')
        .map(data => (this.productionActions.getProductListSucceeded(data)))
        .catch(error => of(this.productionActions.getProductListFailed(error)))
        .startWith(this.productionActions.getProductStart()));
  }
}
