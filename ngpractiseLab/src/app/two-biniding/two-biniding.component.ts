import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-two-biniding',
 // templateUrl: './two-biniding.component.html',
 template:`
 <input [(ngModel)]="name" type="text">
 {{name}}
 <structural-directivies></structural-directivies>
 {{asurwish}}
 <button (click)="sendDataToChild()">Send Data to Child</button>

 `,
  styleUrls: ['./two-biniding.component.css']
})
export class TwoBinidingComponent implements OnInit {

  constructor() { }
  public name="";
  //It indicates we are getting data from parent component. variable name must be same from send to revieve. 
  //In () between them called as alias 
  @Input('aliasname') public asurwish;
  @Output() public ent=new EventEmitter();
  ngOnInit() {
  }
// need to create on event 
sendDataToChild(){
   this.ent.emit("This is from child");
   //<button (click)="sendDataToChild()">Send Data to Child</button>
}
}
