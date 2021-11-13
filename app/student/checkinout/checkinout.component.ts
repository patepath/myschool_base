import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Checkinout } from '../../school';
import { CheckinoutService } from '../../services/checkinout.service';

declare var $:any;

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-checkinout',
  templateUrl: './checkinout.component.html',
  styleUrls: ['./checkinout.component.css']
})
export class CheckinoutComponent implements OnInit, AfterViewInit {

	public edited: boolean;

	public dataTable: DataTable;
	public data: string[][];

	public checkinouts: Checkinout[] = [];
	public checkinout: Checkinout;

	public studentcode: string;
	public imagepath!: SafeResourceUrl;
	public img64: string;

	constructor(public checkinoutServ: CheckinoutService, private _sanitizer: DomSanitizer ) { 

		this.edited = false;

		this.checkinout = {
			Ref: 0,
			DateTime: "",
			StudentCode: "",
			StudentFullName: "",
			CamNo: "",
			Temperature: 0,
			CutPoint: 0,
			Status: 0,
		};

		this.studentcode="";

	}

	ngOnInit(): void {

		this.dataTable = {
			headerRow: ['วันที่-เวลา', 'รหัส', 'ชื่อ-นามสกุล' , 'อุณหภูมิ' ],
			footerRow: ['วันที่-เวลา', 'รหัส', 'ชื่อ-นามสกุล' , 'อุณหภูมิ' ],
			dataRows: [],
		};

		this.search();
	}

	ngAfterViewInit() {

		var self = this;

		$('#checkinoutTable').DataTable({
			"pagingType": "full_numbers",
			"lengthMenu": [
				[10, 25, 50, -1],
				[10, 25, 50, "All"]
			],
			"order": [[0, "desc"]], 
			responsive: true,
			language: {
				search: "_INPUT_",
				searchPlaceholder: "Search records",
			}
		});

		var table = $('#checkinoutTable').DataTable();

		table.on('mouseover', 'td', function() {
			$(this).css('cursor', 'pointer');
		});

		table.on('click', 'td', function() {
			let $tr = $(this).closest('tr');

			var data = table.row($tr).data();
			self.updateform(data[4]);
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

		this.setEdit(false);
	}

	setEdit(edit: boolean) {
		var frm = $('#checkinout-form');
		var view = $('#checkinout-view');

		if(edit) {
			frm.css('display','inline');
			view.css('display','none');

		} else {
			frm.css('display','none');
			view.css('display','inline');
		}
	}

	updateform(ref: string) {
		this.imagepath = '';

		this.checkinoutServ.getByRef(ref).subscribe(checkinout => { 
			this.checkinout = checkinout;

			this.checkinoutServ.getFaceImg(this.checkinout).subscribe(
				(imgb64) => {
					this.img64 = imgb64;
					this.imagepath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + this.img64);
				}
			);

		});

		this.setEdit(true);
	}

	search() {
		this.data = [];

		let curuser = JSON.parse(localStorage.getItem('currentUser'));

		this.checkinoutServ.getByCode(curuser.Name).subscribe(

			checkinouts => {
			var table = $('#checkinoutTable').DataTable();
			table.clear();

			if(checkinouts != null) {
				checkinouts.forEach(s => {
					this.data.push([s.DateTime, s.StudentCode, s.StudentFullName, s.Temperature.toString(), s.Ref.toString()]);
				});
			}

			table.rows.add(this.data)
			table.draw();
			}
		);
	}

	close() {
		this.setEdit(false);
	}


}
