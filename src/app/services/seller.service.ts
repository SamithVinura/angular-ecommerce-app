import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { signUp } from '../data-type';
import {BehaviorSubject} from 'rxjs'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false)

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
}
