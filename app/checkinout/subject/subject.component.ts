import { Component, OnInit,AfterViewInit } from '@angular/core';

import { Grade, Room, Student } from '../../school';
import { User } from '../../services/user.service';
import { GradeService} from '../../services/grade.service';
import { RoomService } from '../../services/room.service';
import { StudentService } from '../../services/student.service';
import { SubjectgroupService, SubjectGroup} from '../../services/subjectgroup.service';
import { SubjectService, Subject } from '../../services/subject.service';
import { CheckinsubjectService, CheckinSubject, CheckinSubjectStudent  } from '../../services/checkinsubject.service';

declare var $:any;

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit,AfterViewInit {
  public user: User;
  public result: Result;
  public checkindate: string;

  public grades: Grade[];
  public grade_ref: number;

  public rooms: Room[];
  public room_ref: number;

  public students: Student[];

  public subjectgroups: SubjectGroup[];
  public subjectgroup_ref: number;

  public subjects: Subject[];
  public subject_ref: number;

  public checkinsubject: CheckinSubject;
  public checkinstudents: CheckinSubjectStudent[];
  public checkinstudent: CheckinSubjectStudent;

  public msg_header: string;
  public msg_body: string;
  public isDup: boolean;

  public noOfPeriod: number;

  constructor(
    public gradeServ: GradeService, 
    public roomServ: RoomService,
    public studentServ: StudentService,
    public subjectgroupServ: SubjectgroupService,
    public subjectServ: SubjectService,
    public checkinsubjectServ: CheckinsubjectService) { }


  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser'));

    this.checkinsubject = {
      Created:     '',
      Period:      0,
      RoomRef:     0,
      RoomName:    '',
      GradeRef:    0,
      GradeName:   '',
      TeacherRef:  0,
      TeacherFullName: this.user.Name,
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

    var date = new Date();
    this.checkinsubject.Created = date.toISOString().split('T')[0]

    this.gradeServ.get().subscribe(grades => this.grades = grades);
    this.grade_ref = 0;
    this.room_ref = 0;
    
    this.subjectgroupServ.get().subscribe(subjectgroups => this.subjectgroups = subjectgroups);
    this.subjectgroup_ref = 0;
    this.subject_ref =0;

    $('#warning-tag').css('display', 'none');
    $('#btnsave').css('display', 'none');

    this.noOfPeriod = 1;
  }

  ngAfterViewInit(): void {
  }

  periodChange() {
    this.checkinsubjectServ.checkDuplicate(
      this.checkinsubject.Created, 
      this.checkinsubject.Period.toString(), 
      this.checkinsubject.RoomRef.toString()).subscribe(r => {

      this.result = r;

      if(!this.result.Success){
        this.isDup = true;
        $('#warning-tag').css('display', 'inline');
        $('#btnsave').css('display', 'none');
        this.checkinsubject.Students = [];
        
      } else if(this.checkinsubject.RoomRef != 0) {
        this.isDup = false;
        $('#warning-tag').css('display', 'none');

        if(this.checkinsubject.RoomRef> 0 && this.checkinsubject.SubjectRef>0) {
          $('#btnsave').css('display', 'inline');
        } 

        this.checkinsubject.Students = [];

        this.studentServ.get(this.grade_ref, this.room_ref, '').subscribe(students => {
          this.students = students

          students.forEach(s => {
            var checkinstudent: CheckinSubjectStudent;

            checkinstudent = {
              StudentRef:      0,
              StudentCode:     '',
              StudentNo:       0,
              StudentFullName: '',
              StatusNo:        0,
              StatusName:      '',
            };
            
            checkinstudent.StudentRef = s.Ref;
            checkinstudent.StudentCode = s.Code;
            checkinstudent.StudentNo = s.No;
            checkinstudent.StudentFullName = s.FirstName + ' ' + s.LastName;
            checkinstudent.StatusNo = 1;
            checkinstudent.StatusName = 'มา';

            this.checkinsubject.Students.push(checkinstudent);
          })

        });
      }
    });
  }

  gradeChange() {
    this.checkinsubject.GradeRef = this.grade_ref;

    this.roomServ.getByGrade(this.grade_ref).subscribe(rooms => this.rooms = rooms);
    this.room_ref = 0;
    this.subjectgroup_ref = 0;
    this.subjects = [];
    this.checkinsubject.SubjectRef= 0;
    this.checkinsubject.Students = [];

    $('#warning-tag').css('display', 'none');
    $('#btnsave').css('display', 'none');
  }

  dateChange() {
    this.roomChange();
    this.subjectChange();
  }

  roomChange() {
    this.checkinsubject.RoomRef = this.room_ref;
    this.checkinsubject.Students = [];

    this.checkinsubjectServ.checkDuplicate(
      this.checkinsubject.Created, 
      this.checkinsubject.Period.toString(), 
      this.checkinsubject.RoomRef.toString()).subscribe(r => {

      this.result = r;

      if(this.result.Success){
        this.isDup = false;
        $('#warning-tag').css('display', 'none');

        if(this.checkinsubject.RoomRef>0 && this.checkinsubject.SubjectRef > 0) {
          $('#btnsave').css('display', 'inline');

        } else {
          $('#btnsave').css('display', 'none');
        }
        
        this.studentServ.get(this.grade_ref, this.room_ref, '').subscribe(students => {
          this.students = students

          students.forEach(s => {
            var checkinstudent: CheckinSubjectStudent;

            checkinstudent = {
              StudentRef:      0,
              StudentCode:     '',
              StudentNo:       0,
              StudentFullName: '',
              StatusNo:        0,
              StatusName:      '',
            };
            
            checkinstudent.StudentRef = s.Ref;
            checkinstudent.StudentCode = s.Code;
            checkinstudent.StudentNo = s.No;
            checkinstudent.StudentFullName = s.FirstName + ' ' + s.LastName;
            checkinstudent.StatusNo = 1;
            checkinstudent.StatusName = 'มา';

            this.checkinsubject.Students.push(checkinstudent);
          })

        });

      } else {
        this.isDup = true;
        $('#warning-tag').css('display', 'inline');
        $('#btnsave').css('display', 'none');

      }
    })
  }

  subjectgroupChange() {
    this.subjectServ.getByGradeGroup(this.grade_ref.toString(), this.subjectgroup_ref.toString()).subscribe(subjects => {this.subjects = subjects});
    this.subjects = [];
    this.checkinsubject.SubjectRef= 0;
    $('#btnsave').css('display', 'none');
  }

  subjectChange() {
    if(!this.isDup && this.checkinsubject.RoomRef > 0 && this.checkinsubject.SubjectRef > 0) {
      $('#btnsave').css('display', 'inline');
    } else {
      $('#btnsave').css('display', 'none');
    }
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
    this.checkinsubjectServ.save(this.checkinsubject).subscribe(result => {
      this.result = result;
      
      if(this.result.Success) {

        if(this.noOfPeriod == 2) {
          this.checkinsubject.Period = this.checkinsubject.Period + 1;

          this.checkinsubjectServ.save(this.checkinsubject).subscribe(s => {
            this.msg_header = 'บันทึกข้อมูลการเช็คชื่อ';
            this.msg_body = 'บันทึกข้อมูลการเช็คชื่อเรียบร้อย';
            $('#message').modal('show');
            $('#btnsave').css('display', 'none');
          });

        } else {
            this.msg_header = 'บันทึกข้อมูลการเช็คชื่อ';
            this.msg_body = 'บันทึกข้อมูลการเช็คชื่อเรียบร้อย';
            $('#message').modal('show');
            $('#btnsave').css('display', 'none');
        }

      } else {
        this.msg_header = 'บันทึกข้อมูลการเช็คชื่อ';
        this.msg_body = 'ไม่สามามรถบันทึกข้อมูลการเช็คชื่อได้';
        $('#message').modal('show');
      }
    })
  }

  close_msg() {
    $('#message').modal('hide');
  }
}

interface Result {
  Success: boolean
}
