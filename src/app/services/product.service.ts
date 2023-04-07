import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../models/data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addProduct(data:product){
    return this.http.post("http://localhost:4000/products",data)

  }
}
