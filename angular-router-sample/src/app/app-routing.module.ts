import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';


const routes: Routes = [ 
  {path: 'compose',    component: ComposeMessageComponent,    outlet: 'popup'  },
  {path:'',redirectTo:'/heros',pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing : true
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
