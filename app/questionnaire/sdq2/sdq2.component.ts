import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Student,SDQ } from '../../school';
import { StudentService } from '../../services/student.service';
import { SdqService } from '../../services/sdq.service';

declare var $:any;

@Component({
  selector: 'app-sdq2',
  templateUrl: './sdq2.component.html',
  styleUrls: ['./sdq2.component.css']
})
export class Sdq2Component implements OnInit {
  
  public sdq: SDQ;

  public code: string;
  public no: number;
  public fullname: string;
  public grade: string;
  public room: string;

  public topic1_1: number = 0;
  public topic1_2: number = 0;
  public topic1_3: number = 0;
  public topic1_4: number = 0;
  public topic1_5: number = 0;
  public topic1_6: number = 0;
  public topic1_7: number = 0;
  public topic1_8: number = 0;
  public topic1_9: number = 0;
  public topic1_10: number = 0;
  public topic1_11: number = 0;
  public topic1_12: number = 0;
  public topic1_13: number = 0;
  public topic1_14: number = 0;
  public topic1_15: number = 0;
  public topic1_16: number = 0;
  public topic1_17: number = 0;
  public topic1_18: number = 0;
  public topic1_19: number = 0;
  public topic1_20: number = 0;
  public topic1_21: number = 0;
  public topic1_22: number = 0;
  public topic1_23: number = 0;
  public topic1_24: number = 0;
  public topic1_25: number = 0;

  public topic2: number=0;
  public topic2_1: number=0;
  public topic2_2: number=0;
  public topic2_3: number=0;
  public topic2_4: number=0;
  public topic2_5: number=0;
  public topic2_6: number=0;
  public topic2_7: number=0;

  public issubmit: boolean;

  constructor(private router: Router, private studentServ: StudentService,  private sdqServ: SdqService) { 
  }

  ngOnInit(): void {
    this.sdq = {
      Code: '',
      Type: 2,
      Topic1_1: 0,  
      Topic1_2: 0,  
      Topic1_3: 0,  
      Topic1_4: 0,  
      Topic1_5: 0,  
      Topic1_6: 0,  
      Topic1_7: 0,  
      Topic1_8: 0,  
      Topic1_9: 0,  
      Topic1_10: 0,  
      Topic1_11: 0,  
      Topic1_12: 0,  
      Topic1_13: 0,  
      Topic1_14: 0,  
      Topic1_15: 0,  
      Topic1_16: 0,  
      Topic1_17: 0,  
      Topic1_18: 0,  
      Topic1_19: 0,  
      Topic1_20: 0,  
      Topic1_21: 0,  
      Topic1_22: 0,  
      Topic1_23: 0,  
      Topic1_24: 0,  
      Topic1_25: 0,  
      Topic2: 0,
      Topic2_1: 0,
      Topic2_2: 0,
      Topic2_3: 0,
      Topic2_4: 0,
      Topic2_5: 0,
      Topic2_6: 0,
      Topic2_7: 0,
      Topic3_1: 0,
      Topic3_2: 0,
      Topic3_3: 0,
      Topic3_4: 0,
      Topic3_5: 0,
      Topic3_6: 0,
      Topic3_7: 0,
      Topic3_8: 0,
      Topic3_9: 0,
      Topic3_10: 0,
      Topic3_11: 0,
      Topic3_12: 0,
      Topic3_13: 0,
      Topic3_14: 0,
      Topic3_15: 0,
      Topic3_16: 0,
      Topic3_17: 0,
      Topic3_18: 0,
      Topic3_19: 0,
      Topic3_20: 0,
      Topic3_21: 0,
      Topic3_22: 0,
      Topic3_23: 0,
      Topic3_24: 0,
      Topic3_25: 0,
      Topic3_26: 0,
      Topic3_27: 0,
      Topic3_28: 0,
      Topic3_29: 0,
      Topic3_30: 0,
      Topic3_31: 0,
      Topic3_32: 0,
      Topic3_33: 0,
      Topic3_34: 0,
      Topic3_35: 0,
      Topic3_36: 0,
      Topic3_37: 0,
      Topic3_38: 0,
      Topic3_39: 0,
      Topic3_40: 0,
      Topic3_41: 0,
      Topic3_42: 0,
      Topic3_43: 0,
      Topic3_44: 0,
      Topic3_45: 0,
      Topic3_46: 0,
      Topic3_47: 0,
      Topic3_48: 0,
      Topic3_49: 0,
      Topic3_50: 0,
      Topic3_51: 0,
      Topic3_52: 0,
    }
  }

  codechange() {
    this.issubmit = false;

    if(this.sdq.Code.length >= 5) {
      this.code = this.sdq.Code;

      this.studentServ.getByCode(this.sdq.Code).subscribe(
        student => {
          this.fullname = student.FirstName + ' ' + student.LastName
          this.no = student.No;
          this.grade = student.GradeName;
          this.room = student.RoomName;

          this.sdqServ.getbycode(this.sdq.Code, 2).subscribe(
            sdq => {
              this.sdq = sdq;
              this.sdq.Code = this.code;
            }
          );
        },
        () => {
            this.fullname = '';
            this.no = 0;
            this.grade = ''; 
            this.room = '';
        }
      )

    } else {
        this.fullname = '';
        this.no = 0;
        this.grade = ''; 
        this.room = '';
    }    
  }

  submitform() {
    this.sdq.Type = 2;

    this.sdqServ.save(this.sdq).subscribe(
     
     msg => {
       if(msg.Result) {
        var point1 = this.sdq.Topic1_1 + this.sdq.Topic1_2;

        point1 = point1 + this.sdq.Topic1_3;
        point1 = point1 + this.sdq.Topic1_4;
        point1 = point1 + this.sdq.Topic1_5;
        point1 = point1 + this.sdq.Topic1_6;
        point1 = point1 + this.sdq.Topic1_7;
        point1 = point1 + this.sdq.Topic1_8;
        point1 = point1 + this.sdq.Topic1_9;
        point1 = point1 + this.sdq.Topic1_10;
        point1 = point1 + this.sdq.Topic1_12;
        point1 = point1 + this.sdq.Topic1_13;
        point1 = point1 + this.sdq.Topic1_14;
        point1 = point1 + this.sdq.Topic1_15;
        point1 = point1 + this.sdq.Topic1_16;
        point1 = point1 + this.sdq.Topic1_17;
        point1 = point1 + this.sdq.Topic1_18;
        point1 = point1 + this.sdq.Topic1_19;
        point1 = point1 + this.sdq.Topic1_20;
        point1 = point1 + this.sdq.Topic1_21;
        point1 = point1 + this.sdq.Topic1_22;
        point1 = point1 + this.sdq.Topic1_22;
        point1 = point1 + this.sdq.Topic1_23;
        point1 = point1 + this.sdq.Topic1_24;
        point1 = point1 + this.sdq.Topic1_25;

        var point2 = this.sdq.Topic2;
        var point2sub = this.sdq.Topic2_1 + this.sdq.Topic2_2;
        
        point2sub = point2sub + this.sdq.Topic2_4;
        point2sub = point2sub + this.sdq.Topic2_5;
        point2sub = point2sub + this.sdq.Topic2_6;
        point2sub = point2sub + this.sdq.Topic2_7;

        point2 = point2 * point2sub;

        this.router.navigate(['sdq/sumsdq1', this.sdq ]);
       }
     }
   );

  }
  
}
