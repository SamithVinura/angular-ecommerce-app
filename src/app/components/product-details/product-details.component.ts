import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/models/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productData:undefined | product;
  productQuantity:number=1;
  removeCart=false;
  cartData:product|undefined;

  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService) {}

  ngOnInit():void{
    let productId= this.activatedRoute.snapshot.paramMap.get('id')
    productId && this.productService.getProduct(productId).subscribe((res)=>{
      this.productData = res
    })
  }

  handleQuantity(value:string){
    if(this.productQuantity<20 && value==='plus'){
      this.productQuantity += 1
    }else if(this.productQuantity>1 && value==='min'){
      this.productQuantity-=1;
    }
  }

}
