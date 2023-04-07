import { Component } from '@angular/core';
import { product } from 'src/app/models/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  addProductMessage!:string|undefined

  constructor(private productService:ProductService){}

  submit(data:product){
    this.productService.addProduct(data).subscribe((res)=>{
      if(res){
        this.addProductMessage= "Product is added successfully"
      }
    })

    setTimeout(()=>{
      this.addProductMessage = ""
    },1500)
  }

}
