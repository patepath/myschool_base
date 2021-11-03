import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report004Component } from './report004.component';

describe('Report004Component', () => {
  let component: Report004Component;
  let fixture: ComponentFixture<Report004Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report004Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Report004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
