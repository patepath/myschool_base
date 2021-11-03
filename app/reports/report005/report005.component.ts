import { Component, OnInit } from '@angular/core';

import { Grade, Room, Opt, Report005 } from '../../school';
import { GradeService } from '../../services/grade.service';
import { RoomService } from '../../services/room.service';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-report005',
  templateUrl: './report005.component.html',
  styleUrls: ['./report005.component.css']
})
export class Report005Component implements OnInit {

  public reports: Report005[] = [];
 
  public monthyr: string;

  public grades: Grade[] = [];
  public grade: Grade;

  public rooms: Room[] = [];
  public room: Room;

  public reportdate = new Date();

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
    public gradeServ: GradeService,
    public roomServ:  RoomService,
    public reportServ: ReportsService
  ) { 

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

    this.reportdate = new Date();

    this.yyyy = this.reportdate.getFullYear() + 543;
    this.mm = this.reportdate.getMonth() + 1;

    this.monthyr = this.yyyy + '-' + this.mm;

		this.gradeServ.get().subscribe(
			(grades) => {
        this.grades = grades;
      }
		);

		this.roomServ.getByGrade(0).subscribe(
			(rooms) => {
        this.rooms = rooms;
      }
		);

  }

	searchRoom() {

		if (this.grade.Ref == 0) {
			this.room.Ref= 0;

		} else {
			this.roomServ.getByGrade(this.grade.Ref).subscribe(
				rooms => this.rooms = rooms
			);
		}

	}

  updateDate() {
    this.monthyr = (this.yyyy-543) + '-' + this.mm;

    this.search();
  }

  search() {

    if(this.room.Ref != 0){

      this.reportServ.getReport005(this.monthyr, this.room.Ref.toString()).subscribe(
        reports => this.reports = reports
      )

    } 


  }

}
