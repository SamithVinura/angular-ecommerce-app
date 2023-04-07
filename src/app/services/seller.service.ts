import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { login, signUp } from '../models/data-type';
import {BehaviorSubject} from 'rxjs'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  isLoginError = new EventEmitter<boolean>(false)

  constructor(private http:HttpClient,private router:Router) { }

  userSignUp(data:signUp){
    return this.http.post('http://localhost:4000/seller',data,{observe:'response'}).subscribe((res)=>{
      console.log(res)
      if(res){
        this.isSellerLoggedIn.next(true)
        localStorage.setItem('seller',JSON.stringify(res.body))
        this.router.navigate(['seller-home'])
      }
    })
  }

  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['seller-home'])
    }
  }

  userLogin(data:login):void{
    this.http.get(`http://localhost:4000/seller?email=${data.email}&password=${data.password}`,{
      observe:'response'
    }).subscribe((res:any)=>{
      if(res && res.body && res.body.length===1){
        localStorage.setItem('seller',JSON.stringify(res.body))
        this.isLoginError.emit(false)
        this.router.navigate(['seller-home'])
      }else{
        this.isLoginError.emit(true)
      }
    })
  }
}
