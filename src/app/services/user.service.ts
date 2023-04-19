import { Injectable } from '@angular/core';
import { signUp } from '../models/data-type';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private router:Router) { }

  userSignUp(user:signUp){
    this.http.post("http://localhost:4000/user",user,{observe:'response'})
    .subscribe((res)=>{
      if(res){
        localStorage.setItem('user',JSON.stringify(res.body))
        this.router.navigate(['/'])
      }
    })
  }

  userAuthReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/'])
    }
  }
}
