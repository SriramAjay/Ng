import { Component, OnInit } from '@angular/core';
import  { ActivatedRoute,Router,ParamMap } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
    <h3> you selected deparment with id = {{deptId}} </h3>
    <p>
    <button (click)="goOverview()">Overview</button>
    <button (click)="goContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>
     <p>
    <button (click)="goPrevious()" >Previous</button>    
    <button (click)="goNext()">Next</button>
    </p>
    <div>
    <button (click)="goDepartments()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public deptId;
  public deptName;
  constructor(private _activateRoute:ActivatedRoute,private _route:Router) { }

  ngOnInit() {
    // let id=parseInt(this._activateRoute.snapshot.paramMap.get('id'));
     //this.deptId=id;
   // this.deptName=this._activateRoute.snapshot.paramMap.get('id');
   this._activateRoute.paramMap.subscribe((params: ParamMap)=>
   {
     let id=parseInt(params.get('id'));
     this.deptId=id;
   }
   );
  }
  goPrevious(){
    let previousId=this.deptId-1;
    this._route.navigate(['/departments',previousId]);
  }
  goNext(){
    let nextId=this.deptId+1;
    this._route.navigate(['/departments',nextId]);
  }
  goDepartments(){
 let selectedId=this.deptId?this.deptId:null;
 //this._route.navigate(['/departments',{id:selectedId}]);
 this._route.navigate(['../',{id:selectedId}],{relativeTo:this._activateRoute});

  }
  goOverview(){
    this._route.navigate(['overview'],{relativeTo:this._activateRoute});
  }
  goContact(){
    this._route.navigate(['contact'],{relativeTo:this._activateRoute});
  }
}
