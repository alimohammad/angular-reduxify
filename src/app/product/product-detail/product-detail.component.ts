import { IProduct } from './../model/product';
import { Observable } from 'rxjs/Observable';
import { IAppState } from './../../store/app-state';
import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  @select((s: IAppState) => s.product.uiState.selectedProduct)
  selectedProduct$: Observable<IProduct>;
  constructor() { }

  ngOnInit() {
  }

}
