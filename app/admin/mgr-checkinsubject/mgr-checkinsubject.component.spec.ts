import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgrCheckinsubjectComponent } from './mgr-checkinsubject.component';

describe('MgrCheckinsubjectComponent', () => {
  let component: MgrCheckinsubjectComponent;
  let fixture: ComponentFixture<MgrCheckinsubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MgrCheckinsubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MgrCheckinsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
