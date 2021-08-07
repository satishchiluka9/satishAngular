import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl: string = 'https://my-json-server.typicode.com/satishchiluka9/json-fake-directory/products';
  //public allproducts : Iproduct[]= []

  constructor(private http:HttpClient) { }

  getProducts(): Observable<any>{
    return this.http.get(this.productUrl);
  }
}
