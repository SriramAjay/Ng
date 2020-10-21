import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { DashboardComponent } from './dashboard.component';
import { CaseissueComponent } from '../caseissue/caseissue.component';
import { ReturnsComponent } from '../returns/returns.component';
import { RcdComponent } from '../rcd/rcd.component';

@NgModule({
  declarations: [    
    BodyComponent,
    DashboardComponent ,
    CaseissueComponent,
    ReturnsComponent  ,
    RcdComponent
  ],
  imports: [
    CommonModule   ,
    DashboardRoutingModule 
  ],
})
export class DashboardModule { }
