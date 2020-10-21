import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lusername: string;
  wwish: string;


  constructor(private router: Router, private activatedrouter: ActivatedRoute) { }

  public backlogin() {
    this.router.navigate(['./login']);

  }
  ngOnInit() {
    this.activatedrouter.queryParams.subscribe(res => { this.lusername = res.username, this.wwish = res.welcome });
  }

}
