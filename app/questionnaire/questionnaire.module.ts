import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';

import { routes } from './questionnaire-routing.module';
import { Sdq1Component } from './sdq1/sdq1.component';
import { Sdq2Component } from './sdq2/sdq2.component';
import { Sdq3Component } from './sdq3/sdq3.component';
import { Sumsdq1Component } from './sumsdq1/sumsdq1.component';
import { SumsdqStudentComponent } from './sumsdq-student/sumsdq-student.component';

@NgModule({
  declarations: [
    Sdq1Component,
    Sdq2Component,
    Sdq3Component,
    Sumsdq1Component,
    SumsdqStudentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, 
    JwBootstrapSwitchNg2Module, 
    NgbModule, 
    TagInputModule, 
  ]
})
export class QuestionnaireModule { }
