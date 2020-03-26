import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AdminComponent }           from './admin/admin.component';
import { AdminDashboardComponent }  from './admin-dashboard/admin-dashboard.component';


import { AdminRoutingModule }       from './admin-routing.module';
import { LayoutAdminModule } from './layouts/layouts.module';
import { ManageProductsModule } from './manage-products/magage-products.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutAdminModule,
    ManageProductsModule,
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,

  ]
})
export class AdminModule {}


