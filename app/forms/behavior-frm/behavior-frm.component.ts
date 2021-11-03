import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Behavior } from '../../school';
import { BehaviorService } from '../../services/behavior.service';

@Component({
  selector: 'app-behavior-frm',
  templateUrl: './behavior-frm.component.html',
  styleUrls: ['./behavior-frm.component.css']
})
export class BehaviorFrmComponent implements OnInit {

  @Input() behavior: Behavior; 
  @Output() behaviors = new EventEmitter<Behavior[]>();

  constructor(public behaviorServ: BehaviorService) { 

    this.behavior = {
      Ref: 0,
      GroupNo: 0,
      GroupName: "",
      TopicNo: 0,
      TopicName: "",
      Point: 0,
    }

  }

  ngOnInit(): void {

  }

	save() {
    this.behaviorServ.save(this.behavior).subscribe(
      behaviors => this.behaviors.emit(behaviors)
    ); 
	}

	cancel() {
		this.behaviors.emit([]);
	}

  remove() {
    this.behaviorServ.delete(this.behavior).subscribe(
      behaviors => this.behaviors.emit(behaviors)
    ); 
  }

}
