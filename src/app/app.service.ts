import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  getProducts(): any {
    return this.http.get('http://localhost:3000/products')
      .map(this.extractData)
      .subscribe((response: any) => {
        return response;
      }, (error: any) => {
        console.log(error);
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
