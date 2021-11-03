import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinoutFrmComponent } from './checkinout-frm.component';

describe('CheckinoutFrmComponent', () => {
  let component: CheckinoutFrmComponent;
  let fixture: ComponentFixture<CheckinoutFrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckinoutFrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinoutFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
