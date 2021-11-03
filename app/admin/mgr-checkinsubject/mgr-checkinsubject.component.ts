import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Grade, Room, Student } from '../../school';
import { CheckinsubjectService, CheckinSubject, CheckinSubjectStudent, CheckinStudent} from '../../services/checkinsubject.service';
import { GradeService} from '../../services/grade.service';
import { RoomService } from '../../services/room.service';
import { StudentService } from '../../services/student.service';
import { SubjectgroupService, SubjectGroup} from '../../services/subjectgroup.service';
import { SubjectService, Subject } from '../../services/subject.service';

declare var $:any;

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-mgr-checkinsubject',
  templateUrl: './mgr-checkinsubject.component.html',
  styleUrls: ['./mgr-checkinsubject.component.css']
})
export class MgrCheckinsubjectComponent implements OnInit, AfterViewInit {

	public dataTable: DataTable;
	public data: string[][];

  public period_search: number;

  public grades: Grade[];
  public grades_search: Grade[];
  public grade_search_ref: number;

  public rooms: Room[];
  public rooms_search: Room[];
  public room_search_ref: number;

  public students: Student[];

  public subjectgroups: SubjectGroup[];
  public subjectgroups_search: SubjectGroup[];
  public subjectgroup_search_ref: number;

  public subjects: Subject[];

  public checkinsubject: CheckinSubject;
  public checkinstudents: CheckinSubjectStudent[];
  public checkinstudent: CheckinSubjectStudent;

  public checkindate_search: string;

  constructor(
    public gradeServ: GradeService,
    public roomServ: RoomService,
    public subjectgrpServ: SubjectgroupService,
    public subjectServ: SubjectService,
    public checkinsubjectServ: CheckinsubjectService) { }

  ngOnInit(): void {
		this.dataTable = {
			headerRow: ['เลขที่', 'รหัส', 'ชื่อ-นามสกุล', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
			footerRow: ['เลขที่', 'รหัส', 'ชื่อ-นามสกุล', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ],
			dataRows: [],
		};

    this.checkinsubject = {
      Created:     '',
      Period:      0,
      RoomRef:     0,
      RoomName:    '',
      GradeRef:    0,
      GradeName:   '',
      TeacherRef:  0,
      TeacherFullName: '',
      SubjectGroupRef: 0,
      SubjectGroupName: '',
      SubjectRef:  0,
      SubjectName: '',
      Students:    [],
    };

    this.checkinstudent = {
      StudentRef:      0,
      StudentCode:     '',
      StudentNo:       0,
      StudentFullName: '',
      StatusNo:        0,
      StatusName:      '',
    }

    this.gradeServ.get().subscribe(s => this.grades = s);    

    this.subjectgrpServ.get().subscribe(s => this.subjectgroups = s);

    this.period_search = 0;
    this.gradeServ.get().subscribe(s => this.grades_search = s);    
    this.grade_search_ref = 0;
    this.room_search_ref = 0;
    this.subjectgroup_search_ref = 0;
    this.subjectgroup_search_ref = 0;

    this.subjectgrpServ.get().subscribe(s => this.subjectgroups = s);
  }

  ngAfterViewInit(): void {
		var self = this;

		var table = $('#reporttable').DataTable({
			dom: 'Bfrtip',
			buttons: [
				'copy', 'csv', 'excel', 'pdf', 'print'
			],
			responsive: true,
			language: {
				search: "_INPUT_",
				searchPlaceholder: "Search records",
			},
			pagingType: "full_numbers",
		});

		table.on('mouseover', 'tr', function() {
			let $tr = $(this).closest('tr');

			$(this).css('cursor', 'pointer');
		});

		table.on('click', 'td', function() {
			let $tr = $(this).closest('tr');

			var data = table.row($tr).data();
		});

    $('#warning-tag').css('display', 'none');
  }

  dateSearchChange() {
    if(this.room_search_ref != 0) {
      this.search();
    }
  }

  dateChange() {

  }

  periodChange() {

  }

  periodSearchChange() {
    if(this.room_search_ref != 0) {
      this.search();
    }
  }

  gradeSearchChange() {
    this.roomServ.getByGrade(this.grade_search_ref).subscribe(s => this.rooms_search = s);
  }

  gradeChange() {
    this.roomServ.getByGrade(this.checkinsubject.GradeRef).subscribe(s => this.rooms = s);
  }

  roomSearchChange() {
    this.search();
  }

  roomChange() {
  }

  subjectgroupChange() {
    this.subjectServ.getByGradeGroup(this.checkinsubject.GradeRef.toString(), this.checkinsubject.SubjectGroupRef.toString()).subscribe(s => this.subjects = s);
  }

  search() {
    this.checkinsubjectServ.getByKey(this.checkindate_search, this.period_search.toString(), this.room_search_ref.toString()).subscribe(s => {
      this.checkinsubject = s
      this.gradeChange();
      this.subjectgroupChange();
    });

  }


  save() {

  }

  delete() {
    confirm("ต้องการลบข้อมูลหรือใม่ ?")
  }

}
