import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RcdComponent } from './rcd.component';
import { RcdHeaderComponent } from './rcd-header/rcd-header.component';
import { RcdItemsComponent } from './rcd-items/rcd-items.component';

const routes: Routes = [
  {path:'',component:RcdComponent,children:[
{path:'headers',component:RcdHeaderComponent},
{path:'details',component:RcdItemsComponent},
{path:'', redirectTo:'headers', pathMatch:'full'}
  ]}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RcdRoutingModule { }
