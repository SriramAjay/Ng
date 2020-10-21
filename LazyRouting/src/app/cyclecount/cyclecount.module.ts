import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CyclecountComponent } from './cyclecount.component';
import { CyclecountHeaderComponent } from './cyclecount-header/cyclecount-header.component';
import { CyclecountItemsComponent } from './cyclecount-items/cyclecount-items.component';
import { CyclecountRoutingModule } from './cyclecount-routing.module';

@NgModule({
    imports: [
        CommonModule,
    CyclecountRoutingModule
    ],
    declarations: [
        CyclecountComponent,
        CyclecountHeaderComponent,
        CyclecountItemsComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CyclecountModule { }