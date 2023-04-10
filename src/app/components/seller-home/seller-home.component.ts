import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productList:undefined | product[]

  constructor(private productService:ProductService){}

  ngOnInit():void{
    this.productService.productList().subscribe((res)=>{
      if(res){
        this.productList =res
      }
    })
  }

}
