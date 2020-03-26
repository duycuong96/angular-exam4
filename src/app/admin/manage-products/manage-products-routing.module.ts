import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ManageProductListComponent } from './manage-product-list/manage-product-list.component';

const manageProductsRoutes: Routes = [

]

@NgModule({
  imports: [
    RouterModule.forChild(manageProductsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ManageProductsRoutingModule {}
