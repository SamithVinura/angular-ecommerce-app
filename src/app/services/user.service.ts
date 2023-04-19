import { Injectable } from '@angular/core';
import { signUp } from '../models/data-type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  userSignUp(user:signUp){
    this.http.post("http://localhost:4000/user",user)
  }
}
