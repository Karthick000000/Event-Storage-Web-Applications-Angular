import { TestBed } from '@angular/core/testing';

import { ApilistService } from './apilist.service';

describe('ApilistService', () => {
  let service: ApilistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApilistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
