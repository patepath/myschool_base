import { TestBed } from '@angular/core/testing';

import { CutpointService } from './cutpoint.service';

describe('CutpointService', () => {
  let service: CutpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CutpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
