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
  public result: Result;

  public msg_header: string;
  public msg_body: string;

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
//		var self = this;
//
//		var table = $('#checkinsubject-table').DataTable({
//		//	dom: 'Bfrtip',
//			buttons: [
//				'copy', 'csv', 'excel', 'pdf', 'print'
//			],
//			responsive: true,
//			language: {
//				search: "_INPUT_",
//				searchPlaceholder: "Search records",
//			},
//			pagingType: "full_numbers",
//		});
//
//		table.on('mouseover', 'tr', function() {
//			let $tr = $(this).closest('tr');
//
//			$(this).css('cursor', 'pointer');
//		});
//
//		table.on('click', 'td', function() {
//			let $tr = $(this).closest('tr');
//
//			var data = table.row($tr).data();
//		});
//
    $('#warning-tag').css('display', 'none');
    $('#btnSave').css('display', 'none');
    $('#btnDelete').css('display', 'none');
  }

  dateSearchChange() {
    if(this.room_search_ref != 0) {
      this.search();
    }
  }

  dateChange() {
  }

  periodChange() {
    if(this.period_search != this.checkinsubject.Period) {
      this.checkDuplicate();

    } else {
      $('#warning-tag').css('display', 'none');

      if(this.checkinsubject.RoomRef > 0) {
        $('#btnSave').css('display', 'inline');
        $('#btnDelete').css('display', 'inline');
      }
    }
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

//      this.refresh_table();

//      this.checkinsubject.Students.forEach((student,i) => { 
//       switch(student.StatusNo) {
//         case 1:
//           $('#row' + i).css('background-color', 'white');
//           break;
//
//         case 2:
//           $('#row' + i).css('background-color', '#ff7f50');
//           break;
//         
//         case 3:
//           $('#row' + i).css('background-color', '#FFDDB9');
//           break;
//
//         case 4:
//           console.log(student.StatusNo + ' ' +'#row'+1);
//           $('#row' + i).css('background-color', '#C3C3C3');
//           break;
//       }
//      });
      
        $('#warning-tag').css('display', 'none');
        $('#btnSave').css('display', 'inline');
        $('#btnDelete').css('display', 'inline');
    });
  }

  checkDuplicate() {
    this.checkinsubjectServ.checkDuplicate(this.checkinsubject.Created, this.checkinsubject.Period.toString(), this.checkinsubject.RoomRef.toString()).subscribe(s => {
      this.result = s;

      if(!this.result.Success) {
        $('#warning-tag').css('display', 'inline');
        $('#btnSave').css('display', 'none');
        $('#btnDelete').css('display', 'none');

      } else {
        $('#warning-tag').css('display', 'none');
        $('#btnSave').css('display', 'inline');
        $('#btnDelete').css('display', 'inline');
      }
    });
  }

  normal(index: number) {
    this.checkinsubject.Students[index].StatusNo = 1;
    this.checkinsubject.Students[index].StatusName = 'มา';

    $('#row' + index).css('background-color', '#ffffff')
  }

  absent(index: number) {
    this.checkinsubject.Students[index].StatusNo = 2;
    this.checkinsubject.Students[index].StatusName = 'ขาดเรียน';

    $('#row' + index).css('background-color', '#ff7f50')
  }

  leave(index: number) {
    this.checkinsubject.Students[index].StatusNo = 3;
    this.checkinsubject.Students[index].StatusName = 'ลากิจ';

    $('#row' + index).css('background-color', '#FFDDB9')
  }

  sick(index: number) {
    this.checkinsubject.Students[index].StatusNo = 4;
    this.checkinsubject.Students[index].StatusName = 'ลาป่วย';

    $('#row' + index).css('background-color', '#C3C3C3')
  }

  save() {
    if(
      this.checkindate_search == this.checkinsubject.Created && 
      this.period_search == this.checkinsubject.Period && 
      this.room_search_ref == this.checkinsubject.RoomRef) {

        this.update();

    } else {
      this.change();
    }

  }

  change() {
    this.checkinsubjectServ.change(this.checkindate_search, this.period_search.toString(), this.room_search_ref.toString(), this.checkinsubject).subscribe(s => {
      this.result = s;
      this.period_search = this.checkinsubject.Period;

      if(this.result.Success) {
        this.msg_header = 'บันทึกข้อมูลการเช็คชื่อ'
        this.msg_body = 'บันทึกข้อมูลการเช็คชื่อเรียบร้อย';
        $('#message').modal('show');
      }
    });
  }

  update() {
    this.checkinsubjectServ.update(this.checkinsubject).subscribe(s => {
      this.result = s;

      if(this.result.Success) {
        this.msg_header = 'บันทึกข้อมูลการเช็คชื่อ'
        this.msg_body = 'บันทึกข้อมูลการเช็คชื่อเรียบร้อย';
        $('#message').modal('show');
      }
    })
  }

  delete() {
    $('#msg-confirm').modal('show')
  }

  confirm_delete() { 
    $('#msg-confirm').modal('hide');

    this.checkinsubjectServ.delete(this.checkindate_search, this.period_search.toString(), this.room_search_ref.toString()).subscribe(s => {
      this.result = s;

      if(this.result.Success) {

      }

      this.msg_header = 'ลบข้อมูลการเช็คชื่อ'
      this.msg_body = '<p>ลบข้อมูลการเช็คชื่อเรียบร้อย</p>';
      $('#message').modal('show');
      window.location.reload();
    })
  }

  close_msg() {
    $('#message').modal('hide');
    $('#msg-confirm').modal('hide');
  }

}

interface Result {
  Success: boolean
}