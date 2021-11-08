import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Grade, Room } from '../../school';
import { GradeService} from '../../services/grade.service';
import { RoomService} from '../../services/room.service';
import { SubjectgroupService, SubjectGroup} from '../../services/subjectgroup.service';
import { SubjectService, Subject} from '../../services/subject.service';
import { SubjectStudentService, SubejectStudent } from '../../services/subject-student.service';

declare var $:any;

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-subject-student',
  templateUrl: './subject-student.component.html',
  styleUrls: ['./subject-student.component.css']
})
export class SubjectStudentComponent implements OnInit, AfterViewInit {

	public dt: DataTable;
	public data: string[][];

  public yearedu: number;

  public grades: Grade[];
  public grade_ref: number;

  public rooms: Room[];
  public room_ref: number;

  public subjectgrps: SubjectGroup[];
  public subjectgrp_ref: number;

  public subjects: Subject[];
  public subject_ref: number;

  public subjectstudents: SubejectStudent[];

  public student_code: string;

  constructor(
    public gradeServ: GradeService,
    public roomServ: RoomService,
    public subjectgrpServ: SubjectgroupService,
    public subjectServ: SubjectService,
    public subjectStudentServ: SubjectStudentService) { }

  ngOnInit(): void {
		this.dt = {
			headerRow: ['หมวดวิชา', 'ชื่อวิชา', 'ระดับชั้น', 'ห้อง', 'รหัส', 'ชื่อ-นามสกุลนักเรียน' ],
			footerRow: ['หมวดวิชา', 'ชื่อวิชา', 'ระดับชั้น', 'ห้อง', 'รหัส', 'ชื่อ-นามสกุลนักเรียน' ],
			dataRows: [],
		};

    var today = new Date();
    this.yearedu = today.getFullYear() +543;

    this.grade_ref = 0;
    this.room_ref = 0;
    this.subjectgrp_ref = 0;
    this.subject_ref = 0;

    this.gradeServ.get().subscribe(s => this.grades = s);
    this.subjectgrpServ.get().subscribe(s => this.subjectgrps = s);
  }

  ngAfterViewInit(): void {

		var self = this;

    var table = $('#subjectstudent-table').DataTable({
			dom: 'Bfrtip',
			buttons: [
				'copy', 'csv', 'excel', 'pdf', 'print'
			],
			responsive: true,
			language: {
				search: "_INPUT_",
				searchPlaceholder: "Search records",
			},
      pageLength: 50,
			pagingType: "full_numbers",
    });

    table.on('mouseover', 'tr', function() {
      $(this).css('cursor', 'pointer');
      $(this).css('font-weight', 'bolder');
    });

    table.on('mouseout', 'tr', function() {
      $(this).css('font-weight', 'normal');
    });

  }

  refreshTable() {
    var table = $('#subjectstudent-table').DataTable();
		table.clear();
		table.draw();
		this.data = [];

    this.subjectstudents.forEach(s => {
      this.data.push([s.SubjectGroupName, s.SubjectName, s.GradeName, s.RoomName, s.StudentCode, s.StudentName])
    })

    table.rows.add(this.data);
    table.draw();
  }

  setEdit(isEdit: boolean) {
    if(isEdit) {
      $('#subject-student-form').css('display','inline');
      $('#subject-student-view').css('display','none');
    } else{
      $('#subject-student-form').css('display','none');
      $('#subject-student-view').css('display','inline');
    }
  }

  changeGrade() {
    this.room_ref = 0;
    this.roomServ.getByGrade(this.grade_ref).subscribe(s => this.rooms = s);

    this.searchSubject();
  }

  searchSubject() {
    this.subject_ref = 0;
    this.subjectstudents = [];
    this.refreshTable();

    if(this.grade_ref>0 && this.subjectgrp_ref>0) {
      this.subjectServ.getByGradeGroup(this.grade_ref.toString(), this.subjectgrp_ref.toString()).subscribe(s => this.subjects = s);
      this.roomServ.getByGrade(this.grade_ref).subscribe(s => this.rooms = s);
    }        
    
  }

  searchStudent() {
    if(this.grade_ref>0 && this.room_ref == 0 && this.subject_ref>0) {
      this.subjectStudentServ.get(this.yearedu.toString(), this.grade_ref.toString(), this.subject_ref.toString()).subscribe(s => {
        this.subjectstudents = s;
        this.refreshTable();
      });
    } else if(this.grade_ref>0 && this.room_ref > 0 && this.subject_ref>0) {
      this.subjectStudentServ.getByRoom(this.yearedu.toString(), this.room_ref.toString(), this.subject_ref.toString()).subscribe(s => {
        this.subjectstudents = s;
        this.refreshTable();
      });
    }
  }

  insertAllGrade() {
    if(this.grade_ref>0 && this.subject_ref>0) {
      this.subjectStudentServ.insertAllGrade(this.yearedu.toString(), this.grade_ref.toString(), this.subject_ref.toString()).subscribe(s => {
        this.subjectstudents = s;
        this.refreshTable();
      });
    }
  }

  deleteAllGrade() {
    if(this.grade_ref>0 && this.subject_ref>0) {
      this.subjectStudentServ.deleteAllGrade(this.yearedu.toString(), this.grade_ref.toString(), this.subject_ref.toString()).subscribe(s => {
        this.subjectstudents = s;
        this.refreshTable();
      });
    }
  }

  insertByRoom() {
    if(this.grade_ref>0 && this.room_ref>0 && this.subject_ref>0) {
      this.subjectStudentServ.insertByRoom(this.yearedu.toString(), this.room_ref.toString(), this.subject_ref.toString()).subscribe(s => {
        this.subjectstudents = s;
        this.refreshTable();
      });
    }
  }

  deleteByRoom() {
    if(this.grade_ref>0 && this.room_ref>0 && this.subject_ref>0) {
      this.subjectStudentServ.deleteByRoom(this.yearedu.toString(), this.room_ref.toString(), this.subject_ref.toString()).subscribe(s => {
        this.subjectstudents = s;
        this.refreshTable();
      });
    }
  }
  
  insertByCode() {
    if(this.grade_ref>0 && this.subject_ref>0) {
      this.subjectStudentServ.insertByCode(this.yearedu.toString(), this.student_code, this.subject_ref.toString()).subscribe(s => {
        this.subjectstudents = s;
        this.refreshTable();
      });
    }
  }

  deleteByCode() {
    if(this.grade_ref>0  && this.subject_ref>0) {
      this.subjectStudentServ.deleteByCode(this.yearedu.toString(), this.student_code, this.subject_ref.toString()).subscribe(s => {
        this.subjectstudents = s;
        this.refreshTable();
      });
    }
  }
  insert() {
    this.setEdit(true);
  }

}
