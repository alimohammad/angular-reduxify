import { CartInfo } from './../../cart/model/cart-info';
import { CartActions } from './../../cart/store/actions';
import { ProductActions } from './../store/actions';
import { Observable } from 'rxjs/Observable';
import { IAppState } from './../../store/app-state';
import { Router } from '@angular/router';
import { IProduct } from './../model/product';
import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  @select((s: IAppState) => s.product.products)
  productList$: Observable<IProduct[]>;
  constructor(
    private service: AppService,
    private router: Router,
    private prodActions: ProductActions,
    private cartActions: CartActions) { }

  ngOnInit() {
    this.service.getProducts();
  }

  showThisProductsDetail(product: IProduct) {
    console.log('Product detail page for:', product);
    this.prodActions.productSelected(product);
    this.router.navigate(['/detail']);
  }

  addThisProductToCart(product: IProduct) {
    const cartItem = new CartInfo();
    cartItem.productId = product.id;
    cartItem.quantity = 1;
    cartItem.pricePerItem = product.price;
    this.cartActions.addItemToCart(cartItem);
  }

}
