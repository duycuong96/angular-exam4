import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



const layoutClient = [
  MenuComponent, SidebarComponent
]

@NgModule({
  declarations: [
    ...layoutClient
  ],
  imports:[
    RouterModule,
    CommonModule
  ],
  exports: [
    ...layoutClient
  ]
})

export class LayoutClientModule {}
