import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './product/add-product/add-product.component';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () => import('./product/product.module')
      .then(m => m.ProductModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule],
})
export class InventoryRoutingModule { }
