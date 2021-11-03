import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegisterFormComponent } from './student-register-form.component';

describe('StudentRegisterFormComponent', () => {
  let component: StudentRegisterFormComponent;
  let fixture: ComponentFixture<StudentRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRegisterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
