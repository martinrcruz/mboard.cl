import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';

export enum ProductRoutes {
  GET_PRODUCT = '/api/product/id:',
  LIST_PRODUCTS = '/api/product/list',
  EDIT_PRODUCT = '/api/product/edit',
  DELETE_PRODUCT = '/api/product/delete',
  SAVE_PRODUCT = '/api/product/save',
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private _http: HttpClient
  ) { }

  getProduct(id: number): any {
    let params = `id=${id}`;
    return this._http.get(this.apiUrl + `${ProductRoutes.GET_PRODUCT}?${params}`)
      .pipe(
        map((response) => {
          if (response) {
            return response;
          }
          throw new Error('error');
        })
      )
  }

  listProducts(): any {
    return this._http.get(this.apiUrl + ProductRoutes.LIST_PRODUCTS)
      .pipe(
        map((response) => {
          if (response) {
            return response;
          }
          throw new Error('error');
        })
      )
  }
}
