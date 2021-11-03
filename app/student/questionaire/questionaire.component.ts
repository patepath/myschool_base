import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Student, SDQ } from '../../school';
import { StudentService } from '../../services/student.service';
import { SdqService } from '../../services/sdq.service';

declare var $:any;

@Component({
  selector: 'app-questionaire',
  templateUrl: './questionaire.component.html',
  styleUrls: ['./questionaire.component.css']
})
export class QuestionaireComponent implements OnInit {

  public student: Student;
  public sdq: SDQ;

  public code: string;
  public no: number;
  public fullname: string;
  public grade: string;
  public room: string;
  public issubmit: boolean;
  
  constructor(private router: Router, private studentServ: StudentService,  private sdqServ: SdqService) { }

  ngOnInit(): void {
    this.sdq = {
      Code: '',
      Type: 3,
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
    } }

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

          this.sdqServ.getbycode(this.sdq.Code, 3).subscribe(
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
    this.sdq.Type = 3;

    this.sdqServ.save(this.sdq).subscribe(
      msg => {
        if(msg.Result) {
          this.router.navigate(['sdq/sumsdqstudent', this.sdq ]);
       }
     }
   );

  }

}
