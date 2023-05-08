import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { BarcodeComponent } from '../barcode/barcode.component';
import { BrandComponent } from '../brand/brand.component';
import { CategoryComponent } from '../category/category.component';
import { SubCategoryComponent } from '../sub-category/sub-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { GetProductComponent } from './get-product/get-product.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ModalProductComponent } from './modal-product/modal-product.component';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AddProductComponent,
    ListProductsComponent,
    EditProductComponent,
    CategoryComponent,
    BrandComponent,
    SubCategoryComponent,
    BarcodeComponent,
    GetProductComponent,
    ModalProductComponent
  ],
  imports: [
    ProductRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule
  ]
})
export class ProductModule { }
