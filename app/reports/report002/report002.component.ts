import { Component, OnInit } from '@angular/core';

import { Grade, Room, Opt, ReportCheckin001} from '../../school';
import { ReportsService } from '../../services/reports.service';
import { GradeService } from '../../services/grade.service';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-report002',
  templateUrl: './report002.component.html',
  styleUrls: ['./report002.component.css']
})
export class Report002Component implements OnInit {

  public code: string;
  public title: string;
  public fullname: string;
  public reportdate: Date; 

  public grades: Grade[] = [];
  public grade: Grade;

  public rooms: Room[] = [];
  public room: Room;

  public reports: ReportCheckin001[] = [];
  public report!: ReportCheckin001;

  public dds: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,18,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  public dd: number;

  public mms: Opt[] = [
    { Value: 1, Name: 'มกราคม'},
    { Value: 2, Name: 'กุมภาพันธ์'},
    { Value: 3, Name: 'มีนาคม'},
    { Value: 4, Name: 'เมษายน'},
    { Value: 5, Name: 'พฤษภาคม'},
    { Value: 6, Name: 'มิถุนายน'},
    { Value: 7, Name: 'กรกฏาคม'},
    { Value: 8, Name: 'สิงหาคม'},
    { Value: 9, Name: 'กันยายน'},
    { Value: 10, Name: 'ตุลาคม'},
    { Value: 11, Name: 'พฤศจิกายน'},
    { Value: 12, Name: 'ธันวาคม'},
  ];

  public mm: number;

  public yyyys: number[] = [2564, 2563, 2562]
  public yyyy: number;

  constructor(
    public reportServ: ReportsService,
    public gradeServ: GradeService,
    public roomServ:  RoomService

  ) { 

    this.code='';
    this.title='';
    this.fullname='';
    this.reportdate = new Date()

    this.dd = this.reportdate.getDate();
    this.mm = this.reportdate.getMonth() + 1;
    this.yyyy = this.reportdate.getFullYear() + 543;

    this.grade = {
      Ref: 0,
      OrderNo: 0,
      Name: '',
    };

    this.room = {
      Ref: 0,
      GradeRef: 0,
      GradeOrder: 0,
      GradeName: '',
      Name: '',
    };

  }

  ngOnInit(): void {

		this.gradeServ.get().subscribe(
			(grades) => {
        this.grades = grades;
      }
		);

//	this.roomServ.getByGrade(0).subscribe(
//		(rooms) => {
//       this.rooms = rooms;
//     }
//	);

  }

  search() {

    var rptdate = (this.yyyy-543) + '-' + this.mm + '-' + this.dd;

    this.reportServ.getReportCheckin001(rptdate, this.room.Ref.toString()).subscribe(
      reports => this.reports = reports
    )

  }

	searchRoom() {

		if (this.grade.Ref == 0) {
			this.room.Ref= 0;
      this.search();

		} else {
			this.roomServ.getByGrade(this.grade.Ref).subscribe(
				rooms => this.rooms = rooms
			);
		}

	}

}
