import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Product } from "../models/product";
import { Observable } from 'rxjs';

@Injectable()

export class ProductService {

  productsApi = 'https://5dcf7e2d75f9360014c268b9.mockapi.io/product';

  constructor(
    private http: HttpClient
  ){}

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productsApi);
  }

  getProduct(id): Observable<Product>{
    return this.http.get<Product>(`${this.productsApi}/${id}`);
  }

}
