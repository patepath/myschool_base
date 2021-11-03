import { TestBed } from '@angular/core/testing';

import { DeptService } from './dept.service';

describe('DeptService', () => {
  let service: DeptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
