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

  productData:undefined|product

  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService) {}

  ngOnInit():void{
    let productId= this.activatedRoute.snapshot.paramMap.get('id')
    productId && this.productService.getProduct(productId).subscribe((res)=>{
      this.productData = res
    })

  }

}
