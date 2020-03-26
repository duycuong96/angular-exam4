import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-manage-product-list',
  templateUrl: './manage-product-list.component.html',
  styleUrls: ['./manage-product-list.component.css']
})
export class ManageProductListComponent implements OnInit {

  products: Product[]

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      data => {
        console.log(data);
        this.products = data
      }
    )
  }

  removeProduct(id){
    this.productService.removeProduct(id).subscribe(
      data => {
        console.log(data);
        this.products =  this.products.filter(
          product => product.id != data.id
        );
      }
    )
  }

}
