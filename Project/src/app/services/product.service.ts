import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Iproduct } from '../models/product';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl: string = 'https://my-json-server.typicode.com/satishchiluka9/json-fake-directory/products';
  public allproducts : Iproduct[]= []

  constructor(private http:HttpClient) { }

  getProducts(): Observable<any>{
    return this.http.get<Iproduct[]>(this.productUrl)
    .pipe(
      catchError(this.handleError)
    )   
}
handleError(error: HttpErrorResponse){
  console.log("Api url is not correct");
  return throwError(error);
  }

}
