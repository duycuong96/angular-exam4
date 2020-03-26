import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent }           from './admin/admin.component';
import { ManageProductListComponent } from './manage-products/manage-product-list/manage-product-list.component';
import { ManageProductAddComponent } from './manage-products/manage-product-add/manage-product-add.component';
import { ManageProductEditComponent } from './manage-products/manage-product-edit/manage-product-edit.component';



const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'products',
        component: ManageProductListComponent
      },
      {
        path: 'product/add',
        component: ManageProductAddComponent
      },
      {
        path: 'product/edit/:productId',
        component: ManageProductEditComponent
      }
    ]
  },


];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}


