import { TestBed } from '@angular/core/testing';

import { SubjectgroupService } from './subjectgroup.service';

describe('SubjectgroupService', () => {
  let service: SubjectgroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectgroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
