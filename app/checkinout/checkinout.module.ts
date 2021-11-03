import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';

import { CheckinoutRoutes } from './checkinout.routing';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';

import { CheckinoutFrmComponent } from '../forms/checkinout-frm/checkinout-frm.component';
import { SubjectComponent } from './subject/subject.component';
import { CheckinreportComponent } from './checkinreport/checkinreport.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild( CheckinoutRoutes ),
        FormsModule,
        TagInputModule,
        JwBootstrapSwitchNg2Module,
        NgbModule,
        FormsModule,
    ],
    declarations: [
        StudentComponent,
        EmployeeComponent,
        CheckinoutFrmComponent,
        SubjectComponent,
        CheckinreportComponent,
    ]
})
 
export class CheckinoutModule {}
