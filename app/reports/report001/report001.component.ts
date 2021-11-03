import { Component, OnInit } from '@angular/core';

import { Grade, Room, ReportBehavior001 } from '../../school';
import { ReportsService } from '../../services/reports.service';
import { GradeService } from '../../services/grade.service';
import { RoomService } from '../../services/room.service';


@Component({
  selector: 'app-report001',
  templateUrl: './report001.component.html',
  styleUrls: ['./report001.component.css']
})
export class Report001Component implements OnInit {

  public edited: boolean = false;
  
  public code!: string;

  public grades: Grade[] = [];
  public grade: Grade;

  public rooms: Room[] = [];
  public room: Room;

  public reports: ReportBehavior001[] = [];
  public report!: ReportBehavior001;

  constructor(
    public reportServ: ReportsService,
    public gradeServ: GradeService,
    public roomServ:  RoomService

  ) { 

    this.grade = {
      Ref: 0,
      OrderNo: 0,
      Name: "",
    };

    this.room = {
      Ref: 0,
      GradeRef: 0,
      GradeOrder: 0,
      GradeName: "",
      Name: "",
    };

  }

  ngOnInit(): void {

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

  search() {

    this.reportServ.getReportBehavior001(this.room.Ref.toString()).subscribe(
      reports => this.reports = reports
    );

  }

  clickrow(report: ReportBehavior001) {
    this.edited = true;
    this.report = report;
  }

  handleEdit(edited: boolean) {
    this.edited = false;
  }
  

}
