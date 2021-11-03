import { Component, OnInit, AfterViewInit } from '@angular/core';

import {Grade } from '../../school';
import { SubjectgroupService, SubjectGroup } from '../../services/subjectgroup.service';

declare var $:any;

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-subjectgroup',
  templateUrl: './subjectgroup.component.html',
  styleUrls: ['./subjectgroup.component.css']
})
export class SubjectgroupComponent implements OnInit, AfterViewInit {

  public dataTable: DataTable;
	public data: string[][];

  public subjectgroup: SubjectGroup;

  public grades: Grade[];
  public grade_ref: number;

  constructor(public subjectgroupServ: SubjectgroupService,) { }

  ngOnInit(): void {
    this.dataTable = {
      headerRow: ['หมวดวิชา' ],
      footerRow: ['หมวดวิชา' ],
      dataRows: [ ]
    };

    this.initSubjectGroup();
    this.setEdit(false);
  }

  ngAfterViewInit(): void {
		var self = this;

    var table = $('#subjectgrouptable').DataTable({
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

    table.on('mouseover', 'tr', function() {
      $(this).css('cursor', 'pointer');
      $(this).css('font-weight', 'bold');
    });

    table.on('mouseout', 'tr', function() {
      $(this).css('font-weight', 'normal');
    });

    table.on('click', 'td', function() {
      let $tr = $(this).closest('tr');

			var data = table.row($tr).data();
      self.update(data[1], data[0])  
    });

    this.search();
  }

  initSubjectGroup() {

    this.subjectgroup = {
      Ref: 0,
      Name: '',
    }

  }
  
  setEdit(isedit: boolean) {

    var frm = $('#group_frm');
    var view = $('#group_view');

    if(isedit) {
      frm.css('display', 'inline');
      view.css('display', 'none');

    } else {
      frm.css('display', 'none');
      view.css('display', 'inline');
    }
  }

  insert() {
    this.initSubjectGroup();
    this.setEdit(true);
  }

  update(ref: string, name: string) {
    this.subjectgroup.Ref = Number(ref);
    this.subjectgroup.Name = name;
    this.setEdit(true);
  }

  del() {
    if(confirm('ต้องการลบข้อมูลหรือไม่?')) {
      var table = $('#subjectgrouptable').DataTable();
      table.clear();
      table.draw();
      this.data = [];

      this.subjectgroupServ.del(this.subjectgroup).subscribe(subjectgroups => {
        subjectgroups.forEach(s => {
          this.data.push([s.Name, s.Ref.toString()])
        })

        table.rows.add(this.data)
        table.draw();

        this.setEdit(false);
      });  
    }
  }

  search() {
    var table = $('#subjectgrouptable').DataTable();
		table.clear();
		table.draw();
		this.data = [];

    this.subjectgroupServ.get().subscribe(subjectgroups => {
      subjectgroups.forEach(s => {
        this.data.push([s.Name, s.Ref.toString()])
      })

      table.rows.add(this.data)
      table.draw();
    });
  }
  
  save() {
    var table = $('#subjectgrouptable').DataTable();
		table.clear();
		table.draw();
		this.data = [];

    this.subjectgroupServ.save(this.subjectgroup).subscribe(subjectgroups => {
      subjectgroups.forEach(s => {
        this.data.push([s.Name, s.Ref.toString()])
      })

      table.rows.add(this.data)
      table.draw();

      this.setEdit(false);
    });  
  }

}
