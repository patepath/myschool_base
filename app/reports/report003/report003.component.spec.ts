import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report003Component } from './report003.component';

describe('Report003Component', () => {
  let component: Report003Component;
  let fixture: ComponentFixture<Report003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report003Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Report003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
