import { TestBed } from '@angular/core/testing';

import { SubjectStudentService } from './subject-student.service';

describe('SubjectStudentService', () => {
  let service: SubjectStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
