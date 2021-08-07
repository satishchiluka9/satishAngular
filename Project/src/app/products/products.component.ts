import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
  products: any = [];
  error = null;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.fetchproductData();
  }

  fetchproductData(){
    this.productService.getProducts().subscribe((response) => {
     this.products = response;
     //console.log(response);
    },
    (error) => {
      console.log(error)
      this.error = error.message
    })
  }
}
