import { Component, OnInit } from '@angular/core';

import { Grade } from '../../school';
import { GradeService } from '../../services/grade.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

	public edited: boolean = false;

	public txtsearch: string = "";

	public grades: Grade[] = [];
	public grade: Grade;

  constructor(
    private gradeServ: GradeService
  ) { 

    this.grade = {
      Ref: 0,
      OrderNo: 0,
      Name: "",
    }

  }

  ngOnInit(): void {

		this.gradeServ.get().subscribe(
			grades => this.grades = grades
		);

  }

	insert() {
		this.grade = {
			"Ref": 0,
			"OrderNo": 0,
			"Name": "",
		}

		this.edited = true;
	}

	clickRow(grade: Grade ) {
		this.grade = grade;
		this.edited = true;
	}

	handleGrades(grades: Grade[]) {
		this.edited = false;

		if(grades.length != 0) {
			this.grades = grades;
		}
	}

}
