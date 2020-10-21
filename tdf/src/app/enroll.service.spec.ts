import { TestBed } from '@angular/core/testing';

import { EnrollService } from './enroll.service';

describe('EnrollService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnrollService = TestBed.get(EnrollService);
    expect(service).toBeTruthy();
  });
});
