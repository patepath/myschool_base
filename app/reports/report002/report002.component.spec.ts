import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report002Component } from './report002.component';

describe('Report002Component', () => {
  let component: Report002Component;
  let fixture: ComponentFixture<Report002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report002Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Report002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
