import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    // console.log('before' + this.isUserLoogedIn())
    if (username === 'admin' && password === 'admin') {
      sessionStorage.setItem('authenticaterUser', username)
      // console.log('after' + this.isUserLoogedIn())
      return true
    }
    return false;
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser')
  }

  isUserLoogedIn() {
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null)
  }



}
