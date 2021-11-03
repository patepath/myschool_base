import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Grade } from '../../school';
import { GradeService } from '../../services/grade.service';

@Component({
  selector: 'app-grade-frm',
  templateUrl: './grade-frm.component.html',
  styleUrls: ['./grade-frm.component.css']
})
export class GradeFrmComponent implements OnInit {

	@Input() grade: Grade;
	@Output() grades = new EventEmitter<Grade[]>();

  constructor(
    private gradeServ: GradeService
  ) {

    this.grade = {
      Ref: 0,
      OrderNo: 0,
      Name: "",
    };

  }

  ngOnInit(): void {

  }

	save() {
		this.gradeServ.save(this.grade).subscribe(
			grades => this.grades.emit(grades)
		);
	}

  remove() {
    this.gradeServ.remove(this.grade).subscribe(
			grades => this.grades.emit(grades)
    )
  }

	cancel() {
		this.grades.emit([]);
	}


}
