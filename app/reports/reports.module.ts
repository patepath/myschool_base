import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';

import { ReportsRoutes } from './reports.routing';
import { Report001Component} from './report001/report001.component';
import { Report002Component} from './report002/report002.component';
import { Report003Component} from './report003/report003.component';
import { Report004Component} from './report004/report004.component';
import { Report005Component} from './report005/report005.component';
import { Report001FrmComponent } from './report001-frm/report001-frm.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild( ReportsRoutes ),
        FormsModule,
        TagInputModule,
        JwBootstrapSwitchNg2Module,
        NgbModule,
        FormsModule
    ],
    declarations: [
        Report001Component,
        Report002Component,
        Report003Component,
        Report004Component,
        Report005Component,
        Report001FrmComponent,
    ]
})

export class ReportsModule {}
