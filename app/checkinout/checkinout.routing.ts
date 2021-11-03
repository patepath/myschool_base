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
            { path: 'student', component: StudentComponent },
            { path: 'employee', component: EmployeeComponent },
            { path: 'checkinsubject', component: SubjectComponent },
            { path: 'checkinreport', component: CheckinreportComponent },
        ] 
    }
];
