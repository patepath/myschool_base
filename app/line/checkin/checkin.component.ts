import { Component, OnInit } from '@angular/core';

import { Grade, Room, Department} from '../../school';
import { GradeService } from '../../services/grade.service';
import { RoomService } from '../../services/room.service';
import { DeptService } from '../../services/dept.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  public grade_ref: number;
  public grades: Grade[];

  public room_ref: number;
  public rooms: Room[];

  public dept_ref: number;
  public depts: Department[];

  constructor(public gradeServ: GradeService, public roomServ: RoomService, public deptServ: DeptService) { }

  ngOnInit(): void {
    this.gradeServ.get().subscribe(grades => this.grades = grades);
    this.deptServ.get().subscribe(depts => this.depts = depts);
  }

	gradeChange() {
		this.rooms = [];

    this.roomServ.getByGrade(this.grade_ref).subscribe(
      rooms => this.rooms = rooms
    );

	}
}
