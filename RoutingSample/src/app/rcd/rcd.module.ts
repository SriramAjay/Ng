import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RcdComponent } from '../rcd/rcd.component';
import { RcdRoutingModule } from './rcd.routing.module';
import { RcdHeaderComponent } from './rcd-header/rcd-header.component';
import { RcdItemsComponent } from './rcd-items/rcd-items.component';

@NgModule({
  declarations: [  
      RcdComponent,  
    RcdHeaderComponent,
    RcdItemsComponent
  ],
  imports: [
    CommonModule,
    RcdRoutingModule
  ],
})
export class RcdModule { }
