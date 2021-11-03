import { Component, OnInit, AfterViewInit } from '@angular/core';

import {RegisterService } from '../../services/register.service';

declare var $:any;

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit, AfterViewInit {

	public edited: boolean;

  public dataTable: DataTable;
	public data: string[][];

  constructor(private regServ: RegisterService) { }

  ngOnInit(): void {
    this.dataTable = {
      headerRow: [ 'ระดับชั้น', 'ห้อง', 'รหัส', 'ชื่อ', 'นามสกุล', 'บัตรประชาชน' ],
      footerRow: [ 'ระดับชั้น', 'ห้อง', 'รหัส', 'ชื่อ', 'นามสกุล', 'บัตรประชาชน' ],
      dataRows: [ ]
    };
  }

  ngAfterViewInit(){

		var self = this;

    $('#regtable').DataTable({
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

    var table = $('#regtable').DataTable();

    table.on('mouseover', 'tr', function() {
      $(this).css('cursor', 'pointer');
      $(this).css('font-weight', 'bolder');
    });

    table.on('mouseout', 'tr', function() {
      $(this).css('font-weight', 'normal');
    });

    table.on('click', 'td', function() {
      let $tr = $(this).closest('tr');

			var data = table.row($tr).data();
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

    self.search();
  }

  search() {
		this.data = [];

		this.regServ.get().subscribe(

			checkinouts => {
			var table = $('#regtable').DataTable();
			table.clear();

			checkinouts.forEach(s => {
				this.data.push([s.Grade, s.Room, s.Code, s.FirstName, s.LastName, s.IdCard, s.Ref.toString()]);
			});

			table.rows.add(this.data)
			table.draw();
			}
		);
  }


}
