import { Component } from '@angular/core';
import { SellerService } from '../../services/seller.service';
import { login, signUp } from '../../models/data-type';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  showLogin:boolean =true
  authError!:string

  constructor(private sellerService:SellerService){
    this.sellerService.reloadSeller()
  }

  signup(data:signUp):void{
    this.sellerService.userSignUp(data)
  }
  login(data:login):void{
    this.sellerService.userLogin(data)
    this.sellerService.isLoginError.asObservable().subscribe((error)=>{
      if(error){
        this.authError="Email Password is invalid"
      }
    })
  }

  openLogin(){
    this.showLogin=true
  }
  openSignUp(){
    this.showLogin=false
  }
}
