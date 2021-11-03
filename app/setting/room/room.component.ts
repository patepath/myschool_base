import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Room, Grade } from '../../school';
import { RoomService } from '../../services/room.service';
import { GradeService } from '../../services/grade.service';

declare var $:any;

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit,AfterViewInit {

	public dataTable: DataTable;
	public data: string[][];

	public edited: boolean = false;

	public grades: Grade[] = [];
	public grade: Grade;

	public classrooms: Room[] = [];
	public classroom: Room;

	public roomName: string;

	constructor(
			private roomServ: RoomService,
			private gradeServ: GradeService
	) { 

		this.grade = {
		Ref: 0,
		OrderNo: 0,
		Name: "",
		};

		this.classroom = {
		Ref: 0,
		Name: "",
		GradeRef: 0,
		GradeOrder: 0,
		GradeName: "",
		};

	}

	ngOnInit(): void {

		this.dataTable = {
			headerRow: ['ชั้น', 'ห้อง' ],
			footerRow: ['ชั้น', 'ห้อง' ],
			dataRows: [],
		};

		this.gradeServ.get().subscribe(
			grades => this.grades = grades
		);

		this.setEdit(false);
		//this.search();

	}

	ngAfterViewInit(){

		var self = this;

		$('#roomTable').DataTable({
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

		var table = $('#roomTable').DataTable();

		table.on('mouseover', 'tr', function() {
			//let $tr = $(this).closest('tr');

			$(this).css('cursor', 'pointer');
		});

		table.on('click', 'td', function() {
			let $tr = $(this).closest('tr');

			var data = table.row($tr).data();
			self.updateform(data[2]);
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
	}

	setEdit(edit: boolean) {
		var frm = $('#room_frm');
		var view = $('#room_view');

		if(edit) {
			frm.css('display','inline');
			view.css('display','none');
		} else {
			frm.css('display','none');
			view.css('display','inline');
		}
	}

	updateform(ref: string) {

		this.roomServ.getByRef(ref).subscribe(
			room => {
				this.classroom = room;
			}
		);

		this.setEdit(true);
	}

	changeGrade() {
		this.data = [];

		this.roomServ.getByGrade(this.grade.Ref).subscribe(
			rooms => {
				var table = $('#roomTable').DataTable();
				table.clear();

				rooms.forEach(s => {
					this.data.push([s.GradeName, s.Name, s.Ref.toString()]);
				});

				table.rows.add(this.data)
				table.draw();
			}
		);
	}

	search() {

		this.data = [];


		this.roomServ.get().subscribe(

			rooms => {

				var table = $('#roomTable').DataTable();
				table.clear();

				rooms.forEach(s => {
					this.data.push([s.GradeName, s.Name, s.Ref.toString()]);
				});

				table.rows.add(this.data)
				table.draw();
			}
		);

	}

	save() {
		this.setEdit(false);
	}

	close() {
		this.setEdit(false);
	}

	insert() {
		this.classroom = {
			Ref: 0,
			GradeRef: 0,
			GradeOrder: 0,
			GradeName: "",
			Name: "",
		};

		this.edited = true;
	}


	clickRow(classroom: Room) {
		this.classroom = classroom;
		this.edited = true;
	}

	handleClassrooms(classrooms: Room[]) {
		this.edited = false;

		if(classrooms.length != 0) {
			this.classrooms = classrooms;
		}
	}


}
