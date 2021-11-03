import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinprofildFrmComponent } from './checkinprofild-frm.component';

describe('CheckinprofildFrmComponent', () => {
  let component: CheckinprofildFrmComponent;
  let fixture: ComponentFixture<CheckinprofildFrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckinprofildFrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinprofildFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
