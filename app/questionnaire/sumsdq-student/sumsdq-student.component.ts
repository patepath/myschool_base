import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sumsdq-student',
  templateUrl: './sumsdq-student.component.html',
  styleUrls: ['./sumsdq-student.component.css']
})
export class SumsdqStudentComponent implements OnInit {

  public no1: number;
  public no2: number;
  public no3: number;
  public no4: number;
  public no5: number;
  public no6: number;
  public no7: number;
  public no8: number;
  public no9: number;
  public no10: number;
  public no11: number;
  public no12: number;
  public no13: number;
  public no14: number;
  public no15: number;
  public no16: number;
  public no17: number;
  public no18: number;
  public no19: number;
  public no20: number;
  public no21: number;
  public no22: number;
  public no23: number;
  public no24: number;
  public no25: number;

  public sumtopic1: number;
  public sumtopic2: number;
  public sumtopic3: number;
  public sumtopic4: number;
  public sumtopic5: number;

  public eq1: number;
  public eq2: number;
  public eq3: number;
  public eq4: number;
  public eq5: number;
  public eq6: number;
  public eq7: number;
  public eq8: number;
  public eq9: number;
  public eq10: number;
  public eq11: number;
  public eq12: number;
  public eq13: number;
  public eq14: number;
  public eq15: number;
  public eq16: number;
  public eq17: number;
  public eq18: number;
  public eq19: number;
  public eq20: number;
  public eq21: number;
  public eq22: number;
  public eq23: number;
  public eq24: number;
  public eq25: number;
  public eq26: number;
  public eq27: number;
  public eq28: number;
  public eq29: number;
  public eq30: number;
  public eq31: number;
  public eq32: number;
  public eq33: number;
  public eq34: number;
  public eq35: number;
  public eq36: number;
  public eq37: number;
  public eq38: number;
  public eq39: number;
  public eq40: number;
  public eq41: number;
  public eq42: number;
  public eq43: number;
  public eq44: number;
  public eq45: number;
  public eq46: number;
  public eq47: number;
  public eq48: number;
  public eq49: number;
  public eq50: number;
  public eq51: number;
  public eq52: number;
    
  public point_eq1_1: number;
  public point_eq1_2: number;
  public point_eq1_3: number;
  public point_eq2_1: number;
  public point_eq2_2: number;
  public point_eq2_3: number;
  public point_eq3_1: number;
  public point_eq3_2: number;
  public point_eq3_3: number;

  public point_eq_goup1: number;
  public point_eq_goup2: number;
  public point_eq_goup3: number;

  public point_eq: number;

  public topic_complie1: string;
  public topic_complie2: string;
  public topic_complie3: string;
  public topic_complie4: string;
  public topic_complie5: string;
  public topic_complie6: string;
  public topic_complie7: string;
  public topic_complie8: string;
  public topic_complie9: string;

  public group_complie1: string;
  public group_complie2: string;
  public group_complie3: string;

