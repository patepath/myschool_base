import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineRegisterComponent } from './line-register.component';

describe('LineRegisterComponent', () => {
  let component: LineRegisterComponent;
  let fixture: ComponentFixture<LineRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
