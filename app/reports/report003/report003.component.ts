import { Component, OnInit } from '@angular/core';
import { ajaxPrefilter } from 'jquery';

import { Opt, ReportCheckin002} from '../../school';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-report003',
  templateUrl: './report003.component.html',
  styleUrls: ['./report003.component.css']
})
export class Report003Component implements OnInit {

  public reports: ReportCheckin002[] = [];
  public reportDate: Date;
  public sqldate: string;

  public dds: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,18,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
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
  constructor(public reportServ: ReportsService) { 

    this.reportDate = new Date();
    this.sqldate = "";

  }


  ngOnInit(): void {

    this.sqldate = this.reportDate.getFullYear() + '-' + (this.reportDate.getMonth() +1) + '-' + this.reportDate.getDate();

    this.yyyy = this.reportDate.getFullYear() + 543;
    this.mm = this.reportDate.getMonth() +1;
    this.dd = this.reportDate.getDate();

    this.reportServ.getReportCheckin002(this.sqldate).subscribe(
      reports => this.reports = reports
    )

  }

  report() {
    
    this.sqldate = (this.yyyy-543) + '-' + this.mm + '-' + this.dd;

    //this.sqldate = this.reportDate.getFullYear() + '-' + (this.reportDate.getMonth() +1) + '-' + this.reportDate.getDate();

    this.reportServ.getReportCheckin002(this.sqldate).subscribe(
      reports => this.reports = reports
    )
  }

}
