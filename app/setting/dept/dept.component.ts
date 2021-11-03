import { TypeScriptEmitter } from '@angular/compiler';
import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Department } from '../../school';
import { DeptService } from '../../services/dept.service';

declare var $:any;

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent implements OnInit, AfterViewInit {

	public dataTable: DataTable;
	public data: string[][];

  public dept: Department;

  constructor(private deptServ: DeptService) { }

  ngOnInit(): void {
    this.initDept();

		this.dataTable = {
			headerRow: [ 'รหัส', 'ชื่อแผนก' ],
			footerRow: [ 'รหัส', 'ชื่อแผนก' ],
			dataRows: [ ]
		};
  }

  ngAfterViewInit(): void {
    var self = this;

    $('#deptTable').DataTable({
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

    var table = $('#deptTable').DataTable();

		table.on('mouseover', 'td', function() {
		$(this).css('cursor', 'pointer');
		});

		table.on('click', 'td', function() {
			let $tr = $(this).closest('tr');

			var data = table.row($tr).data();
			self.updateform(data[2], data[0], data[1]);
		});

    this.setEdit(false);
    this.search();
  }

	setEdit(edit: boolean) {
		var frm = $('#dept_form');
		var view = $('#dept_view');

		if(edit) {
			frm.css('display','inline');
			view.css('display','none');
		} else {
			frm.css('display','none');
			view.css('display','inline');
		}
	}

  initDept() {
    this.dept = {
      Ref: 0,
      Code: '',
      Name: '',
    };
  }

  search() {
		var table = $('#deptTable').DataTable();
		table.clear();
		table.draw();

    this.deptServ.get().subscribe(depts => {
				this.data = [];
			
				depts.forEach(s => {
					this.data.push([s.Code, s.Name]);
				});

				table.rows.add(this.data)
				table.draw();
    });    
  }

  insert() {
    this.initDept();
    this.setEdit(true);
  }

  save() {
		var table = $('#deptTable').DataTable();
		table.clear();
		table.draw();

    this.deptServ.save(this.dept).subscribe(depts => {
				this.data = [];
			
				depts.forEach(s => {
					this.data.push([s.Code, s.Name, s.Ref.toString()]);
				});

				table.rows.add(this.data)
				table.draw();
    });    

    this.setEdit(false);
  }

  close() {
    this.setEdit(false);
  }

  delete() {

    if(confirm("ต้องการลบข้อมูลแผนกใช่หรือไม่")) {

      var table = $('#deptTable').DataTable();
      table.clear();
      table.draw();

      this.deptServ.delete(this.dept.Ref.toString()).subscribe(depts => {
          this.data = [];
        
          depts.forEach(s => {
            this.data.push([s.Code, s.Name, s.Ref.toString()]);
          });

          table.rows.add(this.data)
          table.draw();

          this.setEdit(false);
      });    
    }

  }

  updateform(ref: string, code, name) {
    this.dept.Ref = Number(ref);
    this.dept.Code = code;
    this.dept.Name = name;
    this.setEdit(true);
  }

}
