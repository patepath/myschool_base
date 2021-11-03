import { Component, OnInit, AfterViewInit } from '@angular/core';

import { ConfigService} from '../../services/config.service';
import { Parent, Opt } from '../../school';
import { ParentService } from '../../services/parent.service';

declare var $:any;

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {

	public dataTable: DataTable;
	public data: string[][];

	public edited: boolean;

	public parents: Parent[];
	public parent: Parent;

	public titles: Opt[];

	constructor( private config: ConfigService, private parentServ: ParentService) { 

	}

	ngOnInit(): void {

		this.dataTable = {
			headerRow: ['บัตรประชาชน', 'ชื่อ-นามสกุล' ],
			footerRow: ['บัตรประชาชน', 'ชื่อ-นามสกุล' ],
			dataRows: [],
		};

		this.config.getTitle().subscribe(
			titles => this.titles = titles
		);

		this.parentServ.get().subscribe(
			parents => this.parents = parents
		);
		
		this.initparent();
	}

	ngAfterViewInit(){

		var self = this;

		$('#parentTable').DataTable({
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

		var table = $('#parentTable').DataTable();

		table.on('mouseover', 'tr', function() {
			//let $tr = $(this).closest('tr');

			$(this).css('cursor', 'pointer');
		});

		table.on('click', 'td', function() {
			let $tr = $(this).closest('tr');

			var data = table.row($tr).data();
			self.updateform(data[3]);
		});

		this.setEdit(false);
		this.search();
	}

	setEdit(edit: boolean) {

		var frm = $('#parent-form');
		var view = $('#parent-view');

		if(edit) {
			frm.css('display','inline');
			view.css('display','none');
		} else {
			frm.css('display','none');
			view.css('display','inline');
		}

	}

	initparent() {
		this.parent = {
			Ref: 0,
			IdCard: "",
			Title: 0,
			FirstName: "",
			LastName: "",
			Gender: 0,
			Addr1: "",
			Addr2: "",
			Addr3: "",
			ProvinceCode: 0,
			ProvinceName:"",
			ZipCode: "",
			Phone: "",
			LineId: "",
			Facebook: "",
		};
	}

	search() {
		var table = $('#parentTable').DataTable();
		table.clear();
		table.draw();

		this.parentServ.get().subscribe(
			parents => {
				this.data = [];

				parents.forEach(s => {
					this.data.push([s.IdCard, s.FirstName + ' ' + s.LastName, s.Phone, s.Ref.toString() ]);
				});

				table.rows.add(this.data)
				table.draw();
			}
		);
	}

	insert() {
		this.initparent();
		this.setEdit(true);
	}

	updateform(ref: string) {
		this.parentServ.getByRef(ref).subscribe(parent => {
			this.parent = parent;
			this.setEdit(true);
		});
	}

	save() {
		var table = $('#parentTable').DataTable();
		table.clear();
		table.draw();

		this.parentServ.save(this.parent).subscribe(
			parents => {
				this.data = [];

				parents.forEach(s => {
					this.data.push([s.IdCard, s.FirstName + ' ' + s.LastName, s.Phone, s.Ref.toString() ]);
				});

				table.rows.add(this.data)
				table.draw();

				this.setEdit(false);
			}
		);

	}

	delete() {
		if(confirm('ต้องการลบข้อมูลใช่หรือเไม่')) {
			var table = $('#parentTable').DataTable();
			table.clear();
			table.draw();

			this.parentServ.delete(this.parent.Ref.toString()).subscribe(
				parents => {
					this.data = [];

					parents.forEach(s => {
						this.data.push([s.IdCard, s.FirstName + ' ' + s.LastName, s.Phone, s.Ref.toString() ]);
					});

					table.rows.add(this.data)
					table.draw();

					this.setEdit(false);
				}
			);
		}
	}

	close() {
		this.setEdit(false);
	}
}
