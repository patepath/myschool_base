import { TestBed } from '@angular/core/testing';

import { CheckinoutService } from './checkinout.service';

describe('CheckinoutService', () => {
  let service: CheckinoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckinoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
