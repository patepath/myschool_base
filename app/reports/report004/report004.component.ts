import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Report004, Grade, Room, Opt } from '../../school';
import { GradeService } from '../../services/grade.service';
import { RoomService } from '../../services/room.service';
import { ReportsService } from '../../services/reports.service';
declare var $:any;

@Component({
  selector: 'app-report004',
  templateUrl: './report004.component.html',
  styleUrls: ['./report004.component.css']
})
export class Report004Component implements OnInit {

  public  checkintype1= 'ปกติ';
  public  checkintype2= 'มาสายไม่ร่วมกิจกรรมหน้าเสาธง';
  public  checkintype3= 'ขาดเรียน';
  public  checkintype4= 'ไปทำกิจกรรม';

  public reportdate: Date; 

  public reports: Report004[] = [];
  public report: Report004;

  public grades: Grade[] = [];
  public grade: Grade;

  public rooms: Room[] = [];
  public room: Room;

  public dds: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  public dd: number;

  public mms: Opt[] = [
    { Value: 1, Name: 'มกราคม'},
    { Value: 2, Name: 'กุมภาพันธ์'},
    { Value: 3, Name: 'มีนาคม'},
    { Value: 4, Name: 'เมษายน'},
    { Value: 5, Name: 'พฤษภาคม'},
    { Value: 6, Name: 'มิถุนายน'},
    { Value: 7, Name: 'กรกฏาคม'},
    { Value: 8, Name: 'สิงหาคม'},
    { Value: 9, Name: 'กันยายน'},
    { Value: 10, Name: 'ตุลาคม'},
    { Value: 11, Name: 'พฤศจิกายน'},
    { Value: 12, Name: 'ธันวาคม'},
  ];

  public mm: number;

  public yyyys: number[] = [2564, 2563, 2562]
  public yyyy: number;

  public behaviors: Opt[] = [
    { Value: 102, Name: this.checkintype1},
    { Value: 51, Name: this.checkintype2},
    { Value: 52, Name: this.checkintype3},
    { Value: 103, Name: this.checkintype4},
  ];

  public behavior: Opt;

  constructor(
    public gradeServ: GradeService,
    public roomServ: RoomService,
    public reportServ: ReportsService,
		public _sanitizer: DomSanitizer

  ) { 

    this.reportdate = new Date();

    this.yyyy = this.reportdate.getFullYear() + 543;
    this.mm = this.reportdate.getMonth() + 1;
    this.dd = this.reportdate.getDate();

    this.report = {
      No: "",
      Code: "",
      Grade: "",
      Room: "",
      FullName: "",
      ImgB64: "",
      Created: "",
      Behavior_ref: 0,
    };

    this.grade= {
      Ref: 0,
      OrderNo: 0,
      Name: "",
    };

    this.room = {
      Ref: 0,
      Name: "",
      GradeRef: 0,
      GradeOrder: 0,
      GradeName: "",
    };

  }

  ngOnInit(): void {

		this.gradeServ.get().subscribe(
			grades => this.grades = grades
		);

		this.roomServ.get().subscribe(
			rooms => this.rooms = rooms
		);

  }

  search() {
    //var sqldate = this.reportdate.getFullYear() + "-" + (this.reportdate.getMonth()+1) + "-" + this.reportdate.getDate();
    var sqldate = (Number(this.yyyy)-543) + '-' + this.mm + '-' + this.dd;

    this.reportServ.getReport004(sqldate, this.room.Ref.toString()).subscribe(
      reports => this.reports = reports
    );
  }

	searchRoom() {

		if (this.grade.Ref == 0) {
			this.room.Ref= 0;

		} else {
			this.roomServ.getByGrade(this.grade.Ref).subscribe(
				rooms => this.rooms = rooms
			);
		}

	}

  getpic(img: string): string{

    if(img === '') {
      img = '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'; 
    }

    return img;
  }

  save(created: string, id: string) {
    
    var e = document.getElementById(id) as HTMLSelectElement;
    var sel = e.selectedIndex;
    var opt = e.options[sel];

    var rptdate = (Number(this.yyyy)-543) + '-' + this.mm + '-' + this.dd;

    switch(opt.value) {

      case this.checkintype1: {
        this.reportServ.updateReport004(rptdate, id, 102, created, 0).subscribe(
          msg => console.log(msg),
          err => console.log(err)
        );
        break;
      }

      case this.checkintype2: {
        this.reportServ.updateReport004(rptdate, id, 51, created, -5).subscribe(
          msg => console.log(msg),
          err => console.log(err)
        );
        break;
      }
      
      case this.checkintype3: {
        this.reportServ.updateReport004(rptdate, id, 52, created, -5).subscribe(
          msg => console.log(msg),
          err => console.log(err)
        );
        break;
      }

      case this.checkintype4: {
        this.reportServ.updateReport004(rptdate, id, 103, created, 0).subscribe(
          msg => console.log(msg),
          err => console.log(err)
        );
        break;
      }

    } 

    $('#myModal').modal('show');
  }

}
