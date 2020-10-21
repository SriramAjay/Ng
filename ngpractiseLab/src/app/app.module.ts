import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoBinidingComponent } from './two-biniding/two-biniding.component';
import { StructuralDirectiviesLabComponent } from './structural-directivies-lab/structural-directivies-lab.component';
import { PipesLabComponent } from './pipes-lab/pipes-lab.component';
import { ExponentialPipe } from './pipes-lab/exponential.pipe';
import { EmployeeHeaderComponent } from './employee-header/employee-header.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    TwoBinidingComponent,
    StructuralDirectiviesLabComponent,
    PipesLabComponent,
    ExponentialPipe,
    EmployeeHeaderComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
