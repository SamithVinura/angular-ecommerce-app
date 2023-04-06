import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { signUp } from '../data-type';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  showLogin:boolean =true

  constructor(private sellerService:SellerService){
    this.sellerService.reloadSeller()
  }

  signup(data:signUp):void{
    this.sellerService.userSignUp(data)
  }

  openLogin(){
    this.showLogin=true
  }
  openSignUp(){
    this.showLogin=false
  }
}
