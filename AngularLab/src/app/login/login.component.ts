import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  pwd: string;
  welcome: string;
  constructor(private httpservice: HttpClient, private router: Router, private activatedRoute:ActivatedRoute) { }
  ngOnInit() {
  }

  public async onLoginClick(event) {

    await this.httpservice.post('http://localhost/Test1/api/Login/PostInfo?username='+this.username,{}).toPromise().then(
      (res) => {
        this.welcome = res as string;
      });

    // await this.httpservice.get('http://localhost/Test1/api/Login/Wish').toPromise().then(
    //   (res) => {
    //     this.welcome = res as string;
    //   });

    ;
    // this.navigateex.queryParams = { 'username': this.username, 'welcome': 'Hi ' };
    this.router.navigate(['../home'], { relativeTo:this.activatedRoute, queryParams: { username: this.username, welcome: this.welcome } });

    //this.router.navigate(['./home'] );
  }

}
