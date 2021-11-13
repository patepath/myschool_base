import { Component, OnInit } from '@angular/core';

//import { Student } from '../../school';
import { StudentService } from '../../services/student.service';
import { TeacherService } from '../../services/teacher.service';
import { User as LoginInfo } from '../../services/login.service';
import { UserService, User } from '../../services/user.service';
import { Student, Teacher } from 'app/school';
import { first } from 'rxjs-compat/operator/first';

declare var $:any;

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  public user: User;
  public student: Student;
  public teacher: Teacher;

  public firstname: string;
  public lastname: string;
  public password1: string;
  public password2: string;
  public msg_header: string;
  public msg_body: string;

  constructor(public userServ: UserService, public studentServ: StudentService, public teacherServ: TeacherService) { }

  ngOnInit(): void {

    this.password1 = '';
    this.password2 = '';
    this.user = JSON.parse(localStorage.getItem('currentUser'));

    switch(this.user.Role) {

      case "student":
        this.studentServ.getByCode(this.user.Code).subscribe(s => {
          this.student = s;

          this.firstname = s.FirstName;
          this.lastname = s.LastName;

        });
        break;

        case "teacher":
          this.teacherServ.getByCode(this.user.Code).subscribe(t => {
            this.teacher = t;

            this.firstname = t.FirstName;
            this.lastname = t.LastName;

          });
          break;

        case "admin":
          this.firstname = this.user.Fullname.split(' ')[0];
          this.lastname = this.user.Fullname.split(' ')[1];
          break;
    }
    
  }

  save() {
    if(this.password1 == this.password2) {

      this.user.Fullname = this.firstname + ' ' + this.lastname;
      localStorage.setItem('currentUser', JSON.stringify(this.user));
      this.user.Password = this.password1;

      this.userServ.save(this.user).subscribe(u => {

        switch(this.user.Role) {
          case 'student':
            this.student.FirstName = this.firstname;
            this.student.LastName = this.lastname;

            this.studentServ.save(this.student).subscribe(s => s);
            break;

          case 'teacher':
            this.teacher.FirstName = this.firstname;
            this.teacher.LastName = this.lastname;

            this.teacherServ.save(this.teacher).subscribe(t => t);
            break;
        }

        this.msg_header = 'ปรับปรุงข้อมูลส่วนตัว';
        this.msg_body = 'ปรับปรุงข้อมูลส่วนตัวเเรียบร้อยแล้ว';
        $('#message').modal('show');

      });

    }

  }

  close_msg() {
    //$('#message').modal('hide');
    location.reload();
  }

}
