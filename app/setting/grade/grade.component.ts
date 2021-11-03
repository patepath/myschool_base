import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Grade } from '../../school';
import { GradeService } from '../../services/grade.service';

declare var $:any;

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit, AfterViewInit {

	public dataTable: DataTable;
	public data: string[][];
	
	public edited: boolean = false;
	public txtsearch: string = "";
	public grades: Grade[] = [];
	public grade: Grade;

	constructor(
		private gradeServ: GradeService
	) { 

		this.grade = {
			Ref: 0,
			OrderNo: 0,
			Name: "",
		}

	}

	ngOnInit(): void {

		this.dataTable = {
			headerRow: ['ลำดับ', 'ระดับชั้น' ],
			footerRow: ['ลำดับ', 'ระดับชั้น' ],
			dataRows: [],
		};

		this.gradeServ.get().subscribe(
			grades => this.grades = grades
		);

		this.setEdit(false);

	}

	ngAfterViewInit(){

		var self = this;

		$('#gradeTable').DataTable({
			"pagingType": "full_numbers",
			"lengthMenu": [
				[10, 25, 50, -1],
				[10, 25, 50, "All"]
			],
			responsive: true,
			language: {
				search: "_INPUT_",
				searchPlaceholder: "Search records",
			}
		});

		var table = $('#gradeTable').DataTable();

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

		this.search();
	}

	setEdit(edit: boolean) {
		var frm = $('#grade_frm');
		var view = $('#grade_view');

		if(edit) {
			frm.css('display','inline');
			view.css('display','none');
		} else {
			frm.css('display','none');
			view.css('display','inline');
		}

	}

	updateform(ref: string) {
		this.gradeServ.getByRef(ref).subscribe(
			grade => this.grade = grade
		);

		this.setEdit(true);
	}

	search() {
		var table = $('#gradeTable').DataTable();
		table.clear();
		table.draw();

		this.gradeServ.get().subscribe(
			grades => {
				this.data = [];
				grades.forEach(s => {
					this.data.push([s.OrderNo.toString(), s.Name, s.Ref.toString() ]);
				});

				table.rows.add(this.data)
				table.draw();
			}
		);
	}

	insert() {
		this.grade = {
			"Ref": 0,
			"OrderNo": 0,
			"Name": "",
		}

		this.edited = true;
	}

	save() {
		var table = $('#gradeTable').DataTable();
		table.clear();
		table.draw();

		this.gradeServ.save(this.grade).subscribe(
			grades => {
				this.data = [];
				grades.forEach(s => {
					this.data.push([s.OrderNo.toString(), s.Name, s.Ref.toString() ]);
				});

				table.rows.add(this.data)
				table.draw();
			}
		);

		this.setEdit(false);
	}

	close() {
		this.setEdit(false);
	}
}
