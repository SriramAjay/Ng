import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { BodyComponent } from './body/body.component';
import { CyclecountComponent } from '../cyclecount/cyclecount.component';
import { CaseissueComponent } from '../caseissue/caseissue.component';
import { ReturnsComponent } from '../returns/returns.component';
import { RcdComponent } from '../rcd/rcd.component';

const routes: Routes = [

  {
    path:'', component:DashboardComponent,
    children:[
     {path:'',component:BodyComponent},
     {path:'cyclecount',loadChildren:'../cyclecount/cyclecount.module#CyclecountModule'},
     {path:'caseissue',component:CaseissueComponent},
     {path:'returns',component:ReturnsComponent},
     {path:'rcd',component:RcdComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }