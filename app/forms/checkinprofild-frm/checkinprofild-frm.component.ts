import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CheckinProfile } from '../../school';
import { CheckinprofileService } from '../../services/checkinprofile.service';

@Component({
  selector: 'app-checkinprofild-frm',
  templateUrl: './checkinprofild-frm.component.html',
  styleUrls: ['./checkinprofild-frm.component.css']
})
export class CheckinprofildFrmComponent implements OnInit {

	@Input() checkinprofile: CheckinProfile;
	@Output() checkinprofiles = new EventEmitter<CheckinProfile[]>();

  constructor(public checkinprofileServ: CheckinprofileService) { 

    this.checkinprofile = {
      DateIn: "",
      Group: 0,
      Name: "",
      Point1: 5,
      Point2: 5,
      Point3: 5,
      Time1: "",
      Time2: "",
      Time3: "",
      YearEdu: 2021,
    }

  }

  ngOnInit(): void {

  }

  save() {

    this.checkinprofileServ.save(this.checkinprofile).subscribe(
      (checkinprofiles) => {
        this.checkinprofiles.emit(checkinprofiles)        
      }
    );

  }

  cancel() {
    this.checkinprofiles.emit([]);
  }


}
