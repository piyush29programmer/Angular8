import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeAuthenticationService(username, password) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`
      , { headers }).pipe(
        map(
          data => {
            sessionStorage.setItem('authenticaterUser', username);
            sessionStorage.setItem('token', basicAuthHeaderString);
            return data;
          }
        )
      );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticaterUser');
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem('token');
    }

  }

  logout() {
    sessionStorage.removeItem('authenticaterUser')
    sessionStorage.removeItem('token')
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null)
  }


}

export class AuthenticationBean {
  constructor(public message: string) { }
}
