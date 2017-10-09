import { ProductActions } from './product/store/actions';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {

  constructor(private http: Http, private productActions: ProductActions) { }

  getProducts() {
    this.productActions.getProductList();
    return this.http.get('http://localhost:3000/products')
      .map(this.extractData)
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
