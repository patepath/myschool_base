import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Grade, Room } from '../../school';
import { GradeService } from '../../services/grade.service';
import { RoomService } from '../../services/room.service';
import { CheckinsubjectService, CheckinStudent} from '../../services/checkinsubject.service';

declare var $:any;

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-checkinreport',
  templateUrl: './checkinreport.component.html',
  styleUrls: ['./checkinreport.component.css']
})
export class CheckinreportComponent implements OnInit, AfterViewInit {
	public dataTable: DataTable;
	public data: string[][];

  public grades: Grade[];
  public grade_ref: number;

  public rooms: Room[];
  public room_ref: number;

  public checkdate: string;

  public checkinstudents: CheckinStudent[];

  constructor(
    public checkinsubjectServ: CheckinsubjectService,
    public gradeServ: GradeService, 
    public roomServ: RoomService) { 

  }

  ngOnInit(): void {
		this.dataTable = {
			headerRow: ['เลขที่', 'รหัส', 'ชื่อ-นามสกุล', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
			footerRow: ['เลขที่', 'รหัส', 'ชื่อ-นามสกุล', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ],
			dataRows: [],
		};

    this.gradeServ.get().subscribe(grades => this.grades = grades);
    this.grade_ref = 0;
    this.room_ref = 0;
  }

  ngAfterViewInit(): void {
		var self = this;

		var table = $('#reporttable').DataTable({
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
			pageLength: 50,
		});

		table.on('mouseover', 'tr', function() {
			let $tr = $(this).closest('tr');

			$(this).css('cursor', 'pointer');
		});

		table.on('click', 'td', function() {
			let $tr = $(this).closest('tr');

			var data = table.row($tr).data();
		});

  }

  refreshTable() {
    var table = $('#reporttable').DataTable();
		table.clear();
		table.draw();
		this.data = [];

    this.checkinstudents.forEach(s => {
      this.data.push([s.No.toString(), s.Code, s.FullName, s.P1, s.P2, s.P3, s.P4, s.P5, s.P6, s.P7, s.P8, s.P9, s.P10])
    })

    table.rows.add(this.data);
    table.draw();
  }
  dateChange() {
    this.grade_ref = 0;
    this.room_ref = 0;
    this.rooms = [];
  }

  gradeChage() {
    this.roomServ.getByGrade(this.grade_ref).subscribe(rooms => this.rooms = rooms);
    this.room_ref = 0;
  }

  search() {
    this.checkinsubjectServ.get(this.checkdate, this.room_ref.toString()).subscribe(s => {
      this.checkinstudents = s;
      this.refreshTable();
    })
  }
}
