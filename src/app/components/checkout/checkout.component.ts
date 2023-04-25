import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cart, order } from 'src/app/models/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  totalPrice: number | undefined;
  cartData: cart[] | undefined;
  orderMsg: string | undefined;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.currentCart().subscribe((res) => {
      let price = 0;
      this.cartData = res;
      res.forEach((item) => {
        if (item.quantity) {
          price = price + +item.price * item.quantity;
        }
      });
      this.totalPrice = price + price / 10 + 100 - price / 10;
    });
  }

  orderNow(data: { email: string, address: string, contact: string }) {
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user).id;
    if (this.totalPrice) {
      let orderData: order = {
        ...data,
        totalPrice: this.totalPrice,
        userId,
        id: undefined
      }

      this.cartData?.forEach((item) => {
        setTimeout(() => {
          item.id && this.productService.deleteCartItems(item.id);
        }, 3000)
      })

      this.productService.orderNow(orderData).subscribe((result) => {
        if (result) {
          this.orderMsg = "Order has been placed";
          setTimeout(() => {
            this.orderMsg = undefined;
            this.router.navigate(['/my-orders'])
          }, 4000);

        }

      })
    }
  }
}
