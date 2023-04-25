import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { order } from 'src/app/models/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  totalPrice: number | undefined;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.currentCart().subscribe((res) => {
      let price = 0;
      res.forEach((item) => {
        if (item.quantity) {
          price = price + +item.price * item.quantity;
        }
      });
      this.totalPrice = price + price / 10 + 100 - price / 10;
    });
  }

  orderNow(data: order) {
    let user = localStorage.getItem('user')
    let userId = user && JSON.parse(user).id
    if(this.totalPrice){
      let orderData ={
        ...data,
        totalPrice:this.totalPrice,
        userId,
        id:undefined
      }
      this.productService.orderNow(orderData).subscribe((res)=>{
        if(res){

        }
      })
    }
  }
}
