import { Component, OnInit } from '@angular/core';
import { order } from 'src/app/models/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orderData:order[]|undefined
  constructor(private productService:ProductService){}

  ngOnInit():void{
    this.getOderList()
  }

  canselOrder(orderId:number|undefined){
    orderId && this.productService.cancelOrder(orderId).subscribe((res)=>{
      if(res){
        this.getOderList()
      }
    })
  }

  getOderList(){
    this.productService.orderList().subscribe((res)=>{
      if(res){
        this.orderData = res;
      }
    })
  }

}
