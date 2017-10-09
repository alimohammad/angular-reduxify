import { Observable } from 'rxjs/Observable';
import { IAppState } from './../../store/app-state';
import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html'
})
export class CartStatusComponent implements OnInit {
  @select((s: IAppState) => s.cart.cartInfo.length)
  cartItemCount$: Observable<number>;
  constructor() { }

  ngOnInit() {
  }

}
