import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sumsdq1Component } from './sumsdq1.component';

describe('Sumsdq1Component', () => {
  let component: Sumsdq1Component;
  let fixture: ComponentFixture<Sumsdq1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sumsdq1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sumsdq1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
