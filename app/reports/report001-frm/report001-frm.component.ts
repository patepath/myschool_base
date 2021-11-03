import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ReportBehavior001, ReportStudentBehaviorPoint } from '../../school';
import { ReportsService } from '../../services/reports.service';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-report001-frm',
  templateUrl: './report001-frm.component.html',
  styleUrls: ['./report001-frm.component.css']
})
export class Report001FrmComponent implements OnInit {

	@Input() report!: ReportBehavior001;
	@Output() edited = new EventEmitter<boolean>();

	public displayCols: string[] = [];
  public studentbehaviors: ReportStudentBehaviorPoint[] = [];
  public studentbehavior!: ReportStudentBehaviorPoint;

  public imagepath!: SafeResourceUrl;
  public faceImg!: string;

  constructor(
    public reportServ: ReportsService,
    public studentServ: StudentService,
    public _sanitizer: DomSanitizer

  ) { }

  ngOnInit(): void {

    this.reportServ.getReportStudentBehavior(this.report.Code).subscribe(
      studentbehaviors => this.studentbehaviors = studentbehaviors
    );

		this.studentServ.getFaceImgByCode(this.report.Code).subscribe(
			(imgb64) => {
				this.faceImg = imgb64;
				this.imagepath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + this.faceImg);
			}
		);

  }

  exportExcel() {

  }

  close() {
    this.edited.emit(false);
  }

	_handleReaderLoaded(readerEvt: any) { 
		var binaryString = readerEvt.target.result; 
		this.faceImg = btoa(binaryString);  // Converting binary string data. 
		this.imagepath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + this.faceImg);
	} 

}
