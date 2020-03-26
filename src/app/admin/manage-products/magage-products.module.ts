import { NgModule } from "@angular/core";
import { ManageProductListComponent } from './manage-product-list/manage-product-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManageProductsRoutingModule } from './manage-products-routing.module';
import { ManageProductEditComponent } from './manage-product-edit/manage-product-edit.component';
import { ManageProductAddComponent } from './manage-product-add/manage-product-add.component';


@NgModule({
  declarations: [
    ManageProductListComponent,
    ManageProductEditComponent,
    ManageProductAddComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ManageProductsRoutingModule,
  ]
})

export class ManageProductsModule {}
