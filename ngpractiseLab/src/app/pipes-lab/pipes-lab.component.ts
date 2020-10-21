import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-lab',
  templateUrl: './pipes-lab.component.html',
  styleUrls: ['./pipes-lab.component.css']
})
export class PipesLabComponent implements OnInit {

  constructor() { }
public strname:string="Sriram Ajay kumar";
  public person ={"firstname":"Ajay","Surname":"Sriram"};
  public date:Date=new Date();
  ngOnInit() {
  }

}
