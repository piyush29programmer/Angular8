import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService, HelloWorldBean } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = ''
  message = 'Some Welcome Message'
  welcomeMessageFromService = ""
  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit() {
    //console.log(this.message)
    this.name = this.route.snapshot.params['name']
  }

  GetWelcomeMessageWithParameter() {
    //subscribe is async call which will not return the result
    this.service.executeHelloWorlServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)

    );


  }
  handleErrorResponse(error: any): void {
    this.welcomeMessageFromService = error.error.message
  }

  handleSuccessfulResponse(response: HelloWorldBean) {
    this.welcomeMessageFromService = response.message;
  }

}
