import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectStudentComponent } from './subject-student.component';

describe('SubjectStudentComponent', () => {
  let component: SubjectStudentComponent;
  let fixture: ComponentFixture<SubjectStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
