import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'list',
    component: ProductListComponent
  },
  {
    path: 'home',
    component: ProductListComponent
  },
  {
    path: 'detail',
    component: ProductDetailComponent
  }
];

export const productRouting = RouterModule.forChild(routes);
