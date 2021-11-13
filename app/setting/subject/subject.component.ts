import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Grade } from '../../school';
import { SubjectgroupService, SubjectGroup} from '../../services/subjectgroup.service';
import { SubjectService, Subject } from '../../services/subject.service';
import { GradeService } from '../../services/grade.service';

declare var $:any;

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, AfterViewInit {
	public dataTable: DataTable;
	public data: string[][];

  public subjectgroups: SubjectGroup[];
  public subjectgroup: SubjectGroup;
  public subjectgroup_ref: number;

  public subjects: Subject[];
  public subject: Subject;

  public grades: Grade[];
  public grade_ref: number;

  constructor(
    public subjectgroupServ: SubjectgroupService, 
    public subjectServ: SubjectService,
    public gradeServ: GradeService) {

    } 
  
  ngOnInit(): void {

		this.dataTable = {
			headerRow: ['หมวดวิชา', 'ระดับชั้น', 'รหัส', 'ชื่อวิชา' ],
			footerRow: ['หมวดวิชา', 'ระดับชั้น', 'รหัส', 'ชื่อวิชา' ],
			dataRows: [],
		};

    this.gradeServ.get().subscribe(grades => this.grades = grades);
    this.grade_ref = 0;

    this.initSubject();
    this.subjectgroupServ.get().subscribe(subjectgroups => { this.subjectgroups = subjectgroups});
  }

  ngAfterViewInit(){

		var self = this;

    $('#subjecttable').DataTable({
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

    var table = $('#subjecttable').DataTable();

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
      self.subject.GroupName = data[0];
      self.subject.GradeName = data[1];
      self.subject.Code = data[2];
      self.subject.Name = data[3];
      self.subject.Ref = Number(data[4]);
      self.subject.GroupRef = Number(data[5]);
      self.subject.GradeRef = Number(data[6]);
      self.setEdit(true);
    });

    self.setEdit(false);
    self.search();
  }

  initSubject() {
    this.subject = {
      Ref:  0,
      GroupRef: 0,
      GroupName: '',
      GradeRef: 0,
      GradeName: '',
      Code: '',
      Name: '',
    }
  }

  setEdit(isedit: boolean) {
    var frm = $('#subject-frm');
    var view = $('#subject-view');

    if(isedit) {
      frm.css('display', 'inline');
      view.css('display', 'none');

    } else {
      frm.css('display', 'none');
      view.css('display', 'inline');

    }

  }

  refreshTable() {
    var table = $('#subjecttable').DataTable();
		table.clear();
		table.draw();
		this.data = [];

    this.subjects.forEach(s => {
      this.data.push([s.GroupName, s.GradeName, s.Code, s.Name, s.Ref.toString(), s.GroupRef.toString(), s.GradeRef.toString()])
    })

    table.rows.add(this.data);
    table.draw();
  }

  search() {
    this.subjectServ.get().subscribe(subjects => {
      this.subjects = subjects;
      this.refreshTable();
    }); 
  }

  insert() {
    this.initSubject();
    this.setEdit(true);
  }

  save() {
    this.subjectServ.save(this.subject).subscribe(subjects => {
      this.subjects = subjects;
      this.refreshTable();
      this.setEdit(false);
    })
  }

  del() {
    if(confirm('ต้องการลบข้อมูล ?')) {

      this.subjectServ.del(this.subject).subscribe(subjects => {
        this.subjects = subjects;
        this.refreshTable();
        this.setEdit(false);
      })
    }
  }

}
