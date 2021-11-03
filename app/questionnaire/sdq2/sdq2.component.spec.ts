import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdq2Component } from './sdq2.component';

describe('Sdq2Component', () => {
  let component: Sdq2Component;
  let fixture: ComponentFixture<Sdq2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sdq2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sdq2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
