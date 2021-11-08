import { Routes } from '@angular/router';

import { SettingComponent } from './setting.component';
import { StudentComponent } from './student/student.component';
import { ParentComponent } from './parent/parent.component';
import { EmployeeComponent } from './employee/employee.component';
import { GradeComponent } from './grade/grade.component';
import { RoomComponent } from './room/room.component';
import { BehaviorComponent } from './behavior/behavior.component';
import { CheckinprofileComponent } from './checkinprofile/checkinprofile.component';
import { UserComponent } from './user/user.component';
import { TeacherComponent } from './teacher/teacher.component';
import { DeptComponent } from './dept/dept.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectgroupComponent } from './subjectgroup/subjectgroup.component';
import { SubjectStudentComponent } from './subject-student/subject-student.component';

export const SettingRoutes: Routes = [ 
    {
        path: '',
        children: [
            { path: '', component: SettingComponent },
            { path: 'studentinfo', component: StudentComponent },
            { path: 'parent', component: ParentComponent },
            { path: 'employee', component: EmployeeComponent },
            { path: 'grade', component: GradeComponent },
            { path: 'room', component: RoomComponent },
            { path: 'behavior', component: BehaviorComponent },
            { path: 'checkinprofile', component: CheckinprofileComponent },
            { path: 'user', component: UserComponent },
            { path: 'teacher', component: TeacherComponent },
            { path: 'dept', component: DeptComponent },
            { path: 'subject', component: SubjectComponent },
            { path: 'subjectgroup', component: SubjectgroupComponent },
            { path: 'subjectstudent', component: SubjectStudentComponent },
        ] 
    }
]