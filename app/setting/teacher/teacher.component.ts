import { Component, OnInit } from '@angular/core';
import { Teacher, Grade, Room, Department } from '../../school';
import { GradeService } from '../../services/grade.service';
import { RoomService } from '../../services/room.service';
import { TeacherService } from '../../services/teacher.service';
import { DeptService } from '../../services/dept.service';

declare var $:any;

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  public dataTable: DataTable;
	public data: string[][];

  private _edited: boolean;
  private _grades: Grade[];
  private _rooms: Room[];

  public grade_ref: number;
  public room_ref: number;

  public depts: Department[];
  public dept_ref: number;

  public teacher: Teacher;

  constructor(
    private teacherServ: TeacherService, 
    private gradeServ: GradeService,
    private roomServ: RoomService,
    private deptServ: DeptService) { 

  }

  ngOnInit(): void {

    this.dataTable = {
      headerRow: ['แผนก', 'ประจำชั้น', 'ห้อง', 'รหัส', 'ชื่อ-นามสกุล', 'โทรศัพท์' ],
      footerRow: ['แผนก', 'ประจำชั้น', 'ห้อง', 'รหัส', 'ชื่อ-นามสกุล', 'โทรศัพท์' ],
      dataRows: [ ]
    };

    this.deptServ.get().subscribe(depts => this.depts = depts);

    this.gradeServ.get().subscribe(
      grades => this._grades = grades
    );

    this.initTeacher();
    this.setEdit(false);

  }

  ngAfterViewInit(){

		var self = this;

    $('#teacherTable').DataTable({
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

    var table = $('#teacherTable').DataTable();

    table.on('mouseover', 'td', function() {
      $(this).css('cursor', 'pointer');
    });

    table.on('click', 'td', function() {
      let $tr = $(this).closest('tr');

			var data = table.row($tr).data();
			self.updateform(data[6]);
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

    this.grade_ref = 0;
    this.search();
  }

  get isEdited(): boolean {
    return this._edited;
  }

  get getGrades(): Grade[] {
    return this._grades;
  }

  get getRooms(): Room[] {
    return this._rooms;
  }

  initTeacher() {
    this.teacher = {
      Ref: 0,
      DeptRef: 0,
      DeptName: '',
      GradeRef: 0,
      GradeName: '',
      RoomRef: 0,
      RoomName: '',
      Code: '',
      FirstName: '',
      LastName: '',
      Phone: '',
    }
  }

	setEdit(edit: boolean) {
		var frm = $('#teacher_frm');
		var view = $('#teacher_view');

		if(edit) {
			frm.css('display','inline');
			view.css('display','none');

		} else {
			frm.css('display','none');
			view.css('display','inline');
		}
	}

  updateform(ref: string) {

    this.teacherServ.getByRef(ref).subscribe(
      teacher => {
        this.teacher = teacher;
        this.grade_ref = teacher.GradeRef;

        this.gradeChange();
      }
    );      

    this.setEdit(true);
  }

  gradeChange() {
    this.roomServ.getByGrade(this.grade_ref).subscribe(
      rooms => {
        this._rooms = rooms;

        if(this.grade_ref != 0) {
          this.room_ref = this.teacher.RoomRef;
        } else {
          this.room_ref = 0;
        }
      }
    );
  }

  search() {
    var table = $('#teacherTable').DataTable();
    table.clear();
    table.draw();

    this.teacherServ.get().subscribe(
      teachers => {

        this.data = [];
        
				teachers.forEach(s => {
          let dept_name = s.DeptName;
          let grade = s.GradeName;
          let room = s.RoomName;

          if(dept_name === '') {
            dept_name = '- ไม่ระบุ -'
          }

          if(grade === '') {
            grade = '- ไม่ระบุ -';
          }

          if(room === '') {
            room = '- ไม่ระบุ -';
          }

					this.data.push([dept_name, grade, room, s.Code, s.FirstName + ' ' + s.LastName, s.Phone, s.Ref.toString() ]);
				});

				table.rows.add(this.data)
				table.draw();
      }
    );
  }

  searchByGrade() {
    if(this.grade_ref === 0) {
      this.search();

    } else {
      var table = $('#teacherTable').DataTable();
      table.clear();
      table.draw();

      this.teacherServ.getByGrade(this.grade_ref).subscribe(
        teachers => {

          this.data = [];
          
          teachers.forEach(s => {
            let dept_name = s.DeptName;
            let grade = s.GradeName;
            let room = s.RoomName;

            if(dept_name === '') {
              dept_name = '- ไม่ระบุ -'
            }

            if(grade === '') {
              grade = '- ไม่ระบุ -';
            }

            if(room === '') {
              room = '- ไม่ระบุ -';
            }

            this.data.push([dept_name, grade, room, s.Code, s.FirstName + ' ' + s.LastName, s.Phone, s.Ref.toString() ]);
          });

          table.rows.add(this.data)
          table.draw();
        }
      );
    }
  }

  insert() {
    this.initTeacher();
    this.grade_ref = 0;
    this.room_ref = 0;
    this.setEdit(true);
  }

  save() {

    this.teacher.GradeRef = Number(this.grade_ref);
    this.teacher.RoomRef = Number(this.room_ref);

    console.log(this.teacher);

    this.teacherServ.save(this.teacher).subscribe(

      teachers => {

        this.data = [];
        
				var table = $('#teacherTable').DataTable();
				table.clear();
        table.draw();

				teachers.forEach(s => {
          let dept_name = s.DeptName;
          let grade = s.GradeName;
          let room = s.RoomName;

          if(dept_name === '') {
            dept_name = '- ไม่ระบุ -'
          }

          if(grade === '') {
            grade = '- ไม่ระบุ -';
          }

          if(room === '') {
            room = '- ไม่ระบุ -';
          }

					this.data.push([dept_name, grade, room, s.Code, s.FirstName + ' ' + s.LastName, s.Phone, s.Ref.toString() ]);
				});

				table.rows.add(this.data)
				table.draw();
      } 
    )

    this.room_ref = 0;
    this.setEdit(false);
  }

  delete() {
    if(confirm("ต้องการลข้อมูลอาจารย์หรือไม่ ?")) {
      this.teacherServ.delete(this.teacher.Ref.toString(), this.teacher.GradeRef.toString()).subscribe(
        teachers => {
          this.data = [];
          
          var table = $('#teacherTable').DataTable();
          table.clear();
          table.draw();

          teachers.forEach(s => {
            this.data.push([s.GradeName, s.RoomName, s.Code, s.FirstName + ' ' + s.LastName, s.Phone, s.Ref.toString() ]);
          });

          table.rows.add(this.data)
          table.draw();
        }
      );
    }

    this.setEdit(false);

  }

  close() {
    this.room_ref = 0;
    this.setEdit(false);
  }

}
