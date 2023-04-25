import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/models/data-type';
import { cart } from 'src/app/models/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productData: undefined | product;
  productQuantity: number = 1;
  removeCart = false;
  cartData: product | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  /* ngOnInit(): void {
    let productId = this.activatedRoute.snapshot.paramMap.get('id');
    productId &&
      this.productService.getProduct(productId).subscribe((res) => {
        this.productData = res;
        let cartData = localStorage.getItem('localCart');
        if (productId && cartData) {
          let items = JSON.parse(cartData);
          items = items.filter(
            (item: product) => productId === item.id.toString()
          );
          if (items.length) {
            this.removeCart = true;
          } else {
            this.removeCart = false;
          }
        }

        let user = localStorage.getItem('user');
        if(user){
          let userId= user && JSON.parse(user).id;
          this.productService.getCartList(userId);

          this.productService.cartData.subscribe((result)=>{
            let item = result.filter((item:product)=>productId?.toString()===item.productId?.toString())
         if(item.length){
          this.cartData=item[0];

          this.removeCart=true;
         }
          })
        }

      });
  }

  handleQuantity(value: string) {
    if (this.productQuantity < 20 && value === 'plus') {
      this.productQuantity += 1;
    } else if (this.productQuantity > 1 && value === 'min') {
      this.productQuantity -= 1;
    }
  }

  addToCart() {
    if (this.productData) {
      this.productData.quantity = this.productQuantity;
      if (!localStorage.getItem('user')) {
        this.productService.localAddToCart(this.productData);
        this.removeCart = true;
      } else {
        let user = localStorage.getItem('user')
        let userId = user && JSON.parse(user).id
        let cartData:cart = {
          ...this.productData,
          productId:this.productData.id,
          userId,

        }
        delete cartData.id
        this.productService.addToCart(cartData).subscribe((res)=>{
          if(res){
            this.productService.getCartList(userId)
            this.removeCart = true
          }
        })
      }
    }
  }

  removeToCart(productId:number){
    if(!localStorage.getItem('user')){
this.productService.removeItemFromCart(productId)
    }else{
      this.cartData && this.productService.removeToCart(this.cartData.id)
      .subscribe((result)=>{
        let user = localStorage.getItem('user');
        let userId= user && JSON.parse(user).id;
        this.productService.getCartList(userId)
      })
    }
    this.removeCart=false
  } */

  ngOnInit(): void {
    let productId= this.activatedRoute.snapshot.paramMap.get('id');
    console.warn(productId);
    productId && this.productService.getProduct(productId).subscribe((result)=>{
      this.productData= result;
      let cartData= localStorage.getItem('localCart');
      if(productId && cartData){
        let items = JSON.parse(cartData);
        items = items.filter((item:product)=>productId=== item.id.toString());
        if(items.length){
          this.removeCart=true
        }else{
          this.removeCart=false
        }
      }

      let user = localStorage.getItem('user');
      if(user){
        let userId= user && JSON.parse(user).id;
        this.productService.getCartList(userId);

        this.productService.cartData.subscribe((result)=>{
          let item = result.filter((item:product)=>productId?.toString()===item.productId?.toString())
       if(item.length){
        this.cartData=item[0];
        this.removeCart=true;
       }
        })
      }



    })

  }
  handleQuantity(val:string){
    if(this.productQuantity<20 && val==='plus'){
      this.productQuantity+=1;
    }else if(this.productQuantity>1 && val==='min'){
      this.productQuantity-=1;
    }
  }

  addToCart(){
    if(this.productData){
      this.productData.quantity = this.productQuantity;
      if(!localStorage.getItem('user')){
        this.productService.localAddToCart(this.productData);
        this.removeCart=true
      }else{
        let user = localStorage.getItem('user');
        let userId= user && JSON.parse(user).id;
        let cartData:cart={
          ...this.productData,
          productId:this.productData.id,
          userId
        }
        delete cartData.id;
        this.productService.addToCart(cartData).subscribe((result)=>{
          if(result){
           this.productService.getCartList(userId);
           this.removeCart=true
          }
        })
      }

    }
  }
  removeToCart(productId:number){
    if(!localStorage.getItem('user')){
this.productService.removeItemFromCart(productId)
    }else{


      this.cartData && this.productService.removeToCart(this.cartData.id)
      .subscribe((result)=>{
        let user = localStorage.getItem('user');
        let userId= user && JSON.parse(user).id;
        this.productService.getCartList(userId)
      })
    }
    this.removeCart=false
  }

}
