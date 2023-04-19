import { Component, OnInit } from '@angular/core';
import { signUp } from 'src/app/models/data-type';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  showLogin:boolean=true
  constructor(){}

  ngOnInit():void{}

  signUp(data:signUp){

  }

  openLogin(){
    this.showLogin=true;
      }

}
