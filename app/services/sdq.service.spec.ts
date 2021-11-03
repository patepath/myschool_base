import { TestBed } from '@angular/core/testing';

import { SdqService } from './sdq.service';

describe('SdqService', () => {
  let service: SdqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
