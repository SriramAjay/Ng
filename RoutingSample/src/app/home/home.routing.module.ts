import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { BodyComponent } from './body/body.component';
import { RcdComponent } from '../rcd/rcd.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', component:BodyComponent },
     {path:'RCD', loadChildren:'../rcd/rcd.module#RcdModule'}

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
