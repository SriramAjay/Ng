import { Component, ViewChild } from '@angular/core';
import { MessageComponent } from './message/message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  @ViewChild(MessageComponent,{static:false}) messageViewChild: MessageComponent;
  title = 'ViewChildAndContentChild';
  PassingInfo:any="Welcome";
  Show:boolean = true ;
  
//   ngAfterViewInit() {
//     console.log(this.messageViewChild);
//     //this.PassingInfo = 'Welcome';
//     this.PassingInfo.forEach((item) => { item.message = 'Infragistics'; });
// }
//ngAfterContentInit(){
 // this.PassingInfo=this.getMessage();

//}
ngOnInit() {
  //this.PassingInfo = this.getMessage();
}
getMessage() {
  return [
      'Hello India',
      'Which team is winning Super Bowl? ',
      'Have you checked Ignite UI ?',
      'Take your broken heart and make it to the art'
  ];
}
  

}
