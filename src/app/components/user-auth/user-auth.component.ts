import { Component, OnInit } from '@angular/core';
import { cart, login, product, signUp } from 'src/app/models/data-type';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css'],
})
export class UserAuthComponent implements OnInit {
  showLogin: boolean = true;
  authError: string = '';
  constructor(private userService: UserService,private productService: ProductService) {}

  ngOnInit(): void {
    this.userService.userAuthReload();
  }

  signUp(data: signUp) {
    this.userService.userSignUp(data);
  }

  openSignUp() {
    this.showLogin = false;
  }
  openLogin() {
    this.showLogin = true;
  }

  login(data: login) {
    console.log(data)
    this.userService.userLogin(data)
    this.userService.invalidUserAuth.subscribe((val)=>{
      if(val){
        this.authError = "User not found"
      }else{
        this.authError = ''
      }
    })
  }

  localCartToRemoteCart(){
    let data = localStorage.getItem('localCart')
    if(data){
      let cartDataList:product[] = JSON.parse(data)
      let user = localStorage.getItem('user')
      let userId= user && JSON.parse(user).id
      cartDataList.forEach((productItem:product,index)=>{
        let cartData:cart={
          ...productItem,
          productId:productItem.id,
          userId
        }
        delete cartData.id
        setTimeout(()=>{
          this.productService.addToCart(cartData).subscribe((res)=>{
            if(res){

            }
          })
        },500)
        if(cartDataList.length === index+1){
          localStorage.removeItem('localCart')
        }

      })
    }
  }
}
