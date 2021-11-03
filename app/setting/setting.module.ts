import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';

import { SettingRoutes } from './settings.routing';

import { UserComponent } from './user/user.component';
import { TeacherComponent } from './teacher/teacher.component';
import { DeptComponent } from './dept/dept.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectgroupComponent } from './subjectgroup/subjectgroup.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild( SettingRoutes ),
        FormsModule,
        ReactiveFormsModule,
        TagInputModule,
        JwBootstrapSwitchNg2Module,
        NgbModule,
        FormsModule
    ],
    declarations: [
        UserComponent,
        TeacherComponent,
        DeptComponent,
        SubjectComponent,
        SubjectgroupComponent,
    ]
})

export class SettingModule {}
