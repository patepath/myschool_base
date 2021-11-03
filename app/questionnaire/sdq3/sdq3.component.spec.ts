import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdq3Component } from './sdq3.component';

describe('Sdq3Component', () => {
  let component: Sdq3Component;
  let fixture: ComponentFixture<Sdq3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sdq3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sdq3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
