import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-depertment-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
    <li (click)="onSelect(dept)" [class.selected]="iSelected(dept)" *ngFor="let dept of departments">
    <span class="badge"> {{dept.id}}</span>{{dept.name}}
    </li>
    </ul>
  `,
  styles: []
})
export class DepertmentListComponent implements OnInit {

  public selectedId;
  departments = [
    { "id": 1, "name": "Angular" },
    { "id": 2, "name": "Node" },
    { "id": 3, "name": "MongoDB" },
    { "id": 4, "name": "Ruby" },
    { "id": 5, "name": "Bootstrap" }
  ]
  constructor(private _route: Router, private _activateRoute: ActivatedRoute, ) { }

  ngOnInit() {
    this._activateRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    }
    );
  }
  onSelect(departments) {
    //this._route.navigate(['/departments', departments.id]);
    //to the current route append id. this is relative path
    this._route.navigate([departments.id],{relativeTo:this._activateRoute});
  }
  iSelected(departments) {
    return departments.id == this.selectedId;
  }
}
