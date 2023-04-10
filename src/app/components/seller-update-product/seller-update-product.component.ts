import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/models/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
  productData: undefined | product;
  productMessage: undefined | string;

  constructor(private route:ActivatedRoute ,private productService:ProductService){}

  ngOnInit():void{
    let productId = this.route.snapshot.paramMap.get('id')

    productId &&
    this.productService.getProduct(productId).subscribe((res)=>{
      this.productData = res
    })
  }

}
