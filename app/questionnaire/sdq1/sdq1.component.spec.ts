import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdq1Component } from './sdq1.component';

describe('Sdq1Component', () => {
  let component: Sdq1Component;
  let fixture: ComponentFixture<Sdq1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sdq1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sdq1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
