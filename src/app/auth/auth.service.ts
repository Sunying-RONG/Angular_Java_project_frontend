import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  constructor() { }
  isAuthenticated(){
    const username = localStorage.getItem("adminLogin");
    if (username) {
      return this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }
}
