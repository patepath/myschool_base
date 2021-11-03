import { TestBed } from '@angular/core/testing';

import { CheckinsubjectService } from './checkinsubject.service';

describe('CheckinsubjectService', () => {
  let service: CheckinsubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckinsubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
