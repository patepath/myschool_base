import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule,routes } from './admin-routing.module';
import { MgrCheckinsubjectComponent } from './mgr-checkinsubject/mgr-checkinsubject.component';

@NgModule({
  declarations: [MgrCheckinsubjectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
