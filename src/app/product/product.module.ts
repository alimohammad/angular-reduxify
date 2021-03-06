import { productRouting } from './product.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports: [
    CommonModule,
    productRouting
  ],
  declarations: [ProductListComponent, ProductDetailComponent]
})
export class ProductModule { }
