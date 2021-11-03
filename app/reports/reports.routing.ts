import { Routes } from '@angular/router';

import { ReportsComponent } from './reports.component';
import { Report001Component} from './report001/report001.component';
import { Report002Component} from './report002/report002.component';
import { Report003Component} from './report003/report003.component';
import { Report004Component} from './report004/report004.component';
import { Report005Component} from './report005/report005.component';

export const ReportsRoutes: Routes = [ 
    {
        path: '',
        children: [
            { path: '', component: ReportsComponent  },
            { path: 'report1', component: Report001Component },
            { path: 'report2', component: Report002Component },
            { path: 'report3', component: Report003Component },
            { path: 'report4', component: Report004Component },
            { path: 'report5', component: Report005Component },
        ] 
    }
]