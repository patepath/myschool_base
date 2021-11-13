import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinreportComponent } from '../checkinout/checkinreport/checkinreport.component';

const routes: Routes = [
  {
    path: '',
    children: [
        { path: 'checkin_report', component: CheckinreportComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
