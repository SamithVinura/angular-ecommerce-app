import { EventEmitter, Injectable } from '@angular/core';
import { login, signUp } from '../models/data-type';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  invalidUserAuth = new EventEmitter<boolean>(false)

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

  userLogin(data:login){
    console.log(data)
    this.http.get<signUp[]>(`http://localhost:4000/user?email=${data.email}&password=${data.password}`,
    {observe:'response'}
    ).subscribe((result)=>{
      if(result && result.body?.length){
        localStorage.setItem('user',JSON.stringify(result.body[0]));
        this.router.navigate(['/']);
        this.invalidUserAuth.emit(false)
      }else{
        this.invalidUserAuth.emit(true)
      }
    })
  }
}
