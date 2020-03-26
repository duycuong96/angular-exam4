import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';


import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LayoutClientModule } from '../layouts/layouts.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    LayoutClientModule,
  ]
})
export class ProductsModule { }
