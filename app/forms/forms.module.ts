import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EqualValidator } from './equal-validator.directive';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';

import { FormsRoutes } from './forms.routing';

import { ExtendedFormsComponent } from './extendedforms/extendedforms.component';
import { RegularFormsComponent } from './regularforms/regularforms.component';
import { ValidationFormsComponent } from './validationforms/validationforms.component';
import { WizardComponent } from './wizard/wizard.component';
//import { CheckinprofildFrmComponent } from './checkinprofild-frm/checkinprofild-frm.component';
//import { BehaviorFrmComponent } from './behavior-frm/behavior-frm.component';
//import { GradeFrmComponent } from './grade-frm/grade-frm.component';
//import { RoomFrmComponent } from './room-frm/room-frm.component';
//import { CheckinoutFrmComponent } from './checkinout-frm/checkinout-frm.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(FormsRoutes),
        FormsModule,
        TagInputModule,
        JwBootstrapSwitchNg2Module,
        NgbModule,
    ],
    declarations: [
          ExtendedFormsComponent,
          RegularFormsComponent,
          ValidationFormsComponent,
          WizardComponent,
          EqualValidator,
//          CheckinprofildFrmComponent,
//          BehaviorFrmComponent,
//          GradeFrmComponent,
//          RoomFrmComponent,
//          CheckinoutFrmComponent,
    ]
})

export class Forms {}
