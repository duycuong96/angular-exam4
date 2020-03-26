import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageComponent } from './client/homepage/homepage.component';

import { AboutComponent } from './client/about/about.component';
import { LayoutClientModule } from './client/layouts/layouts.module';
import { PageNotFoundComponent } from './client/page-not-found/page-not-found.component';

import { ProductsModule } from './client/products/products.module';
import { ProductService } from './services/product.service';
import { SlideComponent } from './client/slide/slide.component';









@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,

    AboutComponent,
    PageNotFoundComponent,
    SlideComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LayoutClientModule,
    ProductsModule,
    AppRoutingModule
  ],
  providers: [ ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
