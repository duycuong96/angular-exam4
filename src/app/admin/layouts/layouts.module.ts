import { NgModule } from "@angular/core";

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


const layoutAdmin = [
  AsideComponent, HeaderComponent, FooterComponent
]

@NgModule({
  declarations: [
    ...layoutAdmin
  ],
  imports:[
    RouterModule,
    CommonModule
  ],
  exports: [
    ...layoutAdmin
  ]
})

export class LayoutAdminModule {}
