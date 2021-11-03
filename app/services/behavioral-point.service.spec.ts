import { TestBed } from '@angular/core/testing';

import { BehavioralPointService } from './behavioral-point.service';

describe('BehavioralPointService', () => {
  let service: BehavioralPointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehavioralPointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
