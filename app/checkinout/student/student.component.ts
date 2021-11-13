import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription, interval} from 'rxjs';

import { Checkinout } from '../../school';
import { CheckinoutService } from '../../services/checkinout.service';

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
	public edited: boolean;
	public imagepath!: SafeResourceUrl;
	public img64: string;

	public dataTable: DataTable;
	public data: string[][];

	public checkinouts: Checkinout[] = [];
	public checkinout: Checkinout;

	public studentcode: string;
	public updateView: Subscription;

	constructor(
		public checkinoutServ: CheckinoutService,
		private _sanitizer: DomSanitizer) { 

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

	}

	ngAfterViewInit() {

		var self = this;

		var table = $('#checkinoutTable').DataTable({
			dom: 'Bfrtip',
			buttons: [
				'copy', 'csv', 'excel', 'pdf', 'print'
			],
			responsive: true,
			language: {
				search: "_INPUT_",
				searchPlaceholder: "Search records",
			},
			order: [[0, 'desc']],
			pagingType: "full_numbers",
		});

		table.on('mouseover', 'tr', function() {
			let $tr = $(this).closest('tr');

			$(this).css('cursor', 'pointer');
		});

		table.on('click', 'td', function() {
			let $tr = $(this).closest('tr');

			var data = table.row($tr).data();
			self.updateform(data[4]);
		});


		// Delete a record
		table.on('click', '.remove', function(e) {
			let $tr = $(this).closest('tr');
			table.row($tr).remove().draw();
			e.preventDefault();
		});

		this.setEdit(false);
		this.search();
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

	setEdit(edit: boolean) {
		var frm = $('#checkin-frm');
		var view = $('#checkin-view');

		if(edit) {
			frm.css('display','inline');
			view.css('display','none');

		} else {
			frm.css('display','none');
			view.css('display','inline');
		}
	}

	search() {
		this.data = [];

		this.checkinoutServ.get().subscribe(
			checkinouts => {
				var table = $('#checkinoutTable').DataTable();
				table.clear();

				checkinouts.forEach(s => {
					this.data.push([s.DateTime, s.StudentCode, s.StudentFullName, s.Temperature.toString(), s.Ref.toString()]);
				});

				table.rows.add(this.data)
				table.draw();
			}
		);
	}


	cancel() {
		this.setEdit(false);
	}
}
