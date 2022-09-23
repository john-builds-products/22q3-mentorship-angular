import { TestBed } from '@angular/core/testing';

import { JobsAPI } from './jobs-api';

describe('HttpCallService', () => {
  let service: JobsAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobsAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
