import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckinoutComponent } from './checkinout/checkinout.component';

export const routes: Routes = [
  {
    path: '',
    children: [
        { path: 'checkinout', component: CheckinoutComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
