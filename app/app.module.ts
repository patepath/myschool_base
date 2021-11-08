import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }   from './app.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { StudentLayoutComponent } from './layouts/student-layout/student-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AppRoutes } from './app.routing';
import { CheckinoutComponent } from './checkinout/checkinout.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingComponent } from './setting/setting.component';
import { ParentComponent } from './setting/parent/parent.component';
import { EmployeeComponent } from './setting/employee/employee.component';

import { StudentComponent } from './setting/student/student.component';

import { GradeComponent } from './setting/grade/grade.component';
import { GradeFrmComponent } from './forms/grade-frm/grade-frm.component';

import { RoomComponent } from './setting/room/room.component';
import { RoomFrmComponent } from './forms/room-frm/room-frm.component';

import { BehaviorFrmComponent } from './forms/behavior-frm/behavior-frm.component';
import { BehaviorComponent } from './setting/behavior/behavior.component';

import { CheckinprofildFrmComponent} from './forms/checkinprofild-frm/checkinprofild-frm.component';
import { CheckinprofileComponent } from './setting/checkinprofile/checkinprofile.component';

import { StudentRegisterFormComponent } from './student-register-form/student-register-form.component';
import { TeacherLayoutComponent } from './layouts/teacher-layout/teacher-layout.component';


@NgModule({
    imports:      [
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(AppRoutes,{
            useHash: false
        }),
        NgbModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        FixedPluginModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        StudentLayoutComponent,
        AuthLayoutComponent,
        CheckinoutComponent,
        ReportsComponent,
        SettingComponent,
        ParentComponent,
        EmployeeComponent,
        BehaviorComponent,
        BehaviorFrmComponent,
        StudentComponent,
        GradeComponent,
        GradeFrmComponent,
        RoomComponent,
        RoomFrmComponent,
        CheckinprofileComponent,
        CheckinprofildFrmComponent,
        StudentRegisterFormComponent,
        TeacherLayoutComponent,
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
