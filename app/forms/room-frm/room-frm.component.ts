import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Grade, Room } from '../../school';
import { GradeService } from '../../services/grade.service';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-room-frm',
  templateUrl: './room-frm.component.html',
  styleUrls: ['./room-frm.component.css']
})
export class RoomFrmComponent implements OnInit {

	@Input() room: Room;
	@Output() rooms = new EventEmitter<Room[]>();

	public grades: Grade[] = [];
	public grade: Grade;

  constructor(
    public gradeServ: GradeService,
    public roomServ: RoomService
  ) { 

    this.room = {
      Ref: 0,
      GradeRef: 0,
      GradeOrder: 0,
      GradeName: "",
      Name: "",
    };

    this.grade = {
      Ref: 0,
      OrderNo: 0,
      Name: "",
    };

  }

  ngOnInit(): void {

		this.gradeServ.get().subscribe(
			grades => this.grades = grades
		);

  }

	save() {
		this.roomServ.save(this.room).subscribe(
			classrooms => this.rooms.emit(classrooms)
		);
	}

	cancel() {
		this.rooms.emit([]);
	}

  remove() {
		this.roomServ.remove(this.room).subscribe(
			classrooms => this.rooms.emit(classrooms)
		);
  }

}
