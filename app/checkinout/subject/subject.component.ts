import { Component, OnInit } from '@angular/core';

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
export class SubjectComponent implements OnInit {
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
    this.checkindate = date.getDate() + '/' + (date.getMonth()+1) + '/' +date.getFullYear();
    this.checkinsubject.Created = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();

    this.gradeServ.get().subscribe(grades => this.grades = grades);
    this.grade_ref = 0;
    this.room_ref = 0;
    
    this.subjectgroupServ.get().subscribe(subjectgroups => this.subjectgroups = subjectgroups);
    this.subjectgroup_ref = 0;
    this.subject_ref =0;

    $('#warning-tag').css('display', 'none');
    $('#btnsave').css('display', 'none');
  }

  periodChange() {
    this.checkinsubjectServ.checkDuplicate(
      this.checkinsubject.Created, 
      this.checkinsubject.Period.toString(), 
      this.checkinsubject.RoomRef.toString()).subscribe(r => {

      this.result = r;

      //alert(this.result.Success);

      if(!this.result.Success){
        $('#warning-tag').css('display', 'inline');
        $('#btnsave').css('display', 'none');
        this.checkinsubject.Students = [];
        
      } else if(this.checkinsubject.RoomRef != 0) {
        $('#warning-tag').css('display', 'none');
        $('#btnsave').css('display', 'inline');

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

  roomChange() {
    this.checkinsubject.RoomRef = this.room_ref;

    this.checkinsubject.Students = [];


    this.checkinsubjectServ.checkDuplicate(
      this.checkinsubject.Created, 
      this.checkinsubject.Period.toString(), 
      this.checkinsubject.RoomRef.toString()).subscribe(r => {

      this.result = r;

      if(!this.result.Success){
        $('#warning-tag').css('display', 'inline');
        $('#btnsave').css('display', 'none');
        
      } else {
        $('#warning-tag').css('display', 'none');
        $('#btnsave').css('display', 'inline');

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
    })
  }

  subjectgroupChange() {
    this.subjectServ.getByGradeGroup(this.grade_ref.toString(), this.subjectgroup_ref.toString()).subscribe(subjects => {this.subjects = subjects});
    this.subjects = [];
    this.checkinsubject.SubjectRef= 0;
  }

  normal(index: number) {
    this.checkinsubject.Students[index].StatusNo = 1;
    this.checkinsubject.Students[index].StatusName = 'มา';
  }

  absent(index: number) {
    this.checkinsubject.Students[index].StatusNo = 2;
    this.checkinsubject.Students[index].StatusName = 'ขาดเรียน';
  }

  leave(index: number) {
    this.checkinsubject.Students[index].StatusNo = 3;
    this.checkinsubject.Students[index].StatusName = 'ลากิจ';
  }

  sick(index: number) {
    this.checkinsubject.Students[index].StatusNo = 4;
    this.checkinsubject.Students[index].StatusName = 'ลาป่วย';
  }

  save() {
    this.checkinsubjectServ.save(this.checkinsubject).subscribe(result => {
      this.result = result;
      
      if(this.result.Success) {
        alert('success');
      } else {
        alert('failure');
      }
    })
  }
}

interface Result {
  Success: boolean
}