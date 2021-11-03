import { TestBed } from '@angular/core/testing';

import { StudentRegisterService } from './student-register.service';

describe('StudentRegisterService', () => {
  let service: StudentRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
