import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeFrmComponent } from './grade-frm.component';

describe('GradeFrmComponent', () => {
  let component: GradeFrmComponent;
  let fixture: ComponentFixture<GradeFrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeFrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
