import { IProduct } from './product/model/product';
import { HttpClient } from '@angular/common/http';
import { ProductActions } from './product/store/actions';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {

  constructor(private http: HttpClient, private productActions: ProductActions) { }

  getProducts() {
    this.productActions.getProductList();
    return this.http.get<IProduct[]>('http://localhost:3000/products')
      .subscribe((response: any) => {
        this.productActions.getProductListSucceeded(response);
      }, (error: any) => {
        this.productActions.getProductListFailed(error);
      });
  }

  extractData(resp: Response) {
    const body = resp.json();
    if (body) {
      return body.data || body;
    } else {
      return {};
    }
  }
}
