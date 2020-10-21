import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home.routing.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    HomeComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
})
export class HomeModule { }
