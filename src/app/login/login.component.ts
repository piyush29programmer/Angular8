import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service ';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false;

  // Dependecy Injection  
  constructor(private router: Router,
    private BasicAuthenticationService: BasicAuthenticationService) {

  }

  ngOnInit() {
  }

  handleJWTBasicAuthLogin() {
    this.BasicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          //Redirect to welcome page 
          console.log(data);
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false;
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      )
  }

  handleBasicAuthLogin() {
    this.BasicAuthenticationService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          //Redirect to welcome page 
          console.log(data);
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false;
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      )
  }

}
