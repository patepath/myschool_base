import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumsdqStudentComponent } from './sumsdq-student.component';

describe('SumsdqStudentComponent', () => {
  let component: SumsdqStudentComponent;
  let fixture: ComponentFixture<SumsdqStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumsdqStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumsdqStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
