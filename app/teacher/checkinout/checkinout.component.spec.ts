import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinoutComponent } from './checkinout.component';

describe('CheckinoutComponent', () => {
  let component: CheckinoutComponent;
  let fixture: ComponentFixture<CheckinoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckinoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
