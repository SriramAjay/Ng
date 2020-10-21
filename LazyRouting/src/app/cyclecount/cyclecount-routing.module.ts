import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CyclecountComponent } from './cyclecount.component';
import { CyclecountHeaderComponent } from './cyclecount-header/cyclecount-header.component';
import { CyclecountItemsComponent } from './cyclecount-items/cyclecount-items.component';

export const cyclecountRoutes: Routes = [
    {
        path: '',
        component: CyclecountComponent,
        children: [
            { path: 'headers', component: CyclecountHeaderComponent},
            { path: 'items', component: CyclecountItemsComponent},
            { path: '', redirectTo: 'headers', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(cyclecountRoutes)],
    exports: [RouterModule]
})
export class CyclecountRoutingModule { }