import { ProductEpics } from './../product/store/epics';
import { Injectable } from '@angular/core';

@Injectable()
export class RootEpics {
  constructor(private productEpics: ProductEpics) { }

  public createEpics() {
    return [
      this.productEpics.createProductEpic()
    ];
  }
}
