import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report005Component } from './report005.component';

describe('Report005Component', () => {
  let component: Report005Component;
  let fixture: ComponentFixture<Report005Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report005Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Report005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