  public eq_complie: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.no1 = parseInt(this.route.snapshot.paramMap.get("Topic1_1"));
    this.no2 = parseInt(this.route.snapshot.paramMap.get("Topic1_2"));
    this.no3 = parseInt(this.route.snapshot.paramMap.get("Topic1_3"));
    this.no4 = parseInt(this.route.snapshot.paramMap.get("Topic1_4"));
    this.no5 = parseInt(this.route.snapshot.paramMap.get("Topic1_5"));
    this.no6 = parseInt(this.route.snapshot.paramMap.get("Topic1_6"));
    this.no7 = parseInt(this.route.snapshot.paramMap.get("Topic1_7"));
    this.no8 = parseInt(this.route.snapshot.paramMap.get("Topic1_8"));
    this.no9 = parseInt(this.route.snapshot.paramMap.get("Topic1_9"));
    this.no10 = parseInt(this.route.snapshot.paramMap.get("Topic1_10"));
    this.no11 = parseInt(this.route.snapshot.paramMap.get("Topic1_11"));
    this.no12 = parseInt(this.route.snapshot.paramMap.get("Topic1_12"));
    this.no13 = parseInt(this.route.snapshot.paramMap.get("Topic1_13"));
    this.no14 = parseInt(this.route.snapshot.paramMap.get("Topic1_14"));
    this.no15 = parseInt(this.route.snapshot.paramMap.get("Topic1_15"));
    this.no16 = parseInt(this.route.snapshot.paramMap.get("Topic1_16"));
    this.no17 = parseInt(this.route.snapshot.paramMap.get("Topic1_17"));
    this.no18 = parseInt(this.route.snapshot.paramMap.get("Topic1_18"));
    this.no19 = parseInt(this.route.snapshot.paramMap.get("Topic1_19"));
    this.no20 = parseInt(this.route.snapshot.paramMap.get("Topic1_20"));
    this.no21 = parseInt(this.route.snapshot.paramMap.get("Topic1_21"));
    this.no22 = parseInt(this.route.snapshot.paramMap.get("Topic1_22"));
    this.no23 = parseInt(this.route.snapshot.paramMap.get("Topic1_23"));
    this.no24 = parseInt(this.route.snapshot.paramMap.get("Topic1_24"));
    this.no25 = parseInt(this.route.snapshot.paramMap.get("Topic1_25"));

    this.pointTopic1();
    this.pointTopic2();
    this.pointTopic3();
    this.pointTopic4();
    this.pointTopic5();
    
