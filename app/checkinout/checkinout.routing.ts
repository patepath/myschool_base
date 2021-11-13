import { Routes } from '@angular/router';

import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { SubjectComponent } from './subject/subject.component';
import { CheckinreportComponent } from './checkinreport/checkinreport.component';

export const CheckinoutRoutes: Routes = [ 
    {
        path: '',
        children: [
            { path: '', component: StudentComponent },
            { path: 'cam_student', component: StudentComponent },
            { path: 'employee', component: EmployeeComponent },
            { path: 'checkin_subject', component: SubjectComponent },
            { path: 'checkinreport', component: CheckinreportComponent },
        ] 
    }
];
