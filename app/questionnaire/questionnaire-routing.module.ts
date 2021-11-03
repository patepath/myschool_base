import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sdq1Component } from './sdq1/sdq1.component';
import { Sdq2Component } from './sdq2/sdq2.component';
import { Sdq3Component } from './sdq3/sdq3.component';

import { Sumsdq1Component } from './sumsdq1/sumsdq1.component';
import { SumsdqStudentComponent } from './sumsdq-student/sumsdq-student.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'sdq1', component: Sdq1Component },
            { path: 'sdq2', component: Sdq2Component},
            { path: 'sdq3', component: Sdq3Component},
            { path: 'sumsdq1', component: Sumsdq1Component},
            { path: 'sumsdqstudent', component: SumsdqStudentComponent},
        ] 
    }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnaireRoutingModule { }
