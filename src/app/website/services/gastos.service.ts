import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GastosService {

  apiUrl: string = environment.apiUrl;
  controller: string = '/gastos';

  constructor(
    private http: HttpClient
  ) { }

  getGastos(){
    return this.http.get(`${this.apiUrl}${this.controller}`);
  }
}
