import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL: string = "api/";

  constructor(private httpClient: HttpClient) { }

  getProducts(){
    return this.httpClient.get(this.API_URL + 'products')
  }

  getProduct(productId){
    return this.httpClient.get(`${this.API_URL + 'products'}/${productId}`)
  }
}
