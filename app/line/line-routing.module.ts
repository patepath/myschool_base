import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinComponent } from './checkin/checkin.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'checkin', component: CheckinComponent },
        ] 
    }];
    
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineRoutingModule { }
