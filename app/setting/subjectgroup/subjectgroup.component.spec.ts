import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectgroupComponent } from './subjectgroup.component';

describe('SubjectgroupComponent', () => {
  let component: SubjectgroupComponent;
  let fixture: ComponentFixture<SubjectgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectgroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
