import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service ';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthenticationService: BasicAuthenticationService
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {

    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();

    //both are valid then only add header to request
    if (basicAuthHeaderString && username) {
      //These object can't be modified so we will clone it and modify it
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      })
    }



    //send this modifies request to next handler
    return next.handle(request);
  }
}
