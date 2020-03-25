import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageComponent } from './client/homepage/homepage.component';

import { AboutComponent } from './client/about/about.component';
import { LayoutClientModule } from './client/layouts/layouts.module';
import { PageNotFoundComponent } from './client/page-not-found/page-not-found.component';
import { ProductListComponent } from './client/products/product-list/product-list.component';
import { ProductDetailComponent } from './client/products/product-detail/product-detail.component';









@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,

    AboutComponent,
    PageNotFoundComponent,
    ProductListComponent,
    ProductDetailComponent,

  ],
  imports: [
    BrowserModule,
    LayoutClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
