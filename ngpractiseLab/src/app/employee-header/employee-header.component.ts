import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-header',
  templateUrl: './employee-header.component.html',
  styleUrls: ['./employee-header.component.css']
})
export class EmployeeHeaderComponent implements OnInit {

  public employee=[];
  public onselect="";
  constructor(private _empSer:EmployeeService) { }

  ngOnInit() {
    this.employee= this._empSer.getEmployeeData();
  }
  data(event){
    this.onselect=event.value;
  }
}
