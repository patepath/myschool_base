import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { StudentLayoutComponent } from './layouts/student-layout/student-layout.component';

export const AppRoutes: Routes = [{
        path: '',
        redirectTo: '/pages/login',
        pathMatch: 'full',
      },{
        path: '',
        component: AdminLayoutComponent,
        canActivate:[AuthGuard],
        children: [{
            path: 'dashboard',
            loadChildren: './dashboard/dashboard.module#DashboardModule'
        }, {
            path: 'admin',
            loadChildren: './admin/admin.module#AdminModule'
        }, {
            path: 'checkinout',
            loadChildren: './checkinout/checkinout.module#CheckinoutModule'
        }, {
            path: 'components',
            loadChildren: './components/components.module#ComponentsModule'
        }, {
            path: 'reports',
            loadChildren: './reports/reports.module#ReportsModule'
        }, {
            path: 'sdq',
            loadChildren: './questionnaire/questionnaire.module#QuestionnaireModule'
        }, {
            path: 'setting',
            loadChildren: './setting/setting.module#SettingModule'
        }, {
            path: 'teacher',
            loadChildren: './teacher/teacher.module#TeacherModule'
        }, {
            path: 'forms',
            loadChildren: './forms/forms.module#Forms'
        },{
            path: 'tables',
            loadChildren: './tables/tables.module#TablesModule'
        },{
            path: 'maps',
            loadChildren: './maps/maps.module#MapsModule'
        },{
            path: 'charts',
            loadChildren: './charts/charts.module#ChartsModule'
        },{
            path: 'calendar',
            loadChildren: './calendar/calendar.module#CalendarModule'
        },{
            path: '',
            loadChildren: './userpage/user.module#UserModule'
        },{
            path: '',
            loadChildren: './timeline/timeline.module#TimelineModule'
        },{
            path: '',
            loadChildren: './widgets/widgets.module#WidgetsModule'
        }]
    },{
        path: '',
        component: StudentLayoutComponent,
        canActivate:[AuthGuard],
        children: [{path: 'student', loadChildren: './student/student.module#StudentModule'}]
    }, {
        path: '',
        component: AuthLayoutComponent,
        children: [{
            path: 'pages',
            loadChildren: './pages/pages.module#PagesModule'
        }]
    }
];
