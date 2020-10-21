import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private httpservice:HttpClient) { }

  welcome:string 
  ngOnInit() {

    this.httpservice.get('http://localhost/Test1/api/Login/Wish').subscribe(res=>this.welcome=res as string)

    
  }

}
