import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Student, Grade, Room } from '../../school';
import { UserService, User } from '../../services/user.service';
import { GradeService } from '../../services/grade.service';
import { RoomService } from '../../services/room.service';

declare var $:any;

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterViewInit {

  public dataTable: DataTable;
	public data: string[][];

  public users: User[];
  public user: User;

  public password1: string;
  public password2: string;

  public edited: boolean;

  private _isValid: boolean;
  private _passwordValid: boolean;

  public grades: Grade[];
  public grade_ref: number;
  public rooms: Room[];
  public room: Room; 
  public student: Student;

  constructor(
    private userSrv: UserService,
    private gradeSrv: GradeService,
    private roomSrv: RoomService) { 

    this.password1 = ''
    this.password2 = ''
    
    this.user = {
      Ref: 0,
      IdCard: 'aaa',
      Code: '',
      Name: '',
      Password: '',
      Fullname: '',
      Role: ''
    }
  }

  ngOnInit(): void {

    this.grade_ref = 0;

    this.gradeSrv.get().subscribe(
      grades => this.grades = grades
    );

    this.dataTable = {
      headerRow: [ 'ขื่อล๊อกอิน', 'ชื่อ-นามสกุล', 'Role' ],
      footerRow: [ 'ขื่อล๊อกอิน', 'ชื่อ-นามสกุล', 'Role' ],
      dataRows: [ ]
    };

    this.setEdit(false);
  }

  ngAfterViewInit(){

		var self = this;

    $('#userTable').DataTable({
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

    var table = $('#userTable').DataTable();

    table.on('mouseover', 'td', function() {
      $(this).css('cursor', 'pointer');
    });

    table.on('click', 'td', function() {
      let $tr = $(this).closest('tr');

			var data = table.row($tr).data();
			self.updateform(data[3]);
    });

    // Edit record
    table.on('click', '.edit', function() {
      let $tr = $(this).closest('tr');

      var data = table.row($tr).data();
      alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
    });

    // Delete a record
    table.on('click', '.remove', function(e) {
      let $tr = $(this).closest('tr');
      table.row($tr).remove().draw();
      e.preventDefault();
    });

    //Like record
    table.on('click', '.like', function() {
      alert('You clicked on Like button');
    });

    this.search()
  }

	setEdit(edit: boolean) {
		var frm = $('#user_frm');
		var view = $('#user_view');

		if(edit) {
			frm.css('display','inline');
			view.css('display','none');

		} else {
			frm.css('display','none');
			view.css('display','inline');
		}
	}

  updateform(ref: string) {
    this.userSrv.getByRef(ref).subscribe(
      user => {
        this.user = user;
      }
    );      

    this.setEdit(true);
  }

  get isValid(): boolean {
    this._isValid = this.user.Name != '';

    return this._isValid;
  }

  get passwordValid(): boolean {

    this._passwordValid = true;

    if(this.password1 != '' && (this.password1 != this.password2)) {
      this._passwordValid = false;
    }

    return this._passwordValid;
  }

  search() {
    var table = $('#userTable').DataTable();
    table.clear();
    table.draw();

    this.userSrv.getAll().subscribe(
      user => {

        this.data = [];
        
				user.forEach(s => {
					this.data.push([s.Name, s.Fullname, s.Role, s.Ref.toString() ]);
				});

				table.rows.add(this.data)
				table.draw();
      }
    );
  }

  clickrow(user: User) {
    this.password1 = ''
    this.password2 = ''

    this.user = user;
    this.edited = true;
  }

  insert() {
    this.user = {
      Ref: 0,
      IdCard: '',
      Code: '',
      Name: '',
      Password: '',
      Fullname: '',
      Role: ''
    }

    this.setEdit(true);
  }

  registerfromstudent() {
		var frm = $('#user_frm');
		var view = $('#user_view');
    var student_frm = $('#student-frm');

    frm.css('display','none');
    view.css('display','none');
    student_frm.css('display', 'inline');

  }

  registerstudent() {
    this.subformclose();
  }

  subformclose() {
		var frm = $('#user_frm');
		var view = $('#user_view');
    var student_frm = $('#student-frm');

    frm.css('display','none');
    view.css('display','inline');
    student_frm.css('display', 'none');
  }

  save() {

    var table = $('#userTable').DataTable();
    table.clear();
    table.draw();

    if(this.password1 != '' && this.password1 === this.password2) {
      this.user.Password = this.password1;
    }

    console.log(this.user);

    this.userSrv.save(this.user).subscribe(
      users => {
        this.data = [];
        
				users.forEach(s => {
					this.data.push([s.Name, s.Fullname, s.Role, s.Ref.toString() ]);
				});

				table.rows.add(this.data)
				table.draw();
      }
    );

    this.setEdit(false)
  }

  remove()  {
    if(confirm('ต้องการลบผู้ใช้งานหรือไม่')) {
      var table = $('#userTable').DataTable();
      table.clear();
      table.draw();

      this.userSrv.remove(this.user.Ref.toString()).subscribe(

        users => {
          this.data = [];
          
          users.forEach(s => {
            this.data.push([s.Name, s.Fullname, s.Role, s.Ref.toString() ]);
          });

          table.rows.add(this.data)
          table.draw();
        } 
      );
    }

    this.setEdit(false)
  }

  close() {
    this.setEdit(false); 
  }

}
