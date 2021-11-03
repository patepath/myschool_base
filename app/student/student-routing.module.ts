import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinoutComponent } from './checkinout/checkinout.component';
import { QuestionaireComponent } from './questionaire/questionaire.component';
import { RegisterViewComponent } from './register-view/register-view.component';

export const routes: Routes = [{
  path: '',
  children: [
    { path: 'checkinout', component: CheckinoutComponent },
    { path: 'questionaire', component: QuestionaireComponent},
    { path: 'register-view', component: RegisterViewComponent},
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
