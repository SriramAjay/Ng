import { Component } from '@angular/core';
import { User } from './user';
import { EnrollService } from './enroll.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  topicHasError=true;
constructor(private enroll: EnrollService){}
  topics=['Ng','React','VUe'];
  userModel=new User('ajay','ajay@gmail.com',4545454422,'default','morning',true);
  errorMsg='';
 submitted=false;

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
  onSubmit(){
    this.submitted=true;
    this.enroll.enroll(this.userModel).subscribe(       
      response => console.log('Success!', response),
      error => this.errorMsg = error.statusText

     )

  }
}
