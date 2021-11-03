import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';

import { TeacherRoutingModule, routes } from './teacher-routing.module';
import { CheckinoutComponent } from './checkinout/checkinout.component';


@NgModule({
  declarations: [CheckinoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild( routes ),
    FormsModule,
    ReactiveFormsModule,
    TagInputModule,
    JwBootstrapSwitchNg2Module,
    NgbModule,
    FormsModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
