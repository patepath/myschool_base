import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sumsdq1',
  templateUrl: './sumsdq1.component.html',
  styleUrls: ['./sumsdq1.component.css']
})
export class Sumsdq1Component implements OnInit {

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

  public title: string;

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

    switch(this.route.snapshot.paramMap.get("Type"))  {
      case "1":
        this.title = 'การแปลผล SDQ (สำหรับครูประเมินนักเรียน)';
        break;

      case "2":
        this.title = 'การแปลผล SDQ (สำหรับผูู้ปกครองประเมินนักเรียน)';
        break;

    }

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

  clickbttn() {
    this.router.navigate(['/sdq/sdq1']);
  }

}
