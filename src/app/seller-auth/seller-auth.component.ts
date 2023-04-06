import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { signUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(private sellerService:SellerService){}

  signup(data:signUp):void{
    this.sellerService.userSignUp(data).subscribe((res)=>{
      console.log(res)
    })
  }
}
