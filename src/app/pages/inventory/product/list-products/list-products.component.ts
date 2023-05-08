import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';
import { AddProductComponent } from '../add-product/add-product.component';
import { EditProductComponent } from '../edit-product/edit-product.component';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;


  displayedColumns: string[] = ['id', 'name', 'description', 'editar', 'eliminar'];

  dataSource: any;

  constructor(
    private _product: ProductService,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this._product.listProducts()
      .subscribe({
        next: (res: any) => {
          this.dataSource = new MatTableDataSource(res.dto);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err: any) => {
          alert('Error fetching')
        }
      })
  }

  openAddProduct() {
    this._dialog.open(AddProductComponent, {
      width: '900px',
    })
  }

  openEditProduct(id: number) {
    this._dialog.open(EditProductComponent, {
      data: {
        product_id: id
      },
      width: '900px',
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
