import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http'
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean {
  constructor(public message: string) {

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorlServiceWithPathVariable(name) {
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`);
  }

  // admin:1 Access to XMLHttpRequest at '${API_URL}/hello-world/path-variable/admin' 
  // from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' 
  // header is present on the requested resource.

  /*  Access to XMLHttpRequest at '${API_URL}/hello-world/path-variable/admin' from 
   origin 'http://localhost:4200' has been blocked by CORS policy: Response to preflight request 
   doesn't pass access control check: It does not have HTTP ok status. */
}
