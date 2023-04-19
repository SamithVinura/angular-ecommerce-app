import { Component, OnInit } from '@angular/core';
import { signUp } from 'src/app/models/data-type';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  showLogin:boolean=true
  constructor(private userService:UserService){}

  ngOnInit():void{}

  signUp(data:signUp){
    this.userService.userSignUp(data)
  }

  openLogin(){
    this.showLogin=true;
      }

}
