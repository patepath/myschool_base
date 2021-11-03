import { Component, OnInit, AfterViewInit } from '@angular/core';

//import { CheckinoutFormComponent } from '../';
import { CheckinProfile} from '../../school';
import { CheckinprofileService } from '../../services/checkinprofile.service';


declare var $:any;

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-checkinprofile',
  templateUrl: './checkinprofile.component.html',
  styleUrls: ['./checkinprofile.component.css']
})
export class CheckinprofileComponent implements OnInit, AfterViewInit {

	public dataTable: DataTable;
	public data: string[][];

	public checkinprofiles: CheckinProfile[];
	public checkinprofile: CheckinProfile;
	public groups: string[];

	constructor(private checkinprofileServ: CheckinprofileService) { }

	ngOnInit(): void {

		this.dataTable = {
			headerRow: [ 'ปีการศึกษา', 'กลุ่ม', 'วันที่', 'สาย 1', 'คะแนน', 'สาย 2', 'คะแนน', 'สาย 3', 'คะแนน' ],
			footerRow: [ 'ปีการศึกษา', 'กลุ่ม', 'วันที่', 'สาย 1', 'คะแนน', 'สาย 2', 'คะแนน', 'สาย 3', 'คะแนน' ],
			dataRows: [ ]
		};

		this.checkinprofileServ.getGroup().subscribe(
			groups => this.groups = groups
		);

		this.initProfile();
		this.setEdit(false);
	}

	ngAfterViewInit() {
		var self = this;

		$('#profileTable').DataTable({
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

		var table = $('#profileTable').DataTable();

		table.on('mouseover', 'td', function() {
		$(this).css('cursor', 'pointer');
		});

		table.on('click', 'td', function() {
			let $tr = $(this).closest('tr');

			var data = table.row($tr).data();
			self.updateform( data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9] );
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

	initProfile() {
		this.checkinprofile = {
			YearEdu: 2564,
			DateIn: '',
			Group:	0,
			Name: '',
			Point1: -5,
			Point2: -5,
			Point3: -5,
			Time1: '08:00',
			Time2: '08:15',
			Time3: '08:30',
		}
	}

	setEdit(edit: boolean) {
		var frm = $('#profile_frm');
		var view = $('#profile_view');

		if(edit) {
			frm.css('display','inline');
			view.css('display','none');
		} else {
			frm.css('display','none');
			view.css('display','inline');
		}
	}

	updateform( d0: string, d1: string, d2:string, d3: string, d4: string, d5: string, d6: string, d7: string, d8: string, d9: string ) {
		this.checkinprofile.YearEdu = Number(d0);
		this.checkinprofile.Group = Number(d1);
		this.checkinprofile.DateIn = d2;
		this.checkinprofile.Time1 = d3;
		this.checkinprofile.Point1 = Number(d4);
		this.checkinprofile.Time2 = d5;
		this.checkinprofile.Point2 = Number(d6);
		this.checkinprofile.Time3 = d7;
		this.checkinprofile.Point3 = Number(d8);
		this.checkinprofile.Name = d9;

		this.setEdit(true);
	}

	search() {
		var table = $('#profileTable').DataTable();
		table.clear();
		table.draw();

		this.checkinprofileServ.get().subscribe(
			checkinprofiles => {
				this.data = [];
			
				checkinprofiles.forEach(s => {
					this.data.push([s.YearEdu.toString(), s.Group.toString(), s.DateIn, s.Time1, s.Point1.toString(), s.Time2, s.Point2.toString(), s.Time3, s.Point3.toString(), s.Name ]);
				});

				table.rows.add(this.data)
				table.draw();
			}
		);
	}

	insert() {
		this.setEdit(true);
	}

	save() {
		var table = $('#profileTable').DataTable();
		table.clear();
		table.draw();
		
		this.checkinprofileServ.save(this.checkinprofile).subscribe(
			checkinprofiles => {
				this.data = [];
			
				checkinprofiles.forEach(s => {
					this.data.push([s.YearEdu.toString(), s.Group.toString(), s.DateIn, s.Time1, s.Point1.toString(), s.Time2, s.Point2.toString(), s.Time3, s.Point3.toString(), s.Name ]);
				});

				table.rows.add(this.data)
				table.draw();
			}
		);

		this.setEdit(false);
	}

	delete() {
		if(confirm("ต้องการลบข้อมูลหรือไม่ ?")) {
			var table = $('#profileTable').DataTable();
			table.clear();
			table.draw();

			this.checkinprofileServ.delete(this.checkinprofile.YearEdu.toString(), this.checkinprofile.Group.toString(), this.checkinprofile.DateIn).subscribe(
				checkinprofiles => {
					this.data = [];
				
					checkinprofiles.forEach(s => {
						this.data.push([s.YearEdu.toString(), s.Group.toString(), s.DateIn, s.Time1, s.Point1.toString(), s.Time2, s.Point2.toString(), s.Time3, s.Point3.toString(), s.Name ]);
					});

					table.rows.add(this.data)
					table.draw();
				}
			);

			this.setEdit(false);
		}
	}

	close() {
		this.setEdit(false);
	}
}
