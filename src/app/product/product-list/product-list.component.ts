import { Router } from '@angular/router';
import { IProduct } from './../model/product';
import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  private productList: Array<IProduct>;
  constructor(private service: AppService, private router: Router) { }

  ngOnInit() {
    this.service.getProducts()
      .subscribe(s => {
        this.productList = s;
        console.log(this.productList);
      });
  }

  public showThisProductsDetail(product: IProduct) {
    console.log('Product detail page for:', product);
    this.router.navigate(['/detail']);
  }

  public addThisProductToCart(product: IProduct) {
    console.log('Product to be added to Cart:', product);
  }

}
