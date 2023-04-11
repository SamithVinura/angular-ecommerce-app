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

  productList(){
    return this.http.get<product[]>("http://localhost:4000/products")
  }

  deleteProduct(id:number){
    return this.http.delete(`http://localhost:4000/products/${id}`)
  }

  getProduct(id:string){
    return this.http.get<product>(`http://localhost:4000/products/${id}`)
  }

  updateProduct(body:product){
    return this.http.put<product>(`http://localhost:4000/products/${body.id}`,body)
  }

  popularProducts(){
    return this.http.get<product[]>('http://localhost:4000/products?_limit=3')
  }

  trendyProducts() {
    return this.http.get<product[]>('http://localhost:4000/products?_limit=8');
  }
}
