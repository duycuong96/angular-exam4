import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-manage-product-edit',
  templateUrl: './manage-product-edit.component.html',
  styleUrls: ['./manage-product-edit.component.css']
})
export class ManageProductEditComponent implements OnInit {

  product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.route.params.subscribe(
      param => {
        this.productService.getProduct(param.productId).subscribe(
          data => {
            this.product = data;
          }
        )
      }
    )
  }

  updateProduct(){
    this.productService.updateProduct(this.product).subscribe(
      data => {
        this.router.navigateByUrl('/admin/products');
      }
    )
  }

}
