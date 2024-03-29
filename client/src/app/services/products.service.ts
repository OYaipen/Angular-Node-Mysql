import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';
import { Product } from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {

  }
  getProducts() {
    return this.http.get(`${this.API_URI}/products`)
  }
  getProduct(id: String) {
    return this.http.get(`${this.API_URI}/products/${id}`)
  }
  deleteProduct(id: String) {
    return this.http.delete(`${this.API_URI}/products/${id}`)
  }
  saveProduct(product: Product) {
    return this.http.post(`${this.API_URI}/products`, product)
  }
  updateProduct(id: String|number, updateProduct: Product):Observable<Product> {
    return this.http.put(`${this.API_URI}/products/${id}`, updateProduct)
  }
}
