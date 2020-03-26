import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-product-add',
  templateUrl: './manage-product-add.component.html',
  styleUrls: ['./manage-product-add.component.css']
})
export class ManageProductAddComponent implements OnInit {

  product: Product = new Product();

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addProduct(){
    this.productService.addProduct(this.product).subscribe(
      data => this.router.navigateByUrl('admin/products')
    );
  }

}
