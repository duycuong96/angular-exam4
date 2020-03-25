import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Product } from "../models/product";

@Injectable()

export class ProductService {

  constructor(
    private http: HttpClient
  ){}

}