    this.eq1 = parseInt(this.route.snapshot.paramMap.get("Topic3_1"));
    this.eq2 = parseInt(this.route.snapshot.paramMap.get("Topic3_2"));
    this.eq3 = parseInt(this.route.snapshot.paramMap.get("Topic3_3"));
    this.eq4 = parseInt(this.route.snapshot.paramMap.get("Topic3_4"));
    this.eq5 = parseInt(this.route.snapshot.paramMap.get("Topic3_5"));
    this.eq6 = parseInt(this.route.snapshot.paramMap.get("Topic3_6"));
    this.eq7 = parseInt(this.route.snapshot.paramMap.get("Topic3_7"));
    this.eq8 = parseInt(this.route.snapshot.paramMap.get("Topic3_8"));
    this.eq9 = parseInt(this.route.snapshot.paramMap.get("Topic3_9"));
    this.eq10 = parseInt(this.route.snapshot.paramMap.get("Topic3_10"));
    this.eq11 = parseInt(this.route.snapshot.paramMap.get("Topic3_11"));
    this.eq12 = parseInt(this.route.snapshot.paramMap.get("Topic3_12"));
    this.eq13 = parseInt(this.route.snapshot.paramMap.get("Topic3_13"));
    this.eq14 = parseInt(this.route.snapshot.paramMap.get("Topic3_14"));
    this.eq15 = parseInt(this.route.snapshot.paramMap.get("Topic3_15"));
    this.eq16 = parseInt(this.route.snapshot.paramMap.get("Topic3_16"));
    this.eq17 = parseInt(this.route.snapshot.paramMap.get("Topic3_17"));
    this.eq18 = parseInt(this.route.snapshot.paramMap.get("Topic3_18"));
    this.eq19 = parseInt(this.route.snapshot.paramMap.get("Topic3_19"));
    this.eq20 = parseInt(this.route.snapshot.paramMap.get("Topic3_20"));
    this.eq21 = parseInt(this.route.snapshot.paramMap.get("Topic3_21"));
    this.eq22 = parseInt(this.route.snapshot.paramMap.get("Topic3_22"));
    this.eq23 = parseInt(this.route.snapshot.paramMap.get("Topic3_23"));
    this.eq24 = parseInt(this.route.snapshot.paramMap.get("Topic3_24"));
    this.eq25 = parseInt(this.route.snapshot.paramMap.get("Topic3_25"));
    this.eq26 = parseInt(this.route.snapshot.paramMap.get("Topic3_26"));
    this.eq27 = parseInt(this.route.snapshot.paramMap.get("Topic3_27"));
    this.eq28 = parseInt(this.route.snapshot.paramMap.get("Topic3_28"));
    this.eq29 = parseInt(this.route.snapshot.paramMap.get("Topic3_29"));
    this.eq30 = parseInt(this.route.snapshot.paramMap.get("Topic3_30"));
    this.eq31 = parseInt(this.route.snapshot.paramMap.get("Topic3_31"));
    this.eq32 = parseInt(this.route.snapshot.paramMap.get("Topic3_32"));
    this.eq33 = parseInt(this.route.snapshot.paramMap.get("Topic3_33"));
    this.eq34 = parseInt(this.route.snapshot.paramMap.get("Topic3_34"));
    this.eq35 = parseInt(this.route.snapshot.paramMap.get("Topic3_35"));
    this.eq36 = parseInt(this.route.snapshot.paramMap.get("Topic3_36"));
    this.eq37 = parseInt(this.route.snapshot.paramMap.get("Topic3_37"));
    this.eq38 = parseInt(this.route.snapshot.paramMap.get("Topic3_38"));
    this.eq39 = parseInt(this.route.snapshot.paramMap.get("Topic3_39"));
    this.eq40 = parseInt(this.route.snapshot.paramMap.get("Topic3_40"));
    this.eq41 = parseInt(this.route.snapshot.paramMap.get("Topic3_41"));
    this.eq42 = parseInt(this.route.snapshot.paramMap.get("Topic3_42"));
    this.eq43 = parseInt(this.route.snapshot.paramMap.get("Topic3_43"));
    this.eq44 = parseInt(this.route.snapshot.paramMap.get("Topic3_44"));
    this.eq45 = parseInt(this.route.snapshot.paramMap.get("Topic3_45"));
    this.eq46 = parseInt(this.route.snapshot.paramMap.get("Topic3_46"));
    this.eq47 = parseInt(this.route.snapshot.paramMap.get("Topic3_47"));
    this.eq48 = parseInt(this.route.snapshot.paramMap.get("Topic3_48"));
    this.eq49 = parseInt(this.route.snapshot.paramMap.get("Topic3_49"));
    this.eq50 = parseInt(this.route.snapshot.paramMap.get("Topic3_50"));
    this.eq51 = parseInt(this.route.snapshot.paramMap.get("Topic3_51"));
    this.eq52 = parseInt(this.route.snapshot.paramMap.get("Topic3_52"));

