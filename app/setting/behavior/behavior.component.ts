import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { BehavioralPoint, Opt } from '../../school';
import { BehavioralPointService } from '../../services/behavioral-point.service';

declare var $:any;

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-behavior',
  templateUrl: './behavior.component.html',
  styleUrls: ['./behavior.component.css']
})
export class BehaviorComponent implements OnInit, AfterViewInit {

	public dataTable: DataTable;
	public data: string[][];

	public edited: boolean;
	public isupdate: boolean;

	public behaviorals: BehavioralPoint[];
	public behavior: BehavioralPoint;
	public groups: Opt[];
	public group: Opt;

	public isnewgroup: boolean;
	public group_no: number;
	public group_name: string;

	constructor(private behavioralServ: BehavioralPointService, private changeDetectorRefs: ChangeDetectorRef) { }

	ngOnInit(): void {
		this.isupdate = false;
		this.isnewgroup = false;

		this.dataTable = {
			headerRow: [ 'กลุ่มที่', 'ประเภท', 'ข้อที่', 'พฤติกรรม', 'หักคะแนน' ],
			footerRow: [ 'กลุ่มที่', 'ประเภท', 'ข้อที่', 'พฤติกรรม', 'หักคะแนน' ],
			dataRows: [ ]
		};

		this.initGroupComboBox();
		this.initBehavior();
		this.setEdit(false);
	}

	ngAfterViewInit(){
		var self = this;

		$('#behaviorTable').DataTable({
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

		var table = $('#behaviorTable').DataTable();

		table.on('mouseover', 'td', function() {
		$(this).css('cursor', 'pointer');
		});

		table.on('click', 'td', function() {
			let $tr = $(this).closest('tr');

			var data = table.row($tr).data();
			self.updateform(data[5]);
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

	setEdit(edit: boolean) {
		var frm = $('#behavior_frm');
		var view = $('#behavior_view');

		if(edit) {
			frm.css('display','inline');
			view.css('display','none');
		} else {
			frm.css('display','none');
			view.css('display','inline');
		}
	}

	updateform(ref: string) {
		this.isupdate = true;
		this.isnewgroup = false;

		this.behavioralServ.getByRef(ref).subscribe(
			behavior => this.behavior = behavior
		);

		this.setEdit(true);
	}

	initBehavior() {
		this.behavior = {
			Ref: 0,
			GroupNo: 1,
			GroupName: "",
			TopicNo: 1,
			TopicName: "",
			Point: 5
		}
	}

	initGroupComboBox() {
		this.behavioralServ.getGroup().subscribe(
			groups => {
				this.groups = groups;
			}
		);
	}

	insert(): void {
		this.isupdate = false;
		this.isnewgroup = false;

		//this.initBehavior();
		this.behavior.GroupNo = this.group.Value;
		this.behavior.GroupName = this.group.Name;
		this.behavior.TopicNo = 0;

		this.setEdit(true);
	}

	changeGroupName() {
		this.behavior.GroupNo = this.group.Value;
		this.behavior.GroupName = this.group.Name;
	}

	insertgroup() {
		this.behavior.GroupNo = 0;
		this.behavior.GroupName = '';
		this.isnewgroup = true;
	}

	backtoupdate() {
		this.behavior.GroupNo = this.group.Value;
		this.behavior.GroupName = this.group.Name;
		this.isnewgroup = false;
	}

	search() {
		var table = $('#behaviorTable').DataTable();
		table.clear();
		table.draw();

		this.behavioralServ.getByGroup(this.group.Value.toString()).subscribe(
			behaviorals => {
				this.data = [];
			
				behaviorals.forEach(s => {
					this.data.push([s.GroupNo.toString(), s.GroupName, s.TopicNo.toString(), s.TopicName, s.Point.toString(), s.Ref.toString() ]);
				});

				table.rows.add(this.data)
				table.draw();
			}
		);
	}

	save() {
		var table = $('#behaviorTable').DataTable();
		table.clear();
		table.draw();

		this.behavioralServ.save(this.behavior).subscribe(
			behaviorals => {
				this.data = [];
			
				behaviorals.forEach(s => {
					this.data.push([s.GroupNo.toString(), s.GroupName, s.TopicNo.toString(), s.TopicName, s.Point.toString(), s.Ref.toString() ]);
				});

				table.rows.add(this.data);
				table.draw();

				if(this.behavior.GroupNo == 0) {
					this.initGroupComboBox();
				}
			}
		);

		this.setEdit(false);
	}

	remove() {
		if(confirm("ต้องการลบข้อมูลหรือไม่")) {
			var table = $('#behaviorTable').DataTable();
			table.clear();
			table.draw();

			this.behavioralServ.delete(this.behavior).subscribe(
				behaviorals => {
					this.data = [];
					this.initGroupComboBox();
					this.group = null;
				
					if(behaviorals != null) {
						behaviorals.forEach(s => {
							this.data.push([s.GroupNo.toString(), s.GroupName, s.TopicNo.toString(), s.TopicName, s.Point.toString(), s.Ref.toString() ]);
						});
					}

					table.rows.add(this.data);
					table.draw();
				}
			);
		}

		this.setEdit(false);
	}

	close() {
		this.setEdit(false);
	}

}
