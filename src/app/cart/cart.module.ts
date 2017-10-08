import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartStatusComponent } from './cart-status/cart-status.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartStatusComponent],
  exports: [CartStatusComponent]
})
export class CartModule { }
