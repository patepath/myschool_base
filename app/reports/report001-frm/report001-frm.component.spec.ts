import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report001FrmComponent } from './report001-frm.component';

describe('Report001FrmComponent', () => {
  let component: Report001FrmComponent;
  let fixture: ComponentFixture<Report001FrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report001FrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Report001FrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
