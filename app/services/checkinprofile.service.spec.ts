import { TestBed } from '@angular/core/testing';

import { CheckinprofileService } from './checkinprofile.service';

describe('CheckinprofileService', () => {
  let service: CheckinprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckinprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
