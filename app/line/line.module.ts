import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { routes } from './line-routing.module';
import { CheckinComponent } from './checkin/checkin.component';

@NgModule({
  declarations: [CheckinComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ]
})
export class LineModule { }
