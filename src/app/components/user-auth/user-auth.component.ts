import { Component, OnInit } from '@angular/core';
import { signUp } from 'src/app/models/data-type';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css'],
})
export class UserAuthComponent implements OnInit {
  showLogin: boolean = true;
  authError: string = '';
  constructor(private userService: UserService) {}

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

/*   login(data: login) {
    this.userService.userLogin(data)
    this.userService.invalidUserAuth.subscribe((result)=>{
      console.warn(result);
      if(result){
         this.authError="User not found"
      }else{
        this.localCartToRemoteCart();
      }

    })
  } */
}
