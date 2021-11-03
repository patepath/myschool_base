import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report001Component } from './report001.component';

describe('Report001Component', () => {
  let component: Report001Component;
  let fixture: ComponentFixture<Report001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Report001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
