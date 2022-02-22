import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl='https://route-egypt-api.herokuapp.com/'

  constructor(private _HttpClient:HttpClient,private _Router:Router) {
    if(localStorage.getItem('userToken') != null){
      this.saveCurrentUser();
    }
  }

  currentUser= new BehaviorSubject(null);

  saveCurrentUser(){
    let token:any =localStorage.getItem('userToken');
    this.currentUser.next(jwtDecode(token));
  }
  register(formData:any):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl+'signup', formData);
  }
  login(formData:any):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl+'signin', formData);
  }

  logout() {
    if (this.currentUser.getValue() != null) {
      this.currentUser.next(null);
      localStorage.removeItem('userToken');
      this._Router.navigate(['/login'])
    }
  }
}
