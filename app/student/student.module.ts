import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';

import { routes } from './student-routing.module';
import { CheckinoutComponent } from './checkinout/checkinout.component';
import { QuestionaireComponent } from './questionaire/questionaire.component';
import { RegisterViewComponent } from './register-view/register-view.component';

@NgModule({
  declarations: [
    CheckinoutComponent, 
    QuestionaireComponent, RegisterViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild( routes ),
    FormsModule,
    ReactiveFormsModule,
    TagInputModule,
    JwBootstrapSwitchNg2Module,
    NgbModule,
    FormsModule
  ]
})

export class StudentModule { }
