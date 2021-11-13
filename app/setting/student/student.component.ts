import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Student, Grade, Room } from '../../school';
import { ConfigService } from '../../services/config.service';
import { GradeService } from '../../services/grade.service';
import { RoomService } from '../../services/room.service';
import { StudentService } from '../../services/student.service';
import { UserService, User } from '../../services/user.service';

declare var $:any;

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, AfterViewInit {

	public files!: FileList;
	//public faceImg: string = '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'; 

	public dataTable: DataTable;
	public data: string[][];

	public edited: boolean;
	public imported: boolean;

	//public students: Student[] = []; 
	public student: Student;
	public ref: string;

	public grades: Grade[] = [];
	public grade_ref: number;

	public rooms: Room[] = [];
	public room_ref: number

	public user: User;

	public txtsearch: string;

	constructor(
		private router: Router,
		private config: ConfigService, 
		private gradeServ: GradeService, 
		private roomServ: RoomService, 
		private studentServ: StudentService,
		private userServ: UserService,
		public _sanitizer: DomSanitizer
	) { 

		this.edited = false;
		this.imported = false;
		this.grade_ref = 0;
		this.room_ref = 0;
		this.txtsearch = "";

		this.initStudent();
		this.data = [];
	}

	ngOnInit(): void {

		this.dataTable = {
			headerRow: ['ชั้น', 'ห้อง' , 'เลขที่', 'รหัส', 'ชื่อ-นามสกุล', 'โทรศัพท์' ],
			footerRow: ['ชั้น', 'ห้อง' , 'เลขที่', 'รหัส', 'ชื่อ-นามสกุล', 'โทรศัพท์' ],
			dataRows: [],
		};

		this.user = {
			Ref: 0,
			IdCard: '',
			Code: '',
			Name: '',
			Fullname: '',
			Password: '',
			Role: '',
		}

		this.gradeServ.get().subscribe(
			grades => this.grades = grades
		);

		this.roomServ.get().subscribe(
			rooms => this.rooms = rooms
		);

		this.txtsearch = "";

		var frm = $('#student_frm');
		frm.css('display', 'none');
	}

	ngAfterViewInit(){

		var self = this;

		$('#studentTable').DataTable({
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

		var table = $('#studentTable').DataTable();

		table.on('mouseover', 'td', function() {
			//let $tr = $(this).closest('tr');

			$(this).css('cursor', 'pointer');
		});

		table.on('click', 'td', function() {
			let $tr = $(this).closest('tr');

			var data = table.row($tr).data();
			//alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
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

		this.search();
	}

	setEdit(edit: boolean) {
		var frm = $('#student_frm');
		var view = $('#student_view');

		if(edit) {
			frm.css('display','inline');
			view.css('display','none');
		} else {
			frm.css('display','none');
			view.css('display','inline');
		}
	}

	updateform(ref: string) {
		$('#btnSave').prop('disabled', false);

		this.studentServ.getByRef(ref).subscribe(
			student => {
				this.student = student;
				this.room_ref = this.student.RoomNo;
				this.setEdit(true);

				this.studentServ.getFaceImg(student).subscribe( 
					img => {
						if(img === '\n') {
							this.student.FaceImg = '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';
						} else {
							this.student.FaceImg = img
						}
					}, 
					err => this.student.FaceImg = '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' );
			}
		);
	}

	initStudent() {
		this.student = {
			Ref: 0,
			Code: "",
			Rfid: "",
			IdCard: "",
			Title: 0,
			FirstName: "",
			LastName: "",
			NickName: "",
			Gender: 0,
			BirthDay: "",
			GradeNo: 0,
			GradeName: "",
			RoomNo: 0,
			RoomName: "",
			CheckinProfile: "",
			No: 0,
			Phone: "",
			LineId: "",
			Facebook: "",
			ParentRef1: 0,
			ParentTitle1: 0,
			ParentFirstName1: "",
			ParentLastName1: "",
			ParentPhone1: "",
			ParentRef2: 0,
			ParentTitle2: 0,
			ParentFirstName2: "",
			ParentLastName2: "",
			ParentPhone2: "",
			ParentRef3: 0,
			ParentTitle3: 0,
			ParentFirstName3: "",
			ParentLastName3: "",
			ParentPhone3: "",
			FaceImg: "",
		};
	}

	save() {
		this.student.RoomNo = this.room_ref;

		this.studentServ.save(this.student).subscribe(

			students => {
				var table = $('#studentTable').DataTable();
				table.clear();
				table.draw();

				this.data = [];

				students.forEach(s => {
					this.data.push([s.GradeName, s.RoomName, s.No.toString(), s.Code, s.FirstName + ' ' + s.LastName, s.Phone, s.Ref.toString()]);
				});

				table.rows.add(this.data)
				table.draw();
			}
		);

		$('#btnSave').prop('disabled', true);

		this.setEdit(false);
	}

	search() {
		var table = $('#studentTable').DataTable();
		table.clear();
		table.draw();
		this.data = [];
		this.rooms = [];

		if (this.grade_ref == 0) {
			this.room_ref = 0;

		} else {
			this.roomServ.getByGrade(this.grade_ref).subscribe(
				rooms => this.rooms = rooms
			);
		}

		this.studentServ.get(this.grade_ref, this.room_ref, this.txtsearch).subscribe(
			students => {
				this.data = [];

				students.forEach(s => {
					this.data.push([s.GradeName, s.RoomName, s.No.toString(), s.Code, s.FirstName + ' ' + s.LastName, s.Phone, s.Ref.toString()]);
				});

				table.rows.add(this.data)
				table.draw();
			}
		);
	}

	gradeChange() {
		this.rooms = [];

		this.roomServ.getByGrade(this.student.GradeNo).subscribe(
			rooms => this.rooms = rooms
		);
	}

	insert() {
		this.initStudent();
		this.setEdit(true);
	}

	register() {
		this.user.Ref = 0;
		this.user.Name = this.student.Code;
		this.user.Password = '123456789';
		this.user.Fullname =this.student.FirstName + ' ' + this.student.LastName
		this.user.Role = 'student';

		this.userServ.save(this.user).subscribe(
			users => {
				alert('Register Completed.')
			}
		);
	}

	delete() {
		if(confirm("ต้องการลบข้อมูลนักเรียนหรือไม่")) {
			this.studentServ.delete(this.student.Ref.toString()).subscribe(
				students => {
					var table = $('#studentTable').DataTable();
					table.clear();
					table.draw();

					this.data = [];

					students.forEach(s => {
						this.data.push([s.GradeName, s.RoomName, s.No.toString(), s.Code, s.FirstName + ' ' + s.LastName, s.Phone, s.Ref.toString()]);
					});

					table.rows.add(this.data)
					table.draw();
				}
			);

			this.setEdit(false);
		}
	}  

	getpic(img: string): string{
		if(img === '' || this.student.FaceImg === 'null') {
			img = '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'; 
		}

		console.log('img:' + this.student.FaceImg);

		return img;
	}

  getFile(event: any) {
    this.files = event.target.files; 
    var reader = new FileReader(); 

    reader.onload = this._handleReaderLoaded.bind(this); 
    reader.readAsBinaryString(this.files[0]); 
  }

  _handleReaderLoaded(readerEvt: any) { 
    var binaryString = readerEvt.target.result; 
    this.student.FaceImg = btoa(binaryString);  // Converting binary string data. 
  } 

}
