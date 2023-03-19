import { TestBed } from '@angular/core/testing';

import { ModuleListService } from './module-list.service';

describe('ModuleListService', () => {
  let service: ModuleListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
