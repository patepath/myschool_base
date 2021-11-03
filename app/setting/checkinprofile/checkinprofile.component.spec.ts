import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinprofileComponent } from './checkinprofile.component';

describe('CheckinprofileComponent', () => {
  let component: CheckinprofileComponent;
  let fixture: ComponentFixture<CheckinprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckinprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
