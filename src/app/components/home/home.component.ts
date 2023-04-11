import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularProducts:undefined|product[]
  trendyProducts:undefined | product[];
  constructor(private productService:ProductService){}

  ngOnInit():void{
    this.productService.popularProducts().subscribe((res)=>{
      console.log(res)
      if(res){
        this.popularProducts = res
      }

    })

    this.productService.trendyProducts().subscribe((data)=>{
      this.trendyProducts=data;
    })
  }

}
