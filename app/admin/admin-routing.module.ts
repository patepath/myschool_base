import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MgrCheckinsubjectComponent } from './mgr-checkinsubject/mgr-checkinsubject.component';

export const routes: Routes = [
  {
    path: '',
    children: [
        { path: 'mgr-checkinsubject', component: MgrCheckinsubjectComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