    this.eq_group2();
    this.sumeqpoint();
    this.compliepoint();

  }

  pointTopic1() {
    this.no3 = this.no3 - 1;
    this.no8 = this.no8 - 1;
    this.no13 = this.no13 - 1;
    this.no16 = this.no16 - 1;
    this.no24 = this.no24 - 1;

    this.sumtopic1 = this.no3 + this.no8 + this.no13 + this.no16 + this.no24;
  }

  pointTopic2() {
    this.no5 = this.no5 - 1;
    this.no7 = (this.no7 - 3)  * -1;
    this.no12 = this.no12 - 1;
    this.no18 = this.no18 - 1;
    this.no22 = this.no22 - 1;

    this.sumtopic2 = this.no5 + this.no7 + this.no12 + this.no18 + this.no22;
  }

  pointTopic3() {
    this.no2 = this.no2 - 1;
    this.no10 = this.no10 - 1;
    this.no15 = this.no15 - 1;
    this.no21 = (this.no21 - 3) * -1;
    this.no25 = (this.no25 - 3) * -1;

    this.sumtopic3 = this.no2 + this.no10 + this.no15 + this.no21 + this.no25;
  }

  pointTopic4() {
    this.no6 = this.no6 - 1;
    this.no11 = (this.no11 - 3) * -1;
    this.no14 = (this.no14 - 3) * -1;
    this.no19 = this.no19 - 1;
    this.no23 = this.no23 - 1;

    this.sumtopic4 = this.no6 + this.no11 + this.no14 + this.no19 + this.no23;
  }

  pointTopic5() {
    this.no1 = this.no1 - 1;
    this.no4 = this.no4 - 1;
    this.no9 = this.no9 - 1;
    this.no17 = this.no17 - 1;
    this.no20 = this.no20 - 1;

    this.sumtopic5 = this.no1 + this.no4 + this.no9 + this.no17 + this.no20;
  }

  eq_group2() {
    this.eq2 = (this.eq2 - 5) * -1;
    this.eq3 = (this.eq3 - 5) * -1;
    this.eq5 = (this.eq5 - 5) * -1;
    this.eq8 = (this.eq8 - 5) * -1;
    this.eq9 = (this.eq9 - 5) * -1;
    this.eq11 = (this.eq11 - 5) * -1;
    this.eq13 = (this.eq13 - 5) * -1;
    this.eq16 = (this.eq16 - 5) * -1;
    this.eq18 = (this.eq18 - 5) * -1;
    this.eq19 = (this.eq19 - 5) * -1;
    this.eq21 = (this.eq21 - 5) * -1;
    this.eq24 = (this.eq24 - 5) * -1;
    this.eq26 = (this.eq26 - 5) * -1;
    this.eq27 = (this.eq27 - 5) * -1;
    this.eq29 = (this.eq29 - 5) * -1;
    this.eq30 = (this.eq30 - 5) * -1;
    this.eq33 = (this.eq33 - 5) * -1;
    this.eq35 = (this.eq35 - 5) * -1;
    this.eq37 = (this.eq37 - 5) * -1;
    this.eq40 = (this.eq40 - 5) * -1;
    this.eq45 = (this.eq45 - 5) * -1;
    this.eq47 = (this.eq47 - 5) * -1;
    this.eq51 = (this.eq51 - 5) * -1;
    this.eq52 = (this.eq52 - 5) * -1;
  }

  sumeqpoint() {
    this.point_eq1_1 = this.eq1 + this.eq2 + this.eq3 + this.eq4 + this.eq5 + this.eq6;    
    this.point_eq1_2 = this.eq7 + this.eq8 + this.eq9 + this.eq10 + this.eq11 + this.eq12;    
    this.point_eq1_3 = this.eq13 + this.eq14 + this.eq15 + this.eq16 + this.eq17 + this.eq18;    
    this.point_eq2_1 = this.eq19 + this.eq20 + this.eq21 + this.eq22 + this.eq23 + this.eq24;    
    this.point_eq2_2 = this.eq25 + this.eq26 + this.eq27 + this.eq28 + this.eq29 + this.eq30;    
    this.point_eq2_3 = this.eq31 + this.eq32 + this.eq33 + this.eq34 + this.eq35 + this.eq36;    
    this.point_eq3_1 = this.eq37 + this.eq38 + this.eq39 + this.eq40;    
    this.point_eq3_2 = this.eq41 + this.eq42 + this.eq43 + this.eq44 + this.eq45 + this.eq46;    
    this.point_eq3_3 = this.eq47 + this.eq48 + this.eq49 + this.eq50 + this.eq51 + this.eq52;    

    this.point_eq_goup1 = this.point_eq1_1 + this.point_eq1_2 + this.point_eq1_3;
    this.point_eq_goup2 = this.point_eq2_1 + this.point_eq2_2 + this.point_eq2_3;
    this.point_eq_goup3 = this.point_eq3_1 + this.point_eq3_2 + this.point_eq3_3;

    this.point_eq = this.point_eq_goup1 + this.point_eq_goup2 + this.point_eq_goup3;
  }

  compliepoint() {
    
    if(this.point_eq1_1 < 13) {
      this.topic_complie1 = "ต่ำ";
    } else if(this.point_eq1_1 >= 13 && this.point_eq1_1 <= 17) {
      this.topic_complie1 = "ปกติ";
    } else {
      this.topic_complie1 = "สูง";
    }

    if(this.point_eq1_2 < 16) {
      this.topic_complie2 = "ต่ำ";
    } else if(this.point_eq1_2 >= 16 && this.point_eq1_2 <= 20) {
      this.topic_complie2 = "ปกติ";
    } else {
      this.topic_complie2 = "สูง";
    }
    
    if(this.point_eq1_3 < 16) {
      this.topic_complie3 = "ต่ำ";
    } else if(this.point_eq1_3 >= 16 && this.point_eq1_3 <= 22) {
      this.topic_complie3 = "ปกติ";
    } else {
      this.topic_complie3 = "สูง";
    }

    if(this.point_eq2_1 < 14) {
      this.topic_complie4 = "ต่ำ";
    } else if(this.point_eq2_1 >= 14 && this.point_eq2_1 <= 20) {
      this.topic_complie4 = "ปกติ";
    } else {
      this.topic_complie4 = "สูง";
    }

    if(this.point_eq2_2 < 13) {
      this.topic_complie5 = "ต่ำ";
    } else if(this.point_eq2_1 >= 13 && this.point_eq2_1 <= 19) {
      this.topic_complie5 = "ปกติ";
    } else {
      this.topic_complie5 = "สูง";
    }

    if(this.point_eq2_3 < 14) {
      this.topic_complie6 = "ต่ำ";
    } else if(this.point_eq2_1 >= 14 && this.point_eq2_1 <= 20) {
      this.topic_complie6 = "ปกติ";
    } else {
      this.topic_complie6 = "สูง";
    }

    if(this.point_eq3_1 < 9) {
      this.topic_complie7 = "ต่ำ";
    } else if(this.point_eq3_1 >= 9 && this.point_eq3_1 <= 13) {
      this.topic_complie7 = "ปกติ";
    } else {
      this.topic_complie7 = "สูง";
    }

    if(this.point_eq3_2 < 16) {
      this.topic_complie8 = "ต่ำ";
    } else if(this.point_eq3_2 >= 16 && this.point_eq3_2 <= 22) {
      this.topic_complie8 = "ปกติ";
    } else {
      this.topic_complie8 = "สูง";
    }

    if(this.point_eq3_3 < 15) {
      this.topic_complie9 = "ต่ำ";
    } else if(this.point_eq3_3 >= 15 && this.point_eq3_3 <= 21) {
      this.topic_complie9 = "ปกติ";
    } else {
      this.topic_complie9 = "สูง";
    }


    if(this.point_eq_goup1 < 48) {
      this.group_complie1 = "ต่ำ";
    } else if(this.point_eq_goup1 >= 48 && this.point_eq_goup1 <= 58) {
      this.group_complie1 = "ปกติ";
    } else {
      this.group_complie1 = "สูง";
    }
    
    if(this.point_eq_goup2 < 45) {
      this.group_complie2 = "ต่ำ";
    } else if(this.point_eq_goup2 >= 45 && this.point_eq_goup2 <= 57) {
      this.group_complie2 = "ปกติ";
    } else {
      this.group_complie2 = "สูง";
    }

    if(this.point_eq_goup3 < 40) {
      this.group_complie3 = "ต่ำ";
    } else if(this.point_eq_goup3 >= 40 && this.point_eq_goup3 <= 55) {
      this.group_complie3 = "ปกติ";
    } else {
      this.group_complie3 = "สูง";
    }


    if(this.point_eq < 140) {
      this.eq_complie = "ต่ำ";
    } else if(this.point_eq >= 140 && this.point_eq <= 170) {
      this.eq_complie = "ปกติ";
    } else {
      this.eq_complie = "สูง";
    }

  }

  clickbttn() {
    this.router.navigate(['/sdq/sdq3']);
  }
}
