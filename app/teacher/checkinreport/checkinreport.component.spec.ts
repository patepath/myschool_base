import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinreportComponent } from './checkinreport.component';

describe('CheckinreportComponent', () => {
  let component: CheckinreportComponent;
  let fixture: ComponentFixture<CheckinreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckinreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
