import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Checkinout } from '../../school';
import { CheckinoutService } from '../../services/checkinout.service';

@Component({
  selector: 'app-checkinout-frm',
  templateUrl: './checkinout-frm.component.html',
  styleUrls: ['./checkinout-frm.component.css']
})
export class CheckinoutFrmComponent implements OnInit {

  @Input() checkinout: Checkinout;
	@Output() edited = new EventEmitter<boolean>();

	public imgb64: string;
	public imagepath!: SafeResourceUrl;

  constructor(
    private checkinoutServ: CheckinoutService,
		private _sanitizer: DomSanitizer
  ) { 

    this.imgb64 = "";

    this.checkinout = {
      Ref: 0,
      DateTime: "",
      StudentCode: "",
      StudentFullName: "",
      CamNo: "",
      Temperature: 0,
      CutPoint: 0,
      Status: 0,
    };
  }

  ngOnInit(): void {

		this.checkinoutServ.getFaceImg(this.checkinout).subscribe(
			(imgb64) => {
				this.imgb64 = imgb64;
				this.imagepath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + this.imgb64);
			}
		);

  }

  cancel() {
    this.edited.emit(false);
  }

}
